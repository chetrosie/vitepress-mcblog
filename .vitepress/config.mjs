import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Black Bad Code",
  description: "Attention Is All You Need",
  lang: 'zh-CN',
  
  themeConfig: {
    // 官方默认导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/posts/posts.md' }
    ],
    // 官方默认侧边栏
    sidebar: [
      {
        text: '文稿',
        items: [
          { text: 'OpenClaw深度研究报告', link: '/posts/OpenClaw In-Depth Research Report' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://monstercode.cn' }
    ]
  }
})
