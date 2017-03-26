import VueRouter from 'vue-router'
import VkGallery from './VkGallery.js'
import About from './components/About.vue'

// function requireAuth (to, from, next) {
//   if (!auth.loggedIn()) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// }

// function logout(to, from, next) {
//   auth.logout()
//   next('/')
// }

const AppRouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: About },
    // { path: '/gallery', component: Gallery, beforeEnter: requireAuth },
    // { path: '/login', component: Login }, 
    // { path: '/logout', beforeEnter: logout }
  ]
});

export default AppRouter;