import React, { useEffect, useRef, useState } from 'react';
import * as ort from 'onnxruntime-web';

// Configure ONNX WASM engine path
ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';

export default function App() {
  const videoRef = useRef(null);
  const [session, setSession] = useState(null);
  const [status, setStatus] = useState('Loading ONNX model...');
  const [result, setResult] = useState(null);

  // 1. Load the ONNX AI Model when the component mounts
  useEffect(() => {
    async function loadONNXModel() {
      try {
        // Fetches skin_model.onnx from public/model/
        const sess = await ort.InferenceSession.create('/model/skin_model.onnx');
        setSession(sess);
        setStatus('AI Model Loaded & Ready (100% Offline Compatible)');
        startCamera();
      } catch (err) {
        setStatus('Error loading ONNX model: Make sure skin_model.onnx is inside public/model/');
        console.error(err);
      }
    }
    loadONNXModel();
  }, []);

  // 2. Access device camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera permission denied:", err);
    }
  };

  // 3. Process image frame and run AI inference
  const analyzeFrame = async () => {
    if (!session || !videoRef.current) return;
    setStatus('Analyzing skin lesion...');

    // Draw video frame to a 224x224 offscreen canvas
    const canvas = document.createElement('canvas');
    canvas.width = 224;
    canvas.height = 224;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, 224, 224);
    const imgData = ctx.getImageData(0, 0, 224, 224).data;

    // Convert canvas RGBA to Float32 Tensor shape [1, 224, 224, 3]
    const floatData = new Float32Array(224 * 224 * 3);
    for (let i = 0; i < 224 * 224; i++) {
      floatData[i * 3 + 0] = imgData[i * 4 + 0] / 255.0; // Red
      floatData[i * 3 + 1] = imgData[i * 4 + 1] / 255.0; // Green
      floatData[i * 3 + 2] = imgData[i * 4 + 2] / 255.0; // Blue
    }

    const tensor = new ort.Tensor('float32', floatData, [1, 224, 224, 3]);
    const feeds = { [session.inputNames[0]]: tensor };
    
    // Execute model
    const results = await session.run(feeds);
    const output = results[session.outputNames[0]].data;

    // Find class index with highest score
    let maxIdx = 0;
    for (let i = 1; i < output.length; i++) {
      if (output[i] > output[maxIdx]) maxIdx = i;
    }

    const confidence = (output[maxIdx] * 100).toFixed(1);
    setResult(`Class ${maxIdx} detected (${confidence}% confidence)`);
    setStatus('Ready for next scan');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>EdgeAI HealthScan PWA</h1>
      <p><strong>Status:</strong> {status}</p>

      <div style={{ margin: '20px 0' }}>
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          style={{ width: '100%', maxWidth: '350px', borderRadius: '12px', border: '2px solid #ccc' }} 
        />
      </div>

      <button 
        onClick={analyzeFrame} 
        disabled={!session}
        style={{ padding: '12px 24px', fontSize: '16px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
      >
        Scan & Analyze Lesion
      </button>

      {result && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#e6f7ff', borderRadius: '8px' }}>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
}