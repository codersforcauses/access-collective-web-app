<template>
<span>
    <gmap-map ref="mapRef" :center="center" :zoom="19" style="width: 100%; height: 100%;">
      <GmapMarker 
        :key="index" 
        v-for="(m, index) in $store.state.accessibleServicesCoords" 
        :position="m.position" 
        :icon="m.icon"
        @click="navigateHere(m)"
        v-if="showAccessibleMarkers.includes(m.type)"
      />

      <GmapMarker :position="currentLocation" icon="/my-location.svg"> 
      </GmapMarker>
    </gmap-map>
    <div id="legend"><h3>Legend</h3></div>
    </span>
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

      const icons = [
        {
          name: 'Accessible Ramp',
          icon: '/ACORD-parking.svg'
        },
        {
          name: 'Universal Access Toilets',
          icon: '/toilet-icon.png'
        },
        {
          name: 'Accessible Ramps',
          icon: '/accessible-ramps-icon.gif'
        },
        {
          name: 'Lift',
          icon: '/lift-icon.png'
        }
      ]
      var legend = document.getElementById('legend');
      for (let i = 0; i < icons.length; i++) {
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icons[i].icon + '"> ' + '<span class="black--text">' + icons[i].name + '</span>';
        legend.appendChild(div);
      }
      this.$refs.mapRef.$mapPromise.then(map => {
        map.controls[this.google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
      })
    },

    data() {
      return {
        currentLocation: {
          lat: 0,
          lng: 0
        },
        directionsService: '',
        directionsDisplay: ''
      }
    },

    computed: {
      google: gmapApi,
      showAccessibleMarkers () {
        return this.$store.getters.showAccessibleMarkers
      },
      center () {
        if (this.currentLocation.lat !== 0) {
          return this.currentLocation
        } else {
          return {lat:-31.980293, lng:115.817935}
        }
      }
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
 #legend {
  background: #fff;
  padding: 10px;
  margin: 10px;
  border: 3px solid #000;
}
#legend h3 {
  margin-top: 0;
  color: black;
}
#legend img {
  vertical-align: middle;
}
#lengend > div {
  color: black;
}
</style>
