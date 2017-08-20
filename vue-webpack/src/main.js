import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import city from './city.vue'

Vue.use(VueResource)
Vue.component('app-city', city);

new Vue({
  el: '#app',
  render: h => h(App)
})
