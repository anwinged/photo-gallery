<template>
  <div id="app" class="application container">
    <welcome v-if="!loggedIn" @login="onLogin"/>
    <template v-else>
      <template v-if="loggedIn">
        <navbar @logout="onLogout"/>
        <gallery :photos="photos"></gallery>
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
  data () {
    return {
      user: null,
      photos: [],
    }
  },
  computed: {
    loggedIn() {
      return this.user !== null;
    }
  },
  watch: {
    user() {
      if (this.user !== null) {
        VkGallery.getPhotos().then((photos) => {
          console.log(photos);
          this.photos = photos;
        });
      }
    }
  },
  methods: {
    onLogin: function () {
      VkGallery.login().then((u) => {
        console.log(u);
        this.user = u;
      });
    },
    onLogout() {
      VkGallery.logout().then(() => {
        this.user = null;
      });
    }
  },
  created: function () {
    VkGallery.getStatus().then((u) => {
      this.user = u;
    });
  },  
}
</script>

<style scoped>
  .application {
    margin-top: 60px;
    margin-bottom: 40px;
  }
</style>
