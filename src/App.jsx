import React, { useEffect, useRef, useState } from 'react';
import * as ort from 'onnxruntime-web';

// Set WebAssembly engine path
ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';

const CLASS_LABELS = {
  0: { name: "Actinic Keratosis", risk: "Pre-Cancerous", color: "#d97706" },
  1: { name: "Basal Cell Carcinoma", risk: "Malignant", color: "#dc2626" },
  2: { name: "Benign Keratosis", risk: "Non-Cancerous", color: "#16a34a" },
  3: { name: "Dermatofibroma", risk: "Non-Cancerous", color: "#16a34a" },
  4: { name: "Melanoma", risk: "High Risk", color: "#b91c1c" },
  5: { name: "Melanocytic Nevus", risk: "Normal Mole", color: "#2563eb" },
  6: { name: "Vascular Lesion", risk: "Benign Growth", color: "#7c3aed" }
};

export default function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Initializing ONNX Runtime...");
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([]);
  
  // Torch / Flashlight state
  const [torchAvailable, setTorchAvailable] = useState(false);
  const [torchOn, setTorchOn] = useState(false);

  // Load ONNX Model and Local Storage History
  useEffect(() => {
    async function init() {
      try {
        setStatus("Loading skin assessment model...");
        const modelSession = await ort.InferenceSession.create('./model/skin_model.onnx');
        setSession(modelSession);
        setLoading(false);
        setStatus("AI Model Ready");
      } catch (err) {
        console.error(err);
        setStatus("Model load failed. Verify skin_model.onnx in public/model/");
        setLoading(false);
      }

      const saved = localStorage.getItem('healthscan_history');
      if (saved) {
        try { setHistory(JSON.parse(saved)); } catch (e) { /* ignore */ }
      }
    }
    init();
    startCamera();
  }, []);

  // Initialize rear camera stream and detect Torch capability
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      if (videoRef.current) videoRef.current.srcObject = stream;

      // Check if camera supports Torch / Flashlight
      const track = stream.getVideoTracks()[0];
      if (track && track.getCapabilities) {
        const capabilities = track.getCapabilities();
        if (capabilities.torch) {
          setTorchAvailable(true);
        }
      }
    } catch (err) {
      console.error("Camera access error:", err);
      setStatus("Camera access denied or unavailable.");
    }
  };

  // Toggle Flashlight ON/OFF
  const toggleTorch = async () => {
    if (!videoRef.current || !videoRef.current.srcObject) return;
    const track = videoRef.current.srcObject.getVideoTracks()[0];
    if (!track) return;

    try {
      const nextState = !torchOn;
      await track.applyConstraints({
        advanced: [{ torch: nextState }]
      });
      setTorchOn(nextState);
    } catch (err) {
      console.error("Torch error:", err);
      alert("Unable to switch flashlight on this device.");
    }
  };

  // Perform AI Inference on captured frame
  const analyzeFrame = async () => {
    if (!session || !videoRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 224;
    canvas.height = 224;
    ctx.drawImage(video, 0, 0, 224, 224);

    const imgData = ctx.getImageData(0, 0, 224, 224).data;
    const float32Data = new Float32Array(1 * 3 * 224 * 224);

    // Convert RGBA frame buffer to NCHW Float32 tensor normalized to [0, 1]
    for (let i = 0; i < 224 * 224; i++) {
      float32Data[i] = imgData[i * 4] / 255.0;                   // R
      float32Data[i + 224 * 224] = imgData[i * 4 + 1] / 255.0;     // G
      float32Data[i + 224 * 224 * 2] = imgData[i * 4 + 2] / 255.0; // B
    }

    const inputTensor = new ort.Tensor('float32', float32Data, [1, 3, 224, 224]);
    const feeds = {};
    feeds[session.inputNames[0]] = inputTensor;

    const output = await session.run(feeds);
    const logits = output[session.outputNames[0]].data;

    // Softmax calculation
    const expValues = Array.from(logits).map(v => Math.exp(v));
    const sumExp = expValues.reduce((a, b) => a + b, 0);
    const probs = expValues.map(v => v / sumExp);

    let maxIdx = 0;
    let maxProb = probs[0];
    for (let i = 1; i < probs.length; i++) {
      if (probs[i] > maxProb) {
        maxProb = probs[i];
        maxIdx = i;
      }
    }

    const confidence = (maxProb * 100).toFixed(1);
    const labelInfo = CLASS_LABELS[maxIdx] || { name: `Class ${maxIdx}`, risk: "Unknown", color: "#4b5563" };

    const newScan = {
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      date: new Date().toLocaleDateString(),
      label: labelInfo.name,
      risk: labelInfo.risk,
      color: labelInfo.color,
      confidence
    };

    setCurrentResult(newScan);

    const updatedHistory = [newScan, ...history].slice(0, 10);
    setHistory(updatedHistory);
    localStorage.setItem('healthscan_history', JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('healthscan_history');
  };

  return (
    <div style={styles.container}>
      {/* App Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>EdgeAI HealthScan</h1>
        <span style={styles.badge}>{loading ? "Loading..." : "Offline Ready"}</span>
      </header>

      {/* Medical Disclaimer Banner */}
      <div style={styles.disclaimer}>
        <strong>⚠️ Medical Notice:</strong> Experimental research tool. Ensure good lighting for reliable edge inference. Consult a dermatologist for medical evaluations.
      </div>

      {/* Main Dashboard Grid */}
      <main style={styles.grid}>
        {/* Camera Scanner Card */}
        <section style={styles.card}>
          <div style={styles.videoWrapper}>
            <video ref={videoRef} autoPlay playsInline muted style={styles.video} />
            <div style={styles.reticle}></div>

            {/* Flashlight Button Overlay */}
            {torchAvailable && (
              <button
                onClick={toggleTorch}
                style={{
                  ...styles.torchButton,
                  backgroundColor: torchOn ? '#eab308' : 'rgba(0,0,0,0.6)'
                }}
              >
                {torchOn ? '🔦 Flash ON' : '💡 Flash OFF'}
              </button>
            )}
          </div>

          <p style={styles.statusText}>{status}</p>

          <button
            onClick={analyzeFrame}
            disabled={loading}
            style={{ ...styles.scanButton, opacity: loading ? 0.6 : 1 }}
          >
            📸 Scan & Analyze Lesion
          </button>
        </section>

        {/* Diagnostic Results Card */}
        {currentResult && (
          <section style={styles.card}>
            <h2 style={styles.cardTitle}>Latest Scan Result</h2>
            <div style={styles.resultHeader}>
              <h3 style={styles.resultName}>{currentResult.label}</h3>
              <span style={{ ...styles.riskTag, backgroundColor: currentResult.color }}>
                {currentResult.risk}
              </span>
            </div>

            {/* Visual Confidence Bar */}
            <div style={styles.meterContainer}>
              <div style={styles.meterHeader}>
                <span>Model Confidence</span>
                <strong>{currentResult.confidence}%</strong>
              </div>
              <div style={styles.progressBarBackground}>
                <div
                  style={{
                    ...styles.progressBarFill,
                    width: `${currentResult.confidence}%`,
                    backgroundColor: currentResult.color
                  }}
                />
              </div>
            </div>
            <p style={styles.timestamp}>Analyzed on-device at {currentResult.timestamp}</p>
          </section>
        )}

        {/* History Log */}
        <section style={styles.card}>
          <div style={styles.historyHeader}>
            <h2 style={styles.cardTitle}>Scan History Log</h2>
            {history.length > 0 && (
              <button onClick={clearHistory} style={styles.clearBtn}>Clear</button>
            )}
          </div>

          {history.length === 0 ? (
            <p style={styles.emptyText}>No local scans recorded yet.</p>
          ) : (
            <ul style={styles.historyList}>
              {history.map((item) => (
                <li key={item.id} style={styles.historyItem}>
                  <div>
                    <strong style={{ color: item.color }}>{item.label}</strong>
                    <div style={styles.historySub}>{item.date} • {item.timestamp}</div>
                  </div>
                  <div style={styles.historyRight}>
                    <span>{item.confidence}%</span>
                    <span style={{ ...styles.riskDot, backgroundColor: item.color }} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

const styles = {
  container: { maxWidth: '500px', margin: '0 auto', padding: '16px', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1f2937', backgroundColor: '#f9fafb', minHeight: '100vh' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  title: { fontSize: '1.25rem', fontWeight: '700', margin: 0, color: '#111827' },
  badge: { fontSize: '0.75rem', fontWeight: '600', padding: '4px 8px', borderRadius: '12px', backgroundColor: '#dbeafe', color: '#1e40af' },
  disclaimer: { backgroundColor: '#fffbe6', border: '1px solid #ffe58f', padding: '10px 12px', borderRadius: '8px', fontSize: '0.78rem', color: '#855800', marginBottom: '16px', lineHeight: '1.4' },
  grid: { display: 'flex', flexDirection: 'column', gap: '16px' },
  card: { backgroundColor: '#ffffff', borderRadius: '12px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' },
  videoWrapper: { position: 'relative', width: '100%', height: '260px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#000' },
  video: { width: '100%', height: '100%', objectFit: 'cover' },
  reticle: { position: 'absolute', top: '50%', left: '50%', width: '140px', height: '140px', transform: 'translate(-50%, -50%)', border: '2px dashed rgba(255, 255, 255, 0.8)', borderRadius: '12px', pointerEvents: 'none' },
  torchButton: { position: 'absolute', top: '10px', right: '10px', border: 'none', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' },
  statusText: { fontSize: '0.85rem', color: '#6b7280', textAlign: 'center', margin: '10px 0' },
  scanButton: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#2563eb', color: '#fff', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' },
  cardTitle: { fontSize: '1rem', fontWeight: '600', margin: '0 0 12px 0', color: '#374151' },
  resultHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  resultName: { fontSize: '1.1rem', fontWeight: '700', margin: 0 },
  riskTag: { color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' },
  meterContainer: { marginBottom: '8px' },
  meterHeader: { display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px', color: '#4b5563' },
  progressBarBackground: { width: '100%', height: '10px', backgroundColor: '#e5e7eb', borderRadius: '5px', overflow: 'hidden' },
  progressBarFill: { height: '100%', transition: 'width 0.4s ease' },
  timestamp: { fontSize: '0.75rem', color: '#9ca3af', margin: 0, textAlign: 'right' },
  historyHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  clearBtn: { backgroundColor: 'transparent', border: 'none', color: '#ef4444', fontSize: '0.8rem', cursor: 'pointer', fontWeight: '600' },
  emptyText: { fontSize: '0.85rem', color: '#9ca3af', margin: 0 },
  historyList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' },
  historyItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f3f4f6' },
  historySub: { fontSize: '0.75rem', color: '#9ca3af' },
  historyRight: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600' },
  riskDot: { width: '8px', height: '8px', borderRadius: '50%' }
};