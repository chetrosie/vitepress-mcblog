import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Black Bad Code",
  description: "基于 Teek 主题",
  lang: 'zh-CN',
  themeConfig: {
    // 这里放主题支持的配置，比如搜索、社交链接等
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
