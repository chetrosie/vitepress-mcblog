import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "Black Bad Code",
  description: "Attention Is All You Need",
  lang: 'zh-CN',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/posts/openclaw-report' }
    ],
    // 自动读取 posts 文件夹下的所有 md 文件
    sidebar: generateSidebar({
      documentRootPath: '/',
      scanStartPath: 'posts',
      resolvePath: '/posts/',
      useTitleFromFileHeading: true,
      collapsed: false
    }),
    socialLinks: [
      { icon: 'BlackClaw', link: 'https://blackclaw.monstercode.cn' }
    ]
  }
})
