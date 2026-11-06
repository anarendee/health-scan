import React, { useEffect, useRef, useState } from 'react';
import * as ort from 'onnxruntime-web';

ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';

const CLASS_METADATA = {
  0: { 
    code: "akiec",
    name: "Actinic Keratosis", 
    category: "Pre-Cancerous", 
    riskLevel: "Moderate Risk", 
    color: "#d97706",
    action: "Schedule dermatological consultation. Monitor for changes in texture or rapid growth.",
    description: "Sun-induced scaly lesion with potential for malignant transformation into Squamous Cell Carcinoma.",
    treatment: "Standard care includes cryotherapy (freezing), topical Fluorouracil, or photodynamic therapy.",
    link: "https://www.mayoclinic.org/diseases-conditions/actinic-keratosis/symptoms-causes/syc-20354969"
  },
  1: { 
    code: "bcc",
    name: "Basal Cell Carcinoma", 
    category: "Malignant Cancer", 
    riskLevel: "High Risk", 
    color: "#dc2626",
    action: "Prompt biopsy recommended. Consult a dermatologic surgeon for evaluation.",
    description: "Most common skin malignancy originating in basal cells. Slow-growing but locally destructive if ignored.",
    treatment: "Standard care includes surgical excision, Mohs micrographic surgery, or topical immunotherapies.",
    link: "https://www.mayoclinic.org/diseases-conditions/basal-cell-carcinoma/symptoms-causes/syc-20354144"
  },
  2: { 
    code: "bkl",
    name: "Benign Keratosis", 
    category: "Non-Cancerous", 
    riskLevel: "Low Risk", 
    color: "#16a34a",
    action: "No immediate medical intervention required. Routine annual monitoring.",
    description: "Harmless epidermal lesion such as seborrheic keratosis or solar lentigo.",
    treatment: "Usually left untreated unless cosmetically undesirable or irritated. Removal via cryotherapy or curettage.",
    link: "https://www.mayoclinic.org/diseases-conditions/seborrheic-keratosis/symptoms-causes/syc-20353878"
  },
  3: { 
    code: "df",
    name: "Dermatofibroma", 
    category: "Non-Cancerous", 
    riskLevel: "Low Risk", 
    color: "#16a34a",
    action: "Benign dermal papule. No treatment necessary unless symptomatic.",
    description: "Common benign fibrous nodule typically found on lower limbs following minor micro-trauma.",
    treatment: "Benign nodule. Excisional removal under local anesthesia if painful or itchy.",
    link: "https://dermnetnz.org/topics/dermatofibroma"
  },
  4: { 
    code: "mel",
    name: "Melanoma", 
    category: "Malignant Cancer", 
    riskLevel: "CRITICAL RISK", 
    color: "#991b1b",
    action: "URGENT: Immediate professional dermoscopy and excisional biopsy required.",
    description: "Aggressive cutaneous malignancy arising from pigment-producing melanocytes. Early excision is critical.",
    treatment: "Urgent surgical excision, lymph node evaluation, and targeted immunotherapy depending on clinical stage.",
    link: "https://www.mayoclinic.org/diseases-conditions/melanoma/symptoms-causes/syc-20374884"
  },
  5: { 
    code: "nv",
    name: "Melanocytic Nevus", 
    category: "Benign Mole", 
    riskLevel: "Normal", 
    color: "#2563eb",
    action: "Normal pigmented nevus. Perform monthly self-examination using ABCDE criteria.",
    description: "Common benign proliferation of cutaneous melanocytes.",
    treatment: "Routine observation using monthly ABCDE self-checks. No intervention needed unless evolving.",
    link: "https://www.mayoclinic.org/diseases-conditions/moles/symptoms-causes/syc-20375200"
  },
  6: { 
    code: "vasc",
    name: "Vascular Lesion", 
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
  const [inputMode, setInputMode] = useState('camera'); 
  const [previewImage, setPreviewImage] = useState(null);
  const [zoomScale, setZoomScale] = useState(1.0);

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
        setStatus("v2.0 Engine Active • OOD Guardrail Enabled");
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

  const runInferenceOnCanvas = async (sourceCanvas) => {
    if (!session) throw new Error("ONNX AI Model session is not ready.");

    const t0 = performance.now();
    const ctx = sourceCanvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, 224, 224).data;

    // NHWC Float32 Tensor Layout [1, 224, 224, 3]
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

    // 7-Class Differential Diagnosis Matrix
    const differentialDiagnosis = Object.keys(CLASS_METADATA).map((idx) => {
      const classId = parseInt(idx, 10);
      const meta = CLASS_METADATA[classId];
      const probability = probs[classId];
      return {
        id: classId,
        code: meta.code,
        name: meta.name,
        category: meta.category,
        riskLevel: meta.riskLevel,
        color: meta.color,
        probabilityPercentage: (probability * 100).toFixed(1),
        rawProbability: probability
      };
    }).sort((a, b) => b.rawProbability - a.rawProbability);

    const topMatch = differentialDiagnosis[0];
    const t1 = performance.now();
    const totalLatency = (t1 - t0).toFixed(1);
    const nnLatency = (inferenceEnd - inferenceStart).toFixed(1);

    const meta = CLASS_METADATA[topMatch.id];
    const imageSnapshot = sourceCanvas.toDataURL('image/png');

    // Out-of-Distribution (<45% certainty) Flag
    const isOOD = topMatch.rawProbability < 0.45;

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
      confidence: topMatch.probabilityPercentage,
      differentialDiagnosis,
      isOOD,
      zoomScale: `${zoomScale}x`,
      imageSnapshot,
      nnLatency,
      totalLatency
    };

    setCurrentResult(scanRecord);
    setTelemetry({ nnLatency, totalLatency, isOOD });

    const updatedHistory = [scanRecord, ...history].slice(0, 15);
    setHistory(updatedHistory);
    localStorage.setItem('healthscan_clinical_history', JSON.stringify(updatedHistory));
  };

  const analyzeCameraFrame = async () => {
    if (!videoRef.current) return;
    setAnalyzing(true);
    setErrorMessage(null);

    try {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = 224;
      canvas.height = 224;
      const ctx = canvas.getContext('2d');

      const srcW = video.videoWidth / zoomScale;
      const srcH = video.videoHeight / zoomScale;
      const srcX = (video.videoWidth - srcW) / 2;
      const srcY = (video.videoHeight - srcH) / 2;

      ctx.drawImage(video, srcX, srcY, srcW, srcH, 0, 0, 224, 224);
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

        const srcW = img.width / zoomScale;
        const srcH = img.height / zoomScale;
        const srcX = (img.width - srcW) / 2;
        const srcY = (img.height - srcH) / 2;

        ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, 224, 224);

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

  const generatePDFReport = () => {
    if (!currentResult) return;

    const reportWindow = window.open('', '_blank');
    const diffRows = currentResult.differentialDiagnosis.map((item, i) => `
      <tr>
        <td style="padding: 6px; border-bottom: 1px solid #e2e8f0;">${i + 1}. <strong>${item.name}</strong> (${item.code})</td>
        <td style="padding: 6px; border-bottom: 1px solid #e2e8f0; color: ${item.color}; font-weight: bold;">${item.riskLevel}</td>
        <td style="padding: 6px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: bold;">${item.probabilityPercentage}%</td>
      </tr>
    `).join('');

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>HealthScan v2.0 CDSS Report - ${currentResult.label}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; color: #0f172a; max-width: 800px; margin: 0 auto; }
          .header { border-bottom: 3px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
          .title { font-size: 20px; font-weight: bold; color: #1e3a8a; margin: 0; }
          .subtitle { font-size: 11px; color: #64748b; margin-top: 4px; }
          .section { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 16px; }
          .grid { display: flex; gap: 20px; align-items: center; }
          .snapshot { width: 140px; height: 140px; border-radius: 8px; object-fit: cover; border: 1px solid #cbd5e1; }
          .badge { display: inline-block; padding: 4px 10px; color: white; background: ${currentResult.color}; font-weight: bold; border-radius: 4px; font-size: 12px; }
          .ood-warning { background: #fff7ed; border-left: 4px solid #ea580c; color: #9a3412; padding: 10px; border-radius: 6px; font-size: 12px; margin-bottom: 14px; }
          .field-label { font-weight: bold; color: #334155; font-size: 13px; }
          .field-value { font-size: 13px; color: #475569; margin-top: 2px; }
          table { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 8px; }
          th { text-align: left; padding: 6px; background: #e2e8f0; color: #334155; }
          .footer { border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 10px; color: #94a3b8; margin-top: 30px; text-align: center; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">EdgeAI HealthScan v2.0 Consultation Summary</div>
            <div class="subtitle">Multi-Class Differential Diagnosis & WASM Telemetry Report</div>
          </div>
          <div><span class="badge">${currentResult.riskLevel}</span></div>
        </div>

        ${currentResult.isOOD ? `
          <div class="ood-warning">
            <strong>⚠️ Out-of-Distribution (OOD) Alert:</strong> Top diagnostic probability is under 45% threshold (${currentResult.confidence}%). Target may be an unclassified lesion, rash, vesicle, or non-dermatoscopic input.
          </div>
        ` : ''}

        <div class="section">
          <div class="grid">
            ${currentResult.imageSnapshot ? `<img src="${currentResult.imageSnapshot}" class="snapshot" />` : ''}
            <div>
              <div class="field-label">Primary Differential Classification:</div>
              <h2 style="margin: 4px 0; color: #0f172a;">${currentResult.label} (${currentResult.category})</h2>
              <div class="field-value"><strong>Softmax Probability:</strong> ${currentResult.confidence}%</div>
              <div class="field-value"><strong>Digital Zoom Level:</strong> ${currentResult.zoomScale}</div>
              <div class="field-value"><strong>Scan Timestamp:</strong> ${currentResult.date} at ${currentResult.timestamp}</div>
              <div class="field-value"><strong>WASM Inference Speed:</strong> ${currentResult.nnLatency} ms (Total Pipeline: ${currentResult.totalLatency} ms)</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="field-label">Full 7-Class Differential Diagnosis Spectrum:</div>
          <table>
            <thead>
              <tr>
                <th>Condition Name</th>
                <th>Clinical Risk Level</th>
                <th style="text-align: right;">Probability</th>
              </tr>
            </thead>
            <tbody>
              ${diffRows}
            </tbody>
          </table>
        </div>

        <div class="section" style="border-left: 4px solid ${currentResult.color};">
          <div class="field-label" style="color: ${currentResult.color};">Recommended Clinical Action Pathway:</div>
          <div class="field-value">${currentResult.action}</div>
        </div>

        <div class="section">
          <div class="field-label">Standard Medical Management:</div>
          <div class="field-value">${currentResult.treatment}</div>
        </div>

        <div class="footer">
          Institutional Protocol Notice: On-device screening evaluation output generated via MobileNetV3 WASM (v2.0 OOD System). Not a substitute for histopathological biopsy. | Network Transferred: 0 KB
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
          <h1 style={styles.title}>EdgeAI HealthScan <span style={styles.v2Tag}>v2.0</span></h1>
          <p style={styles.subtitle}>On-Device CDSS with OOD Anomaly Detection</p>
        </div>
        <span style={styles.badge}>{loading ? "Initializing..." : "v2.0 WASM Active"}</span>
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
        <strong>🛡️ Institutional Research Protocol:</strong> On-device diagnostic screening system equipped with Out-of-Distribution (OOD) anomaly safeguards. Operates zero-cloud processing. Not a substitute for formal histopathological biopsy.
      </div>

      {errorMessage && (
        <div style={styles.errorBox}>
          <strong>⚠️ Execution Error:</strong> {errorMessage}
        </div>
      )}

      {/* SCANNER TAB */}
      <main style={{ ...styles.grid, display: activeTab === 'scanner' ? 'flex' : 'none' }}>
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
          {/* Persistent Video Container */}
          <div style={{ display: inputMode === 'camera' ? 'block' : 'none' }}>
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
          </div>

          {/* Persistent File Container */}
          <div style={{ display: inputMode === 'file' ? 'block' : 'none' }}>
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
          </div>

          <div style={styles.zoomControlBox}>
            <label style={styles.zoomLabel}>
              🔍 Digital Target Zoom: <strong>{zoomScale.toFixed(1)}x</strong>
            </label>
            <input 
              type="range" 
              min="1.0" 
              max="3.0" 
              step="0.1" 
              value={zoomScale} 
              onChange={(e) => setZoomScale(parseFloat(e.target.value))}
              style={styles.zoomSlider} 
            />
          </div>

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
              {analyzing ? "⌛ Executing WASM Neural Network..." : "⚡ Execute Edge Inference"}
            </button>
          )}
        </section>

        {telemetry && (
          <div style={styles.telemetryBar}>
            <div>⚡ <strong>Inference:</strong> {telemetry.nnLatency} ms</div>
            <div>⏱️ <strong>Pipeline:</strong> {telemetry.totalLatency} ms</div>
            <div>🛡️ <strong>OOD Shield:</strong> {telemetry.isOOD ? '⚠️ Triggered' : '✅ Clear'}</div>
          </div>
        )}

        {currentResult && (
          <section style={styles.card}>
            {currentResult.isOOD && (
              <div style={styles.oodBanner}>
                <strong>⚠️ Out-of-Distribution / High Uncertainty Warning:</strong>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.78rem' }}>
                  Top probability is below 45% certainty ({currentResult.confidence}%). The target may be a non-dermatoscopic input, rash, vesicle, or blister outside the HAM10000 benchmark dataset.
                </p>
              </div>
            )}

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
                <span>Primary Probability</span>
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

            <div style={styles.differentialBox}>
              <strong style={styles.infoTitle}>📊 Full 7-Class Differential Diagnosis Breakdown:</strong>
              <div style={styles.differentialList}>
                {currentResult.differentialDiagnosis.map((item) => (
                  <div key={item.id} style={styles.diffRow}>
                    <div style={styles.diffLabelGroup}>
                      <span style={{ fontWeight: '700', color: item.color }}>{item.name}</span>
                      <span style={styles.diffCode}>({item.code})</span>
                    </div>
                    <div style={styles.diffBarGroup}>
                      <div style={styles.diffBarBg}>
                        <div style={{ ...styles.diffBarFill, width: `${item.probabilityPercentage}%`, backgroundColor: item.color }} />
                      </div>
                      <span style={styles.diffVal}>{item.probabilityPercentage}%</span>
                    </div>
                  </div>
                ))}
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

            <button onClick={generatePDFReport} style={styles.pdfButton}>
              📄 Export v2.0 Differential Consultation PDF
            </button>

            <div style={styles.metaFooter}>
              <span>HAM10000 Benchmark Class</span>
              <span>Zoom: {currentResult.zoomScale} • {currentResult.timestamp}</span>
            </div>
          </section>
        )}
      </main>

      {/* HISTORY TAB */}
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
                      {item.date} • {item.timestamp} • {item.isOOD ? '⚠️ OOD Flagged' : 'Normal'}
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

      {/* GUIDE TAB */}
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
  container: { maxWidth: '540px', margin: '0 auto', padding: '16px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#0f172a', backgroundColor: '#f8fafc', minHeight: '100vh' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  title: { fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#0f172a', letterSpacing: '-0.02em' },
  v2Tag: { fontSize: '0.75rem', backgroundColor: '#2563eb', color: '#fff', padding: '2px 6px', borderRadius: '4px', verticalAlign: 'middle' },
  subtitle: { fontSize: '0.75rem', color: '#64748b', margin: '2px 0 0 0' },
  badge: { fontSize: '0.7rem', fontWeight: '700', padding: '4px 10px', borderRadius: '12px', backgroundColor: '#e0e7ff', color: '#3730a3' },
  navTabs: { display: 'flex', borderBottom: '1px solid #e2e8f0', marginBottom: '14px', gap: '8px' },
  tabBtn: { background: 'none', border: 'none', padding: '8px 12px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' },
  disclaimer: { backgroundColor: '#fef3c7', borderLeft: '4px solid #f59e0b', padding: '10px 12px', borderRadius: '6px', fontSize: '0.75rem', color: '#78350f', marginBottom: '14px', lineHeight: '1.4' },
  errorBox: { backgroundColor: '#fee2e2', borderLeft: '4px solid #ef4444', padding: '10px 12px', borderRadius: '6px', fontSize: '0.78rem', color: '#991b1b', marginBottom: '14px', lineHeight: '1.4' },
  oodBanner: { backgroundColor: '#fff7ed', borderLeft: '4px solid #ea580c', color: '#9a3412', padding: '10px 12px', borderRadius: '6px', fontSize: '0.78rem', marginBottom: '12px', lineHeight: '1.4' },
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
  zoomControlBox: { marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px' },
  zoomLabel: { fontSize: '0.78rem', color: '#475569' },
  zoomSlider: { width: '100%', cursor: 'pointer' },
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
  differentialBox: { backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '14px' },
  differentialList: { display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' },
  diffRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' },
  diffLabelGroup: { display: 'flex', gap: '4px', alignItems: 'center' },
  diffCode: { color: '#94a3b8', fontSize: '0.7rem' },
  diffBarGroup: { display: 'flex', alignItems: 'center', gap: '8px', width: '50%' },
  diffBarBg: { flex: 1, height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' },
  diffBarFill: { height: '100%', transition: 'width 0.3s ease' },
  diffVal: { width: '40px', textAlign: 'right', fontWeight: '700', color: '#334155' },
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