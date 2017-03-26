<template>
	<div class="jumbotron">
		<h1>VK Gallery</h1>
		<p>
			Display you photos and sort them in two directions:
			by time and like count.
		</p>
		<p>
			<a class="btn btn-primary btn-lg" href="#" role="button" @click.prevent="onLoginClick">Login</a>
		</p>
	</div>
</template>

<script>
export default {
	methods: {
		onLoginClick() {
			this.$emit('login');
		}
	}
}
</script>