<template>
  <section class="gallery">
    <template v-if="selected">
      <photo-view :photo="selected" @close="onClose" @next="onNext"/>
    </template>
    <template v-else-if="photos.length">
      <photo v-for="p in photos" :key="p.src" :item="p" @select="onSelect" class="col-xs-6 col-md-3"></photo>
    </template>
    <template v-else>
      There is no photos
    </template>
  </section>  
</template>

<script>
export default {
  name: 'gallery',
  data: function () {
    return {
      selected: null,
    };
  },
  computed: {
    photos() {
      return this.$store.getters.orderedPhotos;
    }
  },
  watch: {
    photos() {
      if (this.selected !== null) {
        const currentIndex = this.photos.findIndex(p => p.src === this.selected.src);
        if (currentIndex === -1) {
          this.selected = null;
        }
      }
    },
  },
  methods: {
    onSelect(item) {
      const photo = this.photos.find(p => p.src === item.src);
      if (photo !== undefined) {
        this.selected = photo;
      }
    },
    onNext() {
      if (this.selected === null) {
        return;
      }
      const currentIndex = this.photos.findIndex(p => p.src === this.selected.src);
      const count = this.photos.length;
      this.selected = this.photos[(currentIndex + 1) % count];
      console.log(this.selected.src);
      console.log(this.selected.src_large);
    },
    onClose() {
      this.selected = null;
    },
  }
}
</script>

<style scoped>
  .gallery {
    margin-top: 30px;
  }
</style>
