import Vue from 'vue'
import App from './App.vue'
import '@/assets/global.less' //全局初始化样式
import './@elementUI' //注册elementUI组件

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
