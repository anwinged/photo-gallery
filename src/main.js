import Vue from 'vue'
import App from './components/App.vue'
import Welcome from './components/Welcome.vue'
import Navbar from './components/Navbar.vue'
import Gallery from './components/Gallery.vue'

Vue.component('welcome', Welcome);
Vue.component('navbar', Navbar);
Vue.component('gallery', Gallery);

new Vue({
  el: '#app',
  render: h => h(App)
})
