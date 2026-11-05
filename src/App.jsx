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
    description: "Sun-induced scaly lesion with potential for malignant transformation into Squamous Cell Carcinoma.",
    treatment: "Standard clinical care includes cryotherapy (freezing), topical Fluorouracil, or photodynamic therapy.",
    link: "https://www.mayoclinic.org/diseases-conditions/actinic-keratosis/symptoms-causes/syc-20354969"
  },
  1: { 
    name: "Basal Cell Carcinoma (bcc)", 
    category: "Malignant Cancer", 
    riskLevel: "High Risk", 
    color: "#dc2626",
    action: "Prompt biopsy recommended. Consult a dermatologic surgeon for evaluation.",
    description: "Most common skin malignancy originating in basal cells. Slow-growing but locally destructive if untreated.",
    treatment: "Standard care includes surgical excision, Mohs micrographic surgery, or topical immunotherapies.",
    link: "https://www.mayoclinic.org/diseases-conditions/basal-cell-carcinoma/symptoms-causes/syc-20354144"
  },
  2: { 
    name: "Benign Keratosis (bkl)", 
    category: "Non-Cancerous", 
    riskLevel: "Low Risk", 
    color: "#16a34a",
    action: "No immediate medical intervention required. Routine annual monitoring.",
    description: "Harmless epidermal lesion such as seborrheic keratosis or solar lentigo.",
    treatment: "Usually left untreated unless cosmetically undesirable or irritated. Removal via cryotherapy or curettage.",
    link: "https://www.mayoclinic.org/diseases-conditions/seborrheic-keratosis/symptoms-causes/syc-20353878"
  },
  3: { 
    name: "Dermatofibroma (df)", 
    category: "Non-Cancerous", 
    riskLevel: "Low Risk", 
    color: "#16a34a",
    action: "Benign dermal papule. No treatment necessary unless symptomatic.",
    description: "Common benign fibrous nodule typically found on lower limbs following minor micro-trauma.",
    treatment: "Benign nodule. Excisional removal under local anesthesia if painful or itchy.",
    link: "https://dermnetnz.org/topics/dermatofibroma"
  },
  4: { 
    name: "Melanoma (mel)", 
    category: "Malignant Cancer", 
    riskLevel: "CRITICAL RISK", 
    color: "#991b1b",
    action: "URGENT: Immediate professional dermoscopy and excisional biopsy required.",
    description: "Aggressive cutaneous malignancy arising from pigment-producing melanocytes. Early excision critical.",
    treatment: "Urgent surgical excision, lymph node evaluation, and targeted immunotherapy depending on clinical stage.",
    link: "https://www.mayoclinic.org/diseases-conditions/melanoma/symptoms-causes/syc-20374884"
  },
  5: { 
    name: "Melanocytic Nevus (nv)", 
    category: "Benign Mole", 
    riskLevel: "Normal", 
    color: "#2563eb",
    action: "Normal pigmented nevus. Perform monthly self-examination using ABCDE criteria.",
    description: "Common benign proliferation of cutaneous melanocytes.",
    treatment: "Routine observation using monthly ABCDE self-checks. No intervention needed unless evolving.",
    link: "https://www.mayoclinic.org/diseases-conditions/moles/symptoms-causes/syc-20375200"
  },
  6: { 
    name: "Vascular Lesion (vasc)", 
    category: "Benign Growth", 
    riskLevel: "Low Risk", 
    color: "#7c3aed",
    action: "Benign vascular malformation. Clinical evaluation if bleeding or rapidly changing.",
    description: "Cutaneous vascular anomaly such as cherry angioma or pyogenic granuloma.",
    treatment: "Electrocautery, laser therapy, or simple excision if bleeding occurs.",
    link: "https://dermnetnz.org/topics/vascular-lesions"
  }
};

