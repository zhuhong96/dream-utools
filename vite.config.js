import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path';
import UnoCSS from 'unocss/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; 
import viteCompression from 'vite-plugin-compression';
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    UnoCSS({
      configFile: '../uno.config.js',
    }),
    createSvgIconsPlugin({ iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')], // icon存放的目录 
    symbolId: 'icon-[name]', // symbol的id 
    inject: 'body-last', // 插入的位置 
    customDomId: '__svg__icons__dom__', // svg的id 
    }),

    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  // server: {
  //   hmr: true,
  //   host: '0.0.0.0', //ip地址
  //   proxy: {
  //     "/api": {
  //       target: "http://127.0.0.1/",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     }
  //   },
  // },
  build: {
    outDir: resolve(__dirname, 'dist'), // 指定输出路径
    chunkSizeWarningLimit: 1500,
    sourcemap: false, // 是否生成 source map
    emptyOutDir: true, //Vite 会在构建时清空该目录
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        compact: true, //压缩代码，删除换行符等
        assetFileNames: '[ext]/[name]-[hash].[ext]', //静态文件输出的文件夹名称
        chunkFileNames: 'js/[name]-[hash].js', //chunk包输出的文件夹名称
        entryFileNames: 'js/[name]-[hash].js', //入口文件输出的文件夹名称
      },
    },
  }
})
