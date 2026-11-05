import React, { useEffect, useRef, useState } from 'react';
import * as ort from 'onnxruntime-web';

ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';

const CLASS_METADATA = {
  0: { 
    name: "Actinic Keratosis (akiec)", 
    category: "Pre-Cancerous", 
    riskLevel: "Moderate Risk", 
    color: "#d97706",
    action: "Schedule dermatological consultation. Monitor for changes in texture or growth.",
    description: "Sun-induced scaly lesion with potential for malignant transformation."
  },
  1: { 
    name: "Basal Cell Carcinoma (bcc)", 
    category: "Malignant", 
    riskLevel: "High Risk", 
    color: "#dc2626",
    action: "Prompt biopsy recommended. Consult a dermatologic surgeon for evaluation.",
    description: "Common non-melanoma skin malignancy originating in basal cells."
  },
  2: { 
    name: "Benign Keratosis (bkl)", 
    category: "Non-Cancerous", 
    riskLevel: "Low Risk", 
    color: "#16a34a",
    action: "No immediate medical intervention required. Routine annual monitoring.",
    description: "Harmless epidermal lesion (seborrheic keratosis or solar lentigo)."
  },
  3: { 
    name: "Dermatofibroma (df)", 
    category: "Non-Cancerous", 
    riskLevel: "Low Risk", 
    color: "#16a34a",
    action: "Benign dermal papule. No treatment necessary unless symptomatic.",
    description: "Common benign fibrous nodule typically found on lower limbs."
  },
  4: { 
    name: "Melanoma (mel)", 
    category: "Malignant", 
    riskLevel: "CRITICAL RISK", 
    color: "#991b1b",
    action: "URGENT: Immediate professional dermoscopy and excisional biopsy required.",
    description: "Aggressive cutaneous malignancy arising from pigment-producing melanocytes."
  },
  5: { 
    name: "Melanocytic Nevus (nv)", 
    category: "Benign Mole", 
    riskLevel: "Normal", 
    color: "#2563eb",
    action: "Normal pigmented nevus. Perform monthly self-examination using ABCDE criteria.",
    description: "Common benign proliferation of cutaneous melanocytes."
  },
  6: { 
    name: "Vascular Lesion (vasc)", 
    category: "Benign Growth", 
    riskLevel: "Low Risk", 
    color: "#7c3aed",
    action: "Benign vascular malformation. Clinical evaluation if bleeding or rapidly changing.",
    description: "Cutaneous vascular anomaly such as cherry angioma or pyogenic granuloma."
  }
};

