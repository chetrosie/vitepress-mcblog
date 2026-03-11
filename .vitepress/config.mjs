import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "Black Bad Code",
  description: "Attention Is All You Need",
  lang: 'zh-CN',
  
  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '文稿', link: '/posts' }
    ],

    // 自动化侧边栏：自动读取 posts 文件夹下的 md 文件
    sidebar: generateSidebar({
      documentRootPath: '/',     // 保持根目录扫描
      scanStartPath: 'posts',    // 扫描 posts 文件夹
      resolvePath: '/posts/',    // 关键：确保生成的链接带上 /posts/ 前缀
      useTitleFromFileHeading: true,
      collapsed: false,
    }),

    socialLinks: [
      { icon: 'BlackClaw', link: 'https://blackclaw.monstercode.cn/' }
    ],

    // 开启本地搜索功能，方便你以后查找博文
    search: {
      provider: 'local'
    }
  }
})
