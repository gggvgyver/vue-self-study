import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import Status from './components/Status'

Vue.component('AppStatus', Status)  //AppStatus 컴포넌트로 지정해서 전역으로 사용가능

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
