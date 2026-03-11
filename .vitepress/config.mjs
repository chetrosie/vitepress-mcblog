import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Black Bad Code",
  description: "Attention Is All You Need",
  lang: 'zh-CN',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/posts/openclaw-report' }
    ],
    sidebar: [
      {
        text: '深度研究',
        items: [
          { text: 'OpenClaw 研究报告', link: '/posts/openclaw-report' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chetrosie' }
    ]
  }
}) // <--- 报错就是因为这里可能少了闭合括号
