<template>
  <div class="photo">
    <a @click.prevent="onClick" href="#" class="photo-view thumbnail">
      <img :src="src" :title="title" :alt="alt">
      <span class="info" v-if="photo.likes">
        <i class="glyphicon glyphicon-heart"></i> {{ photo.likes }}
      </span>
    </a>
  </div>
</template>

<script>
const DEFAULT_CAPTION = 'Unknown';

export default {
  name: 'photo',
  props: ['photo'],
  computed: {
    src() {
      return this.photo.src;
    },
    title() {
      return this.photo.comment || DEFAULT_CAPTION;
    },
    alt() {
      return this.title;
    }
  },
  methods: {
    onClick() {
      this.$emit('select', this.photo);      
    }
  }
};
</script>

<style scoped>
  .photo {
    display: block;
  }

  .photo-view {
    height: 210px;
    position: relative;
  }

  img {
    max-height: 200px;
  }

  .info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4px;
    height: 25px;
    text-align: right;
    color: #333;
  }
</style>
