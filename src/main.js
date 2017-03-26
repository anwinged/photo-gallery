import Vue from 'vue'
import App from './components/App.vue'
import Welcome from './components/Welcome.vue'
import Gallery from './components/Gallery.vue'

Vue.component('welcome', Welcome);
Vue.component('gallery', Gallery);

new Vue({
  el: '#app',
  render: h => h(App)
})
