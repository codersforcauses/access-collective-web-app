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
            lat: -31.979260,
            lng: 115.819016
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.978917,
            lng: 115.819129
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.978812,
            lng: 115.819612
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.977520,
            lng: 115.816668
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.978948,
            lng: 115.816876
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.976296,
            lng: 115.813270
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.976823,
            lng: 115.813591
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.975957,
            lng: 115.812300
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.976916,
            lng: 115.811866
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.977166,
            lng: 115.815610
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.977371,
            lng: 115.814704
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.977498,
            lng: 115.815261
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.978028,
            lng: 115.814985
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.978210,
            lng: 115.816007
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.979764,
            lng: 115.815945
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.979905,
            lng: 115.814294
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.979787,
            lng: 115.813790
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.980638,
            lng: 115.815115
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.982317,
            lng: 115.816660
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.981355,
            lng: 115.817902
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.982692,
            lng: 115.818213
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.982941,
            lng: 115.818692
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.985609,
            lng: 115.818121
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.986231,
            lng: 115.819168
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.986237,
            lng: 115.820865
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.985176,
            lng: 115.821388
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.983634,
            lng: 115.820724
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.979764,
            lng: 115.815945
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.977303,
            lng: 115.820491
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.981102,
            lng: 115.819452
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.976201,
            lng: 115.818809
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.976224,
            lng: 115.819814
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.976142,
            lng: 115.821781
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.976167,
            lng: 115.822266
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.973287,
            lng: 115.823154
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.970111,
            lng: 115.816073
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.969757,
            lng: 115.816209
          }
        },
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.970323,
            lng: 115.815515
          }
        },
        {
          icon: liftIcon,
          position: {
            lat: -31.979630,
            lng: 115.818978
          }
        },
        {
          icon: liftIcon,
          position: {
            lat: -31.986073,
            lng: 115.820503
          }
        },
        {
          icon: liftIcon,
          position: {
            lat: -31.985436,
            lng: 115.818361
          }
        },
        {
          icon: liftIcon,
          position: {
            lat: -31.985196,
            lng: 115.819293
          }
        },
        {
          icon: liftIcon,
          position: {
            lat: -31.985202,
            lng: 115.820033
          }
        },
        ],
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
