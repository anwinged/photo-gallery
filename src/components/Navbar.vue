<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#" @click.prevent="onBrandClick">Gallery</a>
      </div>
      <ul class="nav navbar-nav">
        <li :class="{ active: byLikes }"><a href="#" @click.prevent="orderByLikes">by likes</a></li>
        <li :class="{ active: byTime }"><a href="#" @click.prevent="orderByTime">by time</a></li>
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
    onExit() {
      this.$store.dispatch('logout');
    },
  }
}
</script>
