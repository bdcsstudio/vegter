import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: true,
        rollupOptions: {
            output: {
                entryFileNames: "assets/index.js",
                assetFileNames: "assets/[name][extname]",
                manualChunks: {
                    gsap: ['gsap', 'gsap/ScrollTrigger', 'gsap/Flip', 'gsap/Observer']
                }
            }
        }
    },
    optimizeDeps: {
        include: ['gsap', 'gsap/ScrollTrigger', 'gsap/Flip', 'gsap/Observer']
    }
});