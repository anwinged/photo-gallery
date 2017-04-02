<template>
  <section class="gallery">
    <template v-if="photos.length">
      <photo v-for="photo in photos" 
        class="col-xs-6 col-md-3"
        :key="photo.src"
        :photo="photo"
        @select="onSelect"
      />
    </template>
    <template v-else>
      There are no photos.
    </template>
  </section>
</template>

<script>
export default {
  name: 'gallery',
  computed: {
    photos() {
      return this.$store.getters.orderedPhotos;
    }
  },
  methods: {
    onSelect(photo) {
      this.$store.dispatch('selectPhoto', photo);
    }
  }
}
</script>

<style scoped>
  .gallery {
    margin-top: 30px;
  }
</style>
