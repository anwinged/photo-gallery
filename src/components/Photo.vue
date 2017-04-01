<template>
  <a @click.prevent="onClick" href="#" class="photo thumbnail">
    <img :src="src" :title="title" :alt="alt">
    <span class="info" v-if="item.likes">
      <i class="glyphicon glyphicon-heart"></i> {{ item.likes }}
    </span>
  </a>
</template>

<script>
const DEFAULT_CAPTION = 'Unknown';

export default {
  name: 'photo',
  props: ['item'],
  computed: {
    src() {
      return this.item.src;
    },
    title() {
      return this.item.comment || DEFAULT_CAPTION;
    },
    alt() {
      return this.title;
    }
  },
  methods: {
    onClick() {
      this.$emit('select', {
        src: this.item.src,
      });
    }
  }
};
</script>

<style scoped>
  .photo {
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
