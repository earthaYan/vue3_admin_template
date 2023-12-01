import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import '@/styles/index.scss'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入自定义插件对象：注册整个项目的全局组件
import globalComponent from '@/components'
import router from './router'
import pinia from './store'

const app = createApp(App)
app
  .use(globalComponent)
  .use(router)
  .use(pinia)
  .use(ElementPlus, {
    // 国际化配置
    locale: zhCn,
  })
  .mount('#app')
