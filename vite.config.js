import { defineConfig } from 'vite';
import react from '@vitejs.plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['model/skin_model.onnx'],
      manifest: {
        name: 'EdgeAI HealthScan',
        short_name: 'HealthScan',
        description: 'Offline Skin Assessment PWA',
        theme_color: '#0070f3',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});