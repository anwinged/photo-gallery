<template>
  <div id="app" class="application container">
    <welcome v-if="!loggedIn" @login="onLogin"/>
    <template v-else>
      <template v-if="loggedIn">
        <navbar @logout="onLogout"/>
        <gallery/>
      </template>
      <template v-else>
        <a @click.prevent="onLogin" href="#">Login</a>
      </template>
    </template>
  </div>
</template>

<script>
import VkGallery from '../services/VkGallery.js'

export default {
  name: 'app',
  computed: {
    loggedIn() {
      return this.$store.state.user !== null;
    },
  },
  methods: {
    onLogin: function () {
      this.$store.dispatch('login');
    },
    onLogout() {
      this.$store.dispatch('logout');
    }
  },
  created: function () {
    this.$store.dispatch('getStatus');
  },  
}
</script>

<style scoped>
  .application {
    margin-top: 60px;
    margin-bottom: 40px;
  }
</style>
