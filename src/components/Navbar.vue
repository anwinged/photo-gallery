<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#" @click.prevent="onBrandClick">Gallery</a>
      </div>
      <ul class="nav navbar-nav">
        <li :class="{ active: byLikes }"><a href="#" @click.prevent="orderByLikes">by likes</a></li>
        <li :class="{ active: byTime }"><a href="#" @click.prevent="orderByTime">by time</a></li>
        <li v-for="album in albums" :key="album.id" :class="{ active: album.isActive }">
          <a href="#" :data-album-id="album.id" @click.prevent="onSelectAlbum">{{ album.title }}</a>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a @click.prevent="onExit" href="#">Exit</a></li>
      </ul>
    </div>
  </nav>
</template>

<script type="text/javascript">
import { ORDER_LIKE, ORDER_TIME } from '../store/directions.js';

export default {
  name: 'navbar',
  computed: {
    albums() {
      const current = this.$store.state.currentAlbum;
      const albums = this.$store.state.albums.map(a => {
        return Object.assign({}, a, { isActive: current && current.id === a.id });
      });
      return albums;
    },
    byTime() {
      return this.$store.state.direction == ORDER_TIME;
    },
    byLikes() {
      return this.$store.state.direction == ORDER_LIKE;
    },
  },
  methods: {
    onBrandClick() {
      this.$store.dispatch('dropSelection');
    },
    orderByTime() {
      this.$store.commit('changeDirection', ORDER_TIME);
    },
    orderByLikes() {
      this.$store.commit('changeDirection', ORDER_LIKE);
    },
    onSelectAlbum(event) {
      const albumId = Number(event.target.dataset.albumId);
      this.$store.dispatch('selectAlbum', albumId);
    },
    onExit() {
      this.$store.dispatch('logout');
    },
  }
}
</script>
