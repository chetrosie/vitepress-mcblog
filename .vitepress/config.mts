import { defineConfig } from 'vitepress'

export default defineConfig({
  // 将站点语言设置为中文
  lang: 'zh-CN',
  title: "Black Bad Code",
  description: "If it creates emotion, it's real.",

  // 这里的 themeConfig 是你原本的配置
  themeConfig: {
    // 搜索、侧边栏、导航栏等的文字也需要在这里手动改为中文
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/markdown-examples' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdatedText: '最后更新时间',
    // ... 其他配置
  }
})
