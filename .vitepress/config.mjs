import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Black Bad Code",
  description: "基于 Teek 主题",
  lang: 'zh-CN',
  // 关键新增：强制 Vite 忽略字体缺失错误
  vite: {
    optimizeDeps: {
      exclude: ['vitepress']
    },
    ssr: {
      noExternal: ['vitepress-theme-teek']
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chetrosie' }
    ]
  }
})