export default function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [status, setStatus] = useState("Initializing ONNX WebAssembly...");
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('scanner');
  
  const [torchAvailable, setTorchAvailable] = useState(false);
  const [torchOn, setTorchOn] = useState(false);
  const [telemetry, setTelemetry] = useState(null);

  useEffect(() => {
    async function init() {
      try {
        setStatus("Loading MobileNetV3 WASM weights...");
        const modelSession = await ort.InferenceSession.create('./model/skin_model.onnx');
        setSession(modelSession);
        setLoading(false);
        setErrorMessage(null);
        setStatus("System Ready • On-Device Engine Active");
      } catch (err) {
        console.error("ONNX Model Initialization Error:", err);
        setErrorMessage(`Model failed to load: ${err.message}. Check public/model/skin_model.onnx`);
        setStatus("Initialization Failed");
        setLoading(false);
      }

      const saved = localStorage.getItem('healthscan_clinical_history');
      if (saved) {
        try { setHistory(JSON.parse(saved)); } catch (e) {}
      }
    }
    init();
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      if (videoRef.current) videoRef.current.srcObject = stream;

      const track = stream.getVideoTracks()[0];
      if (track && track.getCapabilities) {
        const capabilities = track.getCapabilities();
        if (capabilities.torch) setTorchAvailable(true);
      }
    } catch (err) {
      console.error("Camera Hardware Error:", err);
      setStatus("Camera Access Denied or Unavailable");
    }
  };

  const toggleTorch = async () => {
    if (!videoRef.current || !videoRef.current.srcObject) return;
    const track = videoRef.current.srcObject.getVideoTracks()[0];
    if (!track) return;

    try {
      const nextState = !torchOn;
      await track.applyConstraints({ advanced: [{ torch: nextState }] });
      setTorchOn(nextState);
    } catch (err) {
      alert("Flashlight control not supported on this browser context.");
    }
  };

  const analyzeFrame = async () => {
    if (!session) {
      alert("ONNX AI Model is not ready yet!");
      return;
    }
    if (!videoRef.current) {
      alert("Camera feed is not active.");
      return;
    }

    setAnalyzing(true);
    setErrorMessage(null);

    try {
      const t0 = performance.now();

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = 224;
      canvas.height = 224;
      ctx.drawImage(video, 0, 0, 224, 224);

      const imgData = ctx.getImageData(0, 0, 224, 224).data;

      // Tensor layout: NHWC [1, 224, 224, 3]
      const float32Data = new Float32Array(1 * 224 * 224 * 3);

      for (let i = 0; i < 224 * 224; i++) {
        float32Data[i * 3]     = imgData[i * 4] / 255.0;     // R
        float32Data[i * 3 + 1] = imgData[i * 4 + 1] / 255.0; // G
        float32Data[i * 3 + 2] = imgData[i * 4 + 2] / 255.0; // B
      }

      const inputTensor = new ort.Tensor('float32', float32Data, [1, 224, 224, 3]);
      const feeds = {};
      feeds[session.inputNames[0]] = inputTensor;

      const inferenceStart = performance.now();
      const output = await session.run(feeds);
      const inferenceEnd = performance.now();

      const logits = output[session.outputNames[0]].data;

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

      const t1 = performance.now();
      const totalLatency = (t1 - t0).toFixed(1);
      const nnLatency = (inferenceEnd - inferenceStart).toFixed(1);

      const meta = CLASS_METADATA[maxIdx] || {
        name: `Class ${maxIdx}`,
        category: "Unknown",
        riskLevel: "Unclassified",
        color: "#6b7280",
        action: "Consult medical specialist for clinical evaluation.",
        description: "Diagnostic score generated by ONNX runtime."
      };

      const confidence = (maxProb * 100).toFixed(1);

      const scanRecord = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        date: new Date().toLocaleDateString(),
        label: meta.name,
        category: meta.category,
        riskLevel: meta.riskLevel,
        color: meta.color,
        action: meta.action,
        description: meta.description,
        confidence,
        probs,
        nnLatency,
        totalLatency
      };

      setCurrentResult(scanRecord);
      setTelemetry({ nnLatency, totalLatency });

      const updatedHistory = [scanRecord, ...history].slice(0, 15);
      setHistory(updatedHistory);
      localStorage.setItem('healthscan_clinical_history', JSON.stringify(updatedHistory));
    } catch (err) {
      console.error("Inference Processing Error:", err);
      setErrorMessage(`Inference failed: ${err.message}`);
    } finally {
      setAnalyzing(false);
    }
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('healthscan_clinical_history');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>EdgeAI HealthScan</h1>
          <p style={styles.subtitle}>Client-Side Clinical Decision Support System</p>
        </div>
        <span style={styles.badge}>{loading ? "Initializing..." : "WASM Engine Ready"}</span>
      </header>

      <nav style={styles.navTabs}>
        <button 
          onClick={() => setActiveTab('scanner')} 
          style={{ ...styles.tabBtn, borderBottom: activeTab === 'scanner' ? '3px solid #2563eb' : 'none', color: activeTab === 'scanner' ? '#2563eb' : '#6b7280' }}
        >
          📷 AI Scanner
        </button>
        <button 
          onClick={() => setActiveTab('history')} 
          style={{ ...styles.tabBtn, borderBottom: activeTab === 'history' ? '3px solid #2563eb' : 'none', color: activeTab === 'history' ? '#2563eb' : '#6b7280' }}
        >
          📋 Scan Logs ({history.length})
        </button>
        <button 
          onClick={() => setActiveTab('guide')} 
          style={{ ...styles.tabBtn, borderBottom: activeTab === 'guide' ? '3px solid #2563eb' : 'none', color: activeTab === 'guide' ? '#2563eb' : '#6b7280' }}
        >
          🩺 ABCDE Guide
        </button>
      </nav>

      <div style={styles.disclaimer}>
        <strong>🛡️ Institutional Research Protocol:</strong> On-device diagnostic screening evaluation tool. Operates zero-cloud processing for total patient data privacy. Not a substitute for formal histopathological biopsy.
      </div>

      {errorMessage && (
        <div style={styles.errorBox}>
          <strong>⚠️ Execution Error:</strong> {errorMessage}
        </div>
      )}

      {/* SCANNER TAB */}
      <main style={{ ...styles.grid, display: activeTab === 'scanner' ? 'flex' : 'none' }}>
        <section style={styles.card}>
          <div style={styles.videoWrapper}>
            <video ref={videoRef} autoPlay playsInline muted style={styles.video} />
            <div style={styles.reticle}>
              <div style={styles.reticleCrosshair}></div>
            </div>

            {torchAvailable && (
              <button 
                onClick={toggleTorch} 
                style={{ ...styles.torchButton, backgroundColor: torchOn ? '#eab308' : 'rgba(0,0,0,0.65)' }}
              >
                {torchOn ? '🔦 Torch Active' : '💡 Enable Torch'}
              </button>
            )}
          </div>

          <div style={styles.statusRow}>
            <span style={{ ...styles.statusDot, backgroundColor: session ? '#22c55e' : '#f59e0b' }} />
            <span style={styles.statusText}>{status}</span>
          </div>

          <button 
            onClick={analyzeFrame} 
            disabled={loading || analyzing} 
            style={{ ...styles.scanButton, opacity: (loading || analyzing) ? 0.6 : 1 }}
          >
            {analyzing ? "⌛ Processing Neural Network..." : "⚡ Execute Edge Inference"}
          </button>
        </section>

        {telemetry && (
          <div style={styles.telemetryBar}>
            <div>⚡ <strong>Inference Latency:</strong> {telemetry.nnLatency} ms</div>
            <div>⏱️ <strong>Total Pipeline:</strong> {telemetry.totalLatency} ms</div>
            <div>🔒 <strong>Cloud Data Transferred:</strong> 0 KB</div>
          </div>
        )}

        {currentResult && (
          <section style={styles.card}>
            <div style={styles.resultHeader}>
              <div>
                <span style={styles.categoryTag}>{currentResult.category}</span>
                <h2 style={styles.resultName}>{currentResult.label}</h2>
              </div>
              <span style={{ ...styles.riskBadge, backgroundColor: currentResult.color }}>
                {currentResult.riskLevel}
              </span>
            </div>

            <p style={styles.descriptionText}>{currentResult.description}</p>

            <div style={styles.meterContainer}>
              <div style={styles.meterHeader}>
                <span>Diagnostic Probability</span>
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

            <div style={{ ...styles.actionBox, borderColor: currentResult.color }}>
              <strong style={{ color: currentResult.color }}>🩺 Recommended Clinical Action:</strong>
              <p style={styles.actionText}>{currentResult.action}</p>
            </div>

            <div style={styles.metaFooter}>
              <span>HAM10000 Benchmark Class</span>
              <span>Timestamp: {currentResult.timestamp}</span>
            </div>
          </section>
        )}
      </main>

      {/* HISTORY LOGS TAB */}
      {activeTab === 'history' && (
        <section style={styles.card}>
          <div style={styles.historyHeader}>
            <h2 style={styles.cardTitle}>Local Telemetry & Audit Logs</h2>
            {history.length > 0 && (
              <button onClick={clearHistory} style={styles.clearBtn}>Purge Logs</button>
            )}
          </div>

          {history.length === 0 ? (
            <p style={styles.emptyText}>No local scan sessions recorded in browser storage.</p>
          ) : (
            <ul style={styles.historyList}>
              {history.map((item) => (
                <li key={item.id} style={styles.historyItem}>
                  <div>
                    <strong style={{ color: item.color }}>{item.label}</strong>
                    <div style={styles.historySub}>
                      {item.date} • {item.timestamp} • {item.nnLatency ? `${item.nnLatency}ms latency` : 'WASM'}
                    </div>
                  </div>
                  <div style={styles.historyRight}>
                    <span style={{ ...styles.riskTagSmall, backgroundColor: item.color }}>{item.riskLevel}</span>
                    <strong>{item.confidence}%</strong>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* ABCDE CLINICAL GUIDE TAB */}
      {activeTab === 'guide' && (
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Dermatological Screening Framework</h2>
          <p style={styles.descriptionText}>Standard clinical ABCDE criteria used alongside machine learning vision models for cutaneous lesion assessment:</p>
          
          <div style={styles.guideGrid}>
            <div style={styles.guideItem}>
              <span style={styles.guideLetter}>A</span>
              <div><strong>Asymmetry:</strong> One half of the lesion does not match the visual appearance of the other half.</div>
            </div>
            <div style={styles.guideItem}>
              <span style={styles.guideLetter}>B</span>
              <div><strong>Border:</strong> Edges are irregular, ragged, notched, or blurred.</div>
            </div>
            <div style={styles.guideItem}>
              <span style={styles.guideLetter}>C</span>
              <div><strong>Color:</strong> Pigmentation is non-uniform with shades of brown, black, pink, or red.</div>
            </div>
            <div style={styles.guideItem}>
              <span style={styles.guideLetter}>D</span>
              <div><strong>Diameter:</strong> Lesion size greater than 6mm (approx. pencil eraser size).</div>
            </div>
            <div style={styles.guideItem}>
              <span style={styles.guideLetter}>E</span>
              <div><strong>Evolving:</strong> Lesion changes in size, shape, color, or elevation over time.</div>
            </div>
          </div>
        </section>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

const styles = {
  container: { maxWidth: '520px', margin: '0 auto', padding: '16px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#0f172a', backgroundColor: '#f8fafc', minHeight: '100vh' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  title: { fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#0f172a', letterSpacing: '-0.02em' },
  subtitle: { fontSize: '0.75rem', color: '#64748b', margin: '2px 0 0 0' },
  badge: { fontSize: '0.7rem', fontWeight: '700', padding: '4px 10px', borderRadius: '12px', backgroundColor: '#e0e7ff', color: '#3730a3' },
  navTabs: { display: 'flex', borderBottom: '1px solid #e2e8f0', marginBottom: '14px', gap: '8px' },
  tabBtn: { background: 'none', border: 'none', padding: '8px 12px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' },
  disclaimer: { backgroundColor: '#fef3c7', borderLeft: '4px solid #f59e0b', padding: '10px 12px', borderRadius: '6px', fontSize: '0.75rem', color: '#78350f', marginBottom: '14px', lineHeight: '1.4' },
  errorBox: { backgroundColor: '#fee2e2', borderLeft: '4px solid #ef4444', padding: '10px 12px', borderRadius: '6px', fontSize: '0.78rem', color: '#991b1b', marginBottom: '14px', lineHeight: '1.4' },
  grid: { flexDirection: 'column', gap: '14px' },
  card: { backgroundColor: '#ffffff', borderRadius: '12px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' },
  videoWrapper: { position: 'relative', width: '100%', height: '270px', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#0f172a' },
  video: { width: '100%', height: '100%', objectFit: 'cover' },
  reticle: { position: 'absolute', top: '50%', left: '50%', width: '150px', height: '150px', transform: 'translate(-50%, -50%)', border: '2px dashed rgba(255, 255, 255, 0.85)', borderRadius: '14px', pointerEvents: 'none' },
  reticleCrosshair: { position: 'absolute', top: '50%', left: '50%', width: '10px', height: '10px', transform: 'translate(-50%, -50%)', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.8)' },
  torchButton: { position: 'absolute', top: '10px', right: '10px', border: 'none', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.4)' },
  statusRow: { display: 'flex', alignItems: 'center', gap: '6px', margin: '10px 0', justifyContent: 'center' },
  statusDot: { width: '6px', height: '6px', borderRadius: '50%' },
  statusText: { fontSize: '0.8rem', color: '#64748b', fontWeight: '500' },
  scanButton: { width: '100%', padding: '13px', borderRadius: '8px', border: 'none', backgroundColor: '#2563eb', color: '#fff', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer', boxShadow: '0 2px 4px rgba(37,99,235,0.2)' },
  telemetryBar: { display: 'flex', justifyContent: 'space-between', backgroundColor: '#0f172a', color: '#f8fafc', padding: '10px 14px', borderRadius: '8px', fontSize: '0.72rem', fontFamily: 'monospace' },
  resultHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' },
  categoryTag: { fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' },
  resultName: { fontSize: '1.15rem', fontWeight: '800', margin: '2px 0 0 0', color: '#0f172a' },
  riskBadge: { color: '#fff', fontSize: '0.7rem', fontWeight: '800', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' },
  descriptionText: { fontSize: '0.82rem', color: '#475569', lineHeight: '1.4', margin: '0 0 12px 0' },
  meterContainer: { marginBottom: '14px' },
  meterHeader: { display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px', color: '#334155' },
  progressBarBackground: { width: '100%', height: '10px', backgroundColor: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' },
  progressBarFill: { height: '100%', transition: 'width 0.4s ease' },
  actionBox: { backgroundColor: '#f8fafc', borderLeft: '4px solid', padding: '10px 12px', borderRadius: '6px', marginBottom: '12px' },
  actionText: { fontSize: '0.8rem', color: '#1e293b', margin: '4px 0 0 0', lineHeight: '1.4' },
  metaFooter: { display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: '8px' },
  cardTitle: { fontSize: '1rem', fontWeight: '700', margin: '0 0 12px 0', color: '#0f172a' },
  historyHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' },
  clearBtn: { backgroundColor: 'transparent', border: 'none', color: '#ef4444', fontSize: '0.78rem', cursor: 'pointer', fontWeight: '700' },
  emptyText: { fontSize: '0.82rem', color: '#94a3b8', margin: 0 },
  historyList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' },
  historyItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9' },
  historySub: { fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' },
  historyRight: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', fontSize: '0.85rem' },
  riskTagSmall: { color: '#fff', fontSize: '0.65rem', fontWeight: '700', padding: '2px 6px', borderRadius: '4px' },
  guideGrid: { display: 'flex', flexDirection: 'column', gap: '10px' },
  guideItem: { display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.82rem', color: '#334155', lineHeight: '1.4' },
  guideLetter: { backgroundColor: '#2563eb', color: '#fff', fontWeight: '800', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', flexShrink: 0 }
};