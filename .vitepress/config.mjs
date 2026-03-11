import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Black Bad Code",
  description: "Attention Is All You Need",
  lang: 'zh-CN',

themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/posts/openclaw-report' } // 修正这里
    ],
    sidebar: [
      {
        text: '深度研究',
        items: [
          { text: 'OpenClaw 研究报告', link: '/posts/openclaw-report' } // 修正这里
        ]
      }
    ]
  }
