import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "Black Bad Code",
  description: "Attention Is All You Need",
  lang: 'zh-CN',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // 修正：现在文件在根目录，路径去掉 /posts/
      { text: '文稿', link: '/openclaw-report' }
    ],

    sidebar: generateSidebar({
      documentRootPath: '/',
      scanStartPath: '.', // 修正：从根目录开始扫描
      resolvePath: '/',   // 修正：链接直接指向根
      useTitleFromFileHeading: true,
      excludeFiles: ['index.md'], // 排除掉首页，不要在侧边栏显示首页链接
      collapsed: false,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://blackclaw.monstercode.cn' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})
