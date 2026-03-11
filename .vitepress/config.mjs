import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Black Bad Code",
  description: "Attention Is All You Need",
  lang: 'zh-CN',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/api-examples' }
    ],

    // 关键：关闭 Teek 自带的 Banner，让它回归官方 Hero 布局
    teek: {
      home: {
        banner: {
          show: false // 彻底关闭上方的大黑块
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://monstercode.cn' }
    ]
  },

  vite: {
    optimizeDeps: { exclude: ['vitepress'] },
    ssr: { noExternal: ['vitepress-theme-teek'] }
  }
})
