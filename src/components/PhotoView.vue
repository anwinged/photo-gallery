<template>
  <div class="row">
    <div class="col-md-8 box">
      <a @click.prevent="onNext" href="#" title="Close photo">
        <img class="fullview" :src="source">
      </a>
    </div>
    <div class="col-md-4">
      <h2>{{ title }}</h2>
      <p>
        <i class="glyphicon glyphicon-heart"></i> {{ photo.likes }}
      </p>
      <a class="btn btn-default" @click.prevent="onClose" href="#">Close</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'photo-view',
  props: ['photo'],
  computed: {
    title() {
      return this.photo.comment || 'Noname';
    },
    source() {
      return this.photo.src_large || this.photo.src;
    },
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
    onNext() {
      this.$emit('next');
    },
  }
}
</script>

<style scoped>
  .box {
    text-align: center;
  }

  .fullview {
    max-width: 100%;
    max-height: 500px;
    height: auto;
  }
</style>
