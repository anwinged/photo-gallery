<template>
	<section class="gallery">
		<template v-if="photos.length">
			<photo v-for="p in photos" :key="p.src" :item="p" class="col-xs-6 col-md-3"></photo>
	  </template>
	  <template v-else>
	  	There is no photos
	  </template>
  </section>	
</template>

<script>
export default {
	name: 'gallery',
	props: ['photos'],
}
</script>

<style scoped>
	.gallery {
		margin-top: 30px;
	}
</style>