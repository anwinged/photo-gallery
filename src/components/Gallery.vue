<template>
	<section class="gallery">
	  <template v-if="selected">
	  	<photo-view :photo="selected" @close="onClose"/>
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
	props: ['photos'],
	data: function () {
		return {
			selected: null,
		};
	},
	methods: {
		onSelect(item) {
			console.log('SELECT', item);
			const photo = this.photos.find(p => p.src === item.src);
			if (photo !== undefined) {
				this.selected = photo;
			}
		},
		onClose() {
			this.selected = null;
		}
	}
}
</script>

<style scoped>
	.gallery {
		margin-top: 30px;
	}
</style>