import DefaultTheme from 'vitepress/theme'
import Checkbox from './Checkbox.vue'
import './custom.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Checkbox', Checkbox)
  }
}
