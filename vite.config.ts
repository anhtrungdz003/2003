// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Plugin cho Tailwind 4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Đặt sau react() để tránh conflict
  ],
  css: {
    // Đảm bảo Vite resolve CSS từ node_modules (Swiper)
    devSourcemap: true, // Giúp debug CSS errors
  },
  resolve: {
    // Nếu cần alias cho Swiper (thường không bắt buộc, nhưng thử nếu lỗi path)
    alias: {
      "@": "/src", // Nếu bạn dùng alias khác, giữ nguyên
    },
  },
  // Optimize deps cho Swiper (Vite 7 khuyến nghị cho libs lớn)
  optimizeDeps: {
    include: ["swiper"], // Force optimize Swiper
  },
});
