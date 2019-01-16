import Vue from 'vue'
import App from './App.vue'
Vue.prototype.$eventBus = new Vue();

export function createApp () {
    const app = new Vue({
        // 注入 router 到根 Vue 实例
        render: h => h(App)
    })
    // 返回 app 和 router
    return { app, eventBus: app.$eventBus}
}
