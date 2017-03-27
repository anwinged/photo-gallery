<template>
	<div class="row">
		<div class="col-md-6 box">
			<img class="fullview" :src="photo.src">
		</div>
		<div class="col-md-6">
			<h2>{{ title }}</h2>
			<p>
				<i class="glyphicon glyphicon-heart"></i> {{ photo.likes }}
			</p>
			<a class="btn btn-default" @click.prevent="onClose" href="#">Закрыть</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'photo-view',
	props: ['photo'],
	computed: {
		title() {
			return this.photo.comment || 'Без названия';
		}
	},
	methods: {
		onClose() {
			this.$emit('close');
		}
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