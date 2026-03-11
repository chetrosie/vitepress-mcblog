import TeekTheme from 'vitepress-theme-teek'
// 修正后的 CSS 引入路径
import 'vitepress-theme-teek/bundle.css'

export default {
  ...TeekTheme,
  enhanceApp({ app, router, siteData }) {
    // 保持为空即可
  }
}
