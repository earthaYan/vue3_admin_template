import HelloWorld from '@/components/global/HelloWorld/index.vue'
import { App, Component } from 'vue'
// 对外暴露插件对象
const globalComponents: Record<string, Component> = { HelloWorld }
export default {
  // 必须命名为install方法
  install(app: App) {
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key])
    })
  },
}
