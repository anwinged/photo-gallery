import Vue from 'vue'
import App from './components/App.vue'
import Welcome from './components/Welcome.vue'
import Navbar from './components/Navbar.vue'
import Gallery from './components/Gallery.vue'
import Photo from './components/Photo.vue'
import PhotoView from './components/PhotoView.vue'
import store from './store/index.js'

Vue.component('welcome', Welcome);
Vue.component('navbar', Navbar);
Vue.component('gallery', Gallery);
Vue.component('photo', Photo);
Vue.component('photo-view', PhotoView);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
