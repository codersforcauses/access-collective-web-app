<template>
	<div>
		<v-alert class="alert" dismissible v-model="$store.state.alert.alert" :type="$store.state.alert.type">
			{{ $store.state.alert.message }}
		</v-alert>
	</div>
</template>

<style scoped>
	.alert {
		position: fixed;
		top: 20px;
		right: 10px;
	}
</style>
