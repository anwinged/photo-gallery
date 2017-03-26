<template>
	<section class="gallery">
		<template v-if="photos.length">
			<template v-for="photo in photos">
			  <div class="col-xs-6 col-md-3">
			    <a href="#" class="photo thumbnail">
			      <img :src="photo.src" :title="photo.comment || 'Фоточка'" :alt="photo.comment">
			    </a>
			  </div>
		  </template>
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

	.photo {
		height: 210px;	
	}

	img {
		max-height: 200px;
	}
</style>