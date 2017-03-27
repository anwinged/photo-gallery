<template>
	<div>
	  <a @click.prevent="onClick" href="#" class="photo thumbnail">
	    <img :src="src" :title="title" :alt="alt">
	  </a>
	</div>
</template>

<script>
const DEFAULT_CAPTION = 'Фоточка';

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
	}

	img {
		max-height: 200px;
	}
</style>