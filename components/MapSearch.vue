<template>
	<v-toolbar dense class='search-bar'>
		<input type="text" id="map-search">
		<gmap-autocomplete 
			@place_changed="setPlace" 
			:componentRestrictions="{country: 'AU', postcode: 6009}">

		</gmap-autocomplete>
			<v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
</template>

<script>
import { gmapApi } from '~/node_modules/vue2-google-maps'

	export default {
		props: ['mapRef'],

		watch: {
			mapRef: function (map) {
				const input = document.getElementById('map-search')
				const autocomplete = new this.google.maps.places.Autocomplete(input)
				autocomplete.bindTo('bounds', map)

				autocomplete.setFields([
					'geometry'
				])


			}
		},

		data () {
			return {
				autocomplete: '',
				search: '',
				place: ''
			}
		},

		computed: {
			google: gmapApi
		},

		methods: {
			setPlace: function (place) {
				console.log(place)
				this.place = place
			}
		}
	}
</script>

<style scoped>
 .search-bar {
    position: fixed;
    left: 10px;
    top: 100px;
		z-index: 100;
		width: 95%
  }

	#map-search {
		width: 100%
	}
</style>
