kimport DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
// 引入阅读时间组件（如果是通过插件，通常在 config 里配置，这里我们手动加个简单的显示）
export default {
  ...DefaultTheme
}
