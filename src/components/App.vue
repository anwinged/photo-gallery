<template>
  <div id="app" class="container">
    <welcome v-if="!loggedIn" @login="onLogin"/>
    <template v-else>
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Gallery</a>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li><a @click.prevent="onExit" href="#">Exit</a></li>
          </ul>
        </div>
      </nav>
      <template v-if="loggedIn">        
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
    onExit() {
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

<style lang="scss">
#app {
  margin-top: 60px;
}
</style>
