<template>
	<v-card>
		<v-card light>
			<v-card-media contain :src="require('~/assets/CFC_Logo.png')" height="300">
			</v-card-media>
		</v-card>
	

		<v-card-title secondary-title class="mb-5">
			<div>
				<h3 class="headline">About</h3>
				<div>This web app has been proudly brought to you by <a href="https://codersforcauses.org">Coders for Causes</a> in collaboration with Guild Access Department</div>	
			</div>
					
		</v-card-title>
	</v-card>
</template>

<script>
	export default {
		computed: {
			logoHeight () {
				return this.$vuetify.breakpoint.name === 'xs' ? '250px': '500px'
			}
		}
	}
</script>