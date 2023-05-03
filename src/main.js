import Vue from 'vue'
import SvgIcon from '@/components/common/svg-icon';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'

Vue.component('svg-icon', SvgIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
