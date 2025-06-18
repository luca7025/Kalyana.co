// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // if using React

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // ✅ Increase limit to hide warning (optional)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // ✅ All vendor packages into a separate chunk
            return 'vendor';
          }
        },
      },
    },
  },
});
