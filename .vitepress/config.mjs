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
      { text: '文稿', link: '/posts/openclaw-report' }
    ],

    // 自动化侧边栏：自动读取 posts 文件夹下的 md 文件
    sidebar: generateSidebar({
      documentRootPath: '/', 
      scanStartPath: 'posts', 
      resolvePath: '/posts/', // 必须确保生成的 href 是 /posts/xxx
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      includeRootIndexFile: false,
      hyphenToSpace: true,
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
