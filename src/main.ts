import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

createApp(App)
  .use(ElementPlus, {
    // 国际化配置
    locale: zhCn,
  })
  .mount('#app')
