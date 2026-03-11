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

    // 彻底删掉之前那一长串 teek.home.banner 配置
    // 只保留最基础的配置
    teek: {
      // 如果你想完全回归官方样式，尝试把整个 teek 节点留空，或者只放这些：
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
