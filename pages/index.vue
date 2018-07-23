<template>
  <v-layout column justify-center align-center>
    <v-toolbar dense floating class='search-bar'>
      <v-text-field hide-details prepend-icon="search" single-line></v-text-field>

      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card height="calc(100vh - 64px)" width="100vw">

      <gmap-map ref="mapRef" :center="{lat:-31.980293, lng:115.817935}" :zoom="17" style="width: 100%; height: 100%;">
        <GmapMarker 
          :key="index" 
          v-for="(m, index) in accessibleMarkers" 
          :position="m.position" 
          :icon="m.icon"
          @click="navigateHere(m)"
        />

        <GmapMarker :position="currentLocation" icon="/person-pin.svg"> 
          <gmap-info-window :options="{disableAutoPan: true}">
            <span class='black--text'>You are here</span>"
          </gmap-info-window>
        </GmapMarker>
      </gmap-map>
    </v-card>
  </v-layout>
</template>

<script>
import { gmapApi } from '~/node_modules/vue2-google-maps'
  export default {
    mounted() {
      this.geolocation()
      navigator.geolocation.watchPosition((position) => {
        this.currentLocation.lat = position.coords.latitude
        this.currentLocation.lng = position.coords.longitude
      })
    },

    data() {
      let wheelChairIcon = '/wheel-chair-icon.gif'
      let publicTransIcon = '/public-transport-icon.gif'
      let toiletIcon = '/toilet-icon.gif'
      let accessibleRampsIcon = '/accessible-ramps-icon.gif'
      let liftIcon = '/lift-icon.png'
      return {
        accessibleMarkers: [{
          icon: wheelChairIcon,
          position: {
            lat: -31.980293,
            lng: 115.817935
          }
        }],
        currentLocation: {
          lat: 0,
          lng: 0
        },
        currentLocationText: 'You are here',
        directionsService: '',
        directionsDisplay: ''
      }
    },

    computed: {
      google: gmapApi,
    },

    methods: {
      geolocation: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.currentLocation.lat = position.coords.latitude
          this.currentLocation.lng = position.coords.longitude
        })
      },

      setGoogleDirections: function () {
        this.directionsService = new this.google.maps.DirectionsService
        this.directionsDisplay = new this.google.maps.DirectionsRenderer
        this.$refs.mapRef.$mapPromise.then(map => {
          this.directionsDisplay.setMap(map)
        })
      },

      navigateHere: function (marker) {
        this.setGoogleDirections()

        this.directionsService.route({
          origin: this.currentLocation,
          destination: marker.position,
          travelMode: 'WALKING'
        }, (res, status) => {
           if (status === 'OK') {
            this.directionsDisplay.setDirections(res);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        })

      }
    }
  }

</script>

<style scoped>
  .search-bar {
    position: fixed;
    left: 10px;
    top: 100px;
    z-index: 9999;
  }

</style>
