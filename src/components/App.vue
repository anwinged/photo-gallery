<template>
  <div id="app" class="application container">
    <welcome v-if="!loggedIn" />
    <template v-else>
      <template v-if="loggedIn">
        <navbar />
        <photo-view v-if="selectedPhoto" />
        <gallery v-else />
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
    selectedPhoto() {
      return this.$store.state.currentPhoto;
    }
  },
  methods: {
    onLogin: function () {
      this.$store.dispatch('login');
    },
  },
  created: function () {
    this.$store.dispatch('initApplication');
  },
}
</script>

<style scoped>
  .application {
    margin-top: 60px;
    margin-bottom: 40px;
  }
</style>
