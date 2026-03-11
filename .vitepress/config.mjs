import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Black Bad Code",
  description: "Attention Is All You Need",
  lang: 'zh-CN',
  
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文稿', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],

    // Teek 主题核心配置
    teek: {
      home: {
        banner: {
          show: true,
          title: "Black Bad Code",
          subTitle: "Attention Is All You Need.「ALL FOR ONE」",
          // 你的 R2 图片链接
          bgImage: 'https://pub-d866b99d5d61492a94516a7d4395c26d.r2.dev/steve-jobs-macintosh-apple-success-story-financial-value-market.jpg',
          coverStyle: 'full', // 全屏 Banner 样式
          bannerMask: 0.4    // 背景遮罩深浅（0.1-0.9），确保文字清晰
        },
        footer: {
          show: true,
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026-present Chuen'
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chetrosie' }
    ]
  },

  // 这里的 vite 配置是 Cloudflare 部署成功的关键，不要删除
  vite: {
    optimizeDeps: {
      exclude: ['vitepress']
    },
    ssr: {
      noExternal: ['vitepress-theme-teek']
    }
  }
})
