<template>
  <div id="app" class="application container">
    <template v-if="loggedIn">
      <navbar />
      <photo-view v-if="selectedPhoto" />
      <gallery v-else />
    </template>
    <welcome v-else />
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