export default function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [status, setStatus] = useState("Initializing ONNX WebAssembly...");
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('scanner');
  const [inputMode, setInputMode] = useState('camera'); // 'camera' or 'file'
  const [previewImage, setPreviewImage] = useState(null);

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
        setErrorMessage(`Model failed to load: ${err.message}. Verify public/model/skin_model.onnx`);
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
      setStatus("Camera Unavailable (Upload Mode Active)");
      setInputMode('file');
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
      alert("Flashlight control not supported on this device/browser.");
    }
  };

  // Core ONNX Inference Pipeline (NHWC Float32 [1, 224, 224, 3])
  const runInferenceOnCanvas = async (sourceCanvas) => {
    if (!session) throw new Error("ONNX AI Model session is not ready.");

    const t0 = performance.now();
    const ctx = sourceCanvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, 224, 224).data;

    const float32Data = new Float32Array(1 * 224 * 224 * 3);
    for (let i = 0; i < 224 * 224; i++) {
      float32Data[i * 3]     = imgData[i * 4] / 255.0;     // Red
      float32Data[i * 3 + 1] = imgData[i * 4 + 1] / 255.0; // Green
      float32Data[i * 3 + 2] = imgData[i * 4 + 2] / 255.0; // Blue
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
      description: "Diagnostic score generated by ONNX runtime.",
      treatment: "Consult a healthcare provider.",
      link: "https://www.mayoclinic.org"
    };

    const confidence = (maxProb * 100).toFixed(1);
    const imageSnapshot = sourceCanvas.toDataURL('image/png');

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
      treatment: meta.treatment,
      link: meta.link,
      confidence,
      imageSnapshot,
      nnLatency,
      totalLatency
    };

    setCurrentResult(scanRecord);
    setTelemetry({ nnLatency, totalLatency });

    const updatedHistory = [scanRecord, ...history].slice(0, 15);
    setHistory(updatedHistory);
    localStorage.setItem('healthscan_clinical_history', JSON.stringify(updatedHistory));
  };

  const analyzeCameraFrame = async () => {
    if (!videoRef.current) return;
    setAnalyzing(true);
    setErrorMessage(null);

    try {
      const canvas = canvasRef.current;
      canvas.width = 224;
      canvas.height = 224;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, 224, 224);

      await runInferenceOnCanvas(canvas);
    } catch (err) {
      console.error(err);
      setErrorMessage(`Camera inference failed: ${err.message}`);
    } finally {
      setAnalyzing(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setAnalyzing(true);
    setErrorMessage(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = async () => {
        setPreviewImage(event.target.result);
        const canvas = canvasRef.current;
        canvas.width = 224;
        canvas.height = 224;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, 224, 224);

        try {
          await runInferenceOnCanvas(canvas);
        } catch (err) {
          setErrorMessage(`File inference failed: ${err.message}`);
        } finally {
          setAnalyzing(false);
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  // Printable PDF Clinical Summary Generator
  const generatePDFReport = () => {
    if (!currentResult) return;

    const reportWindow = window.open('', '_blank');
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Clinical Decision Support Summary - ${currentResult.label}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; color: #0f172a; max-width: 800px; margin: 0 auto; }
          .header { border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
          .title { font-size: 20px; font-weight: bold; color: #1e3a8a; margin: 0; }
          .subtitle { font-size: 12px; color: #64748b; margin-top: 4px; }
          .section { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 16px; }
          .grid { display: flex; gap: 20px; align-items: center; }
          .snapshot { width: 140px; height: 140px; border-radius: 8px; object-fit: cover; border: 1px solid #cbd5e1; }
          .badge { display: inline-block; padding: 4px 10px; color: white; background: ${currentResult.color}; font-weight: bold; border-radius: 4px; font-size: 12px; }
          .field-label { font-weight: bold; color: #334155; font-size: 13px; }
          .field-value { font-size: 13px; color: #475569; margin-top: 2px; }
          .footer { border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 10px; color: #94a3b8; margin-top: 30px; text-align: center; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">EdgeAI HealthScan Clinical Consultation Report</div>
            <div class="subtitle">Client-Side Diagnostic Telemetry & Screening Record</div>
          </div>
          <div><span class="badge">${currentResult.riskLevel}</span></div>
        </div>

        <div class="section">
          <div class="grid">
            ${currentResult.imageSnapshot ? `<img src="${currentResult.imageSnapshot}" class="snapshot" />` : ''}
            <div>
              <div class="field-label">Diagnostic Category: ${currentResult.category}</div>
              <h2 style="margin: 4px 0; color: #0f172a;">${currentResult.label}</h2>
              <div class="field-value"><strong>Softmax Probability:</strong> ${currentResult.confidence}%</div>
              <div class="field-value"><strong>Scan Date:</strong> ${currentResult.date} at ${currentResult.timestamp}</div>
              <div class="field-value"><strong>WASM Inference Latency:</strong> ${currentResult.nnLatency} ms (Total Pipeline: ${currentResult.totalLatency} ms)</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="field-label">Clinical Description:</div>
          <div class="field-value">${currentResult.description}</div>
        </div>

        <div class="section" style="border-left: 4px solid ${currentResult.color};">
          <div class="field-label" style="color: ${currentResult.color};">Recommended Next Steps:</div>
          <div class="field-value">${currentResult.action}</div>
        </div>

        <div class="section">
          <div class="field-label">Standard Medical Management:</div>
          <div class="field-value">${currentResult.treatment}</div>
        </div>

        <div class="footer">
          Institutional Protocol Notice: On-device screening evaluation output generated via MobileNetV3 WASM. Not a substitute for formal histopathological biopsy. | Cloud Transmission: 0 KB
        </div>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `;
    reportWindow.document.write(htmlContent);
    reportWindow.document.close();
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
        <strong>🛡️ Institutional Research Protocol:</strong> On-device diagnostic screening evaluation tool. Operates zero-cloud processing for patient privacy. Not a substitute for histopathological biopsy.
      </div>

      {errorMessage && (
        <div style={styles.errorBox}>
          <strong>⚠️ Execution Error:</strong> {errorMessage}
        </div>
      )}

      {/* SCANNER TAB */}
      <main style={{ ...styles.grid, display: activeTab === 'scanner' ? 'flex' : 'none' }}>
        {/* Source Mode Toggle */}
        <div style={styles.modeToggleRow}>
          <button 
            onClick={() => setInputMode('camera')}
            style={{ ...styles.modeBtn, backgroundColor: inputMode === 'camera' ? '#2563eb' : '#e2e8f0', color: inputMode === 'camera' ? '#fff' : '#475569' }}
          >
            📷 Live Camera Feed
          </button>
          <button 
            onClick={() => setInputMode('file')}
            style={{ ...styles.modeBtn, backgroundColor: inputMode === 'file' ? '#2563eb' : '#e2e8f0', color: inputMode === 'file' ? '#fff' : '#475569' }}
          >
            📁 Upload Image File
          </button>
        </div>

        <section style={styles.card}>
          {inputMode === 'camera' ? (
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
          ) : (
            <div style={styles.uploadDropzone} onClick={() => fileInputRef.current.click()}>
              {previewImage ? (
                <img src={previewImage} alt="Uploaded sample" style={styles.previewImg} />
              ) : (
                <div style={styles.uploadPlaceholder}>
                  <span style={{ fontSize: '2rem' }}>📁</span>
                  <strong>Click or Drag Image File Here</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Supports PNG, JPG, JPEG, WEBP</span>
                </div>
              )}
              <input 
                ref={fileInputRef} 
                type="file" 
                accept="image/*" 
                style={{ display: 'none' }} 
                onChange={handleFileUpload} 
              />
            </div>
          )}

          <div style={styles.statusRow}>
            <span style={{ ...styles.statusDot, backgroundColor: session ? '#22c55e' : '#f59e0b' }} />
            <span style={styles.statusText}>{status}</span>
          </div>

          {inputMode === 'camera' && (
            <button 
              onClick={analyzeCameraFrame} 
              disabled={loading || analyzing} 
              style={{ ...styles.scanButton, opacity: (loading || analyzing) ? 0.6 : 1 }}
            >
              {analyzing ? "⌛ Processing Neural Network..." : "⚡ Execute Edge Inference"}
            </button>
          )}
        </section>

        {telemetry && (
          <div style={styles.telemetryBar}>
            <div>⚡ <strong>Inference Latency:</strong> {telemetry.nnLatency} ms</div>
            <div>⏱️ <strong>Total Pipeline:</strong> {telemetry.totalLatency} ms</div>
            <div>🔒 <strong>Cloud Data Transferred:</strong> 0 KB</div>
          </div>
        )}

        {/* Diagnostic Result Dashboard */}
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

            <div style={styles.infoSection}>
              <strong style={styles.infoTitle}>📖 Condition Profile:</strong>
              <p style={styles.descriptionText}>{currentResult.description}</p>
            </div>

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
              <strong style={{ color: currentResult.color }}>🩺 Recommended Next Steps:</strong>
              <p style={styles.actionText}>{currentResult.action}</p>
            </div>

            <div style={styles.treatmentBox}>
              <strong>💊 Standard Medical Management:</strong>
              <p style={styles.treatmentText}>{currentResult.treatment}</p>
            </div>

            <div style={styles.linkContainer}>
              <a href={currentResult.link} target="_blank" rel="noopener noreferrer" style={styles.referenceLink}>
                🔗 Read Clinical Medical Reference (Mayo Clinic / DermNet) →
              </a>
            </div>

            {/* PDF Report Export Button */}
            <button onClick={generatePDFReport} style={styles.pdfButton}>
              📄 Export Clinical PDF Consultation Report
            </button>

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
  modeToggleRow: { display: 'flex', gap: '8px', marginBottom: '8px' },
  modeBtn: { flex: 1, padding: '8px', borderRadius: '6px', border: 'none', fontWeight: '700', fontSize: '0.8rem', cursor: 'pointer' },
  grid: { flexDirection: 'column', gap: '14px' },
  card: { backgroundColor: '#ffffff', borderRadius: '12px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' },
  videoWrapper: { position: 'relative', width: '100%', height: '270px', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#0f172a' },
  video: { width: '100%', height: '100%', objectFit: 'cover' },
  reticle: { position: 'absolute', top: '50%', left: '50%', width: '150px', height: '150px', transform: 'translate(-50%, -50%)', border: '2px dashed rgba(255, 255, 255, 0.85)', borderRadius: '14px', pointerEvents: 'none' },
  reticleCrosshair: { position: 'absolute', top: '50%', left: '50%', width: '10px', height: '10px', transform: 'translate(-50%, -50%)', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.8)' },
  torchButton: { position: 'absolute', top: '10px', right: '10px', border: 'none', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.4)' },
  uploadDropzone: { border: '2px dashed #cbd5e1', borderRadius: '10px', padding: '20px', textAlign: 'center', cursor: 'pointer', backgroundColor: '#f8fafc', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  uploadPlaceholder: { display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' },
  previewImg: { maxHeight: '180px', maxWidth: '100%', borderRadius: '8px', objectFit: 'contain' },
  statusRow: { display: 'flex', alignItems: 'center', gap: '6px', margin: '10px 0', justifyContent: 'center' },
  statusDot: { width: '6px', height: '6px', borderRadius: '50%' },
  statusText: { fontSize: '0.8rem', color: '#64748b', fontWeight: '500' },
  scanButton: { width: '100%', padding: '13px', borderRadius: '8px', border: 'none', backgroundColor: '#2563eb', color: '#fff', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer', boxShadow: '0 2px 4px rgba(37,99,235,0.2)' },
  telemetryBar: { display: 'flex', justifyContent: 'space-between', backgroundColor: '#0f172a', color: '#f8fafc', padding: '10px 14px', borderRadius: '8px', fontSize: '0.72rem', fontFamily: 'monospace' },
  resultHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' },
  categoryTag: { fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' },
  resultName: { fontSize: '1.15rem', fontWeight: '800', margin: '2px 0 0 0', color: '#0f172a' },
  riskBadge: { color: '#fff', fontSize: '0.7rem', fontWeight: '800', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' },
  infoSection: { marginBottom: '12px' },
  infoTitle: { fontSize: '0.8rem', color: '#1e293b' },
  descriptionText: { fontSize: '0.82rem', color: '#475569', lineHeight: '1.4', margin: '4px 0 0 0' },
  meterContainer: { marginBottom: '14px' },
  meterHeader: { display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px', color: '#334155' },
  progressBarBackground: { width: '100%', height: '10px', backgroundColor: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' },
  progressBarFill: { height: '100%', transition: 'width 0.4s ease' },
  actionBox: { backgroundColor: '#f8fafc', borderLeft: '4px solid', padding: '10px 12px', borderRadius: '6px', marginBottom: '10px' },
  actionText: { fontSize: '0.8rem', color: '#1e293b', margin: '4px 0 0 0', lineHeight: '1.4' },
  treatmentBox: { backgroundColor: '#f1f5f9', padding: '10px 12px', borderRadius: '6px', marginBottom: '12px', fontSize: '0.8rem', color: '#334155' },
  treatmentText: { margin: '4px 0 0 0', lineHeight: '1.4', color: '#475569' },
  linkContainer: { marginBottom: '12px' },
  referenceLink: { color: '#2563eb', fontSize: '0.78rem', fontWeight: '600', textDecoration: 'none' },
  pdfButton: { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #2563eb', backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: '700', fontSize: '0.82rem', cursor: 'pointer', marginBottom: '12px' },
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