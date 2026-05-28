import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'
import fs from 'fs-extra'

let currentMode = 'online'

const modeArgIndex = process.argv.findIndex(item => item === '--mode')

if (modeArgIndex !== -1 && process.argv[modeArgIndex + 1]) {
  currentMode = process.argv[modeArgIndex + 1]
}

const isOffline = currentMode === 'offline'

console.log('当前运行模式', currentMode)

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'fix-html-for-file-protocol',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml(html) {
        // 1. 移除type="module"和crossorigin
        html = html.replace(/type="module"/g, '')
        html = html.replace(/crossorigin/g, '')

        // ========== 新增：离线模式插入隐藏 iconfont 的样式 ==========
        if (isOffline) {
          const hideIconStyle = `<style>.iconfont { display: none !important; }</style>`
          // 插到 </head> 前面，优先级最高
          html = html.replace('</head>', `${hideIconStyle}\n</head>`)
        }

        // 2. 安全匹配script标签（带空值判断）
        const scriptMatch = html.match(/<script\s+src="[^"]+\.js"><\/script>/i)
        if (scriptMatch && scriptMatch[0]) {
          const scriptTag = scriptMatch[0]
          // 移除原script标签
          html = html.replace(scriptTag, '')
          // 把script标签加到body末尾
          html = html.replace('</body>', `${scriptTag}</body>`)
        }

        return html
      },
    },
    // 打包完成：在线包删除 tiles / image
    {
      name: 'clean-offline-assets',
      apply: 'build',
      closeBundle() {
        if (!isOffline) {
          const distTiles = path.resolve(__dirname, '西亚-在线版/tiles')

          fs.removeSync(distTiles)

          console.log('✅ 在线包：已移除 dist/tiles')
        }
      },
    },
  ],
  base: './',
  resolve: {
    alias: {
      // 新增：映射 textures 目录
      '@textures': fileURLToPath(new URL('./textures', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: isOffline ? '西亚-离线版' : '西亚-在线版',
    assetsDir: 'assets',
    copyPublicDir: true, // 开启public目录复制（如果textures在public下）
    rollupOptions: {
      output: {
        format: 'iife',
        name: 'SundialApp',
        entryFileNames: 'assets/index.js',
        assetFileNames: 'assets/[name].[ext]',
        globals: { vue: 'Vue' },
      },
    },
    modulePreload: { polyfill: false },
    cssCodeSplit: false, // 可选：内联CSS，减少文件依赖
  },
})
