<template>
<span>
  <span @click="legend = false">
    <v-toolbar dense class='search-bar' :color="primary">
		  <gmap-autocomplete 
        @place_changed="setPlace"
        :bounds="{north: -31.969972, east: 115.821395, south: -31.993956, west: 115.807834}"
        id="map-search"
        :class="$store.state.monochrome ? 'white-placeholder' : 'colored-placeholder'"
        selectFirstOnEnter
      >
		  </gmap-autocomplete>
			<v-spacer></v-spacer>
      <v-btn icon @click="geolocation">
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-btn icon
        @click="$store.commit('showSettingsDialog')"
      >
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>

    <gmap-map ref="mapRef" :center="center" :zoom="19" style="width: 100%; height: 100%;" :options="{styles: styles}">

      <gmap-cluster :minimumClusterSize="3">
        <GmapMarker 
          :key="index + 'parking'" 
          v-for="(m, index) in $store.state.accessibleServicesCoords.accordParking" 
          :position="m.position" 
          :icon="m.icon"
          @click="navigateHere(m)"
          v-if="$store.state.accessibleMarkers.accordParking"
        />
      </gmap-cluster>


      <gmap-cluster :minimumClusterSize="3">
        <GmapMarker 
          :key="index + 'lift'" 
          v-for="(m, index) in $store.state.accessibleServicesCoords.lift" 
          :position="m.position" 
          :icon="m.icon"
          @click="navigateHere(m)"
          v-if="$store.state.accessibleMarkers.lift"
        />
      </gmap-cluster>
      

      <gmap-cluster :minimumClusterSize="3">
        <GmapMarker 
          :key="index + 'ramps'" 
          v-for="(m, index) in $store.state.accessibleServicesCoords.ramps" 
          :position="m.position" 
          :icon="m.icon"
          @click="navigateHere(m)"
          v-if="$store.state.accessibleMarkers.ramps"
        />
      </gmap-cluster>
     

      <gmap-cluster :minimumClusterSize="3">
        <GmapMarker 
          :key="index + 'toilets'" 
          v-for="(m, index) in $store.state.accessibleServicesCoords.toilets" 
          :position="m.position" 
          :icon="m.icon"
          @click="navigateHere(m)"
          v-if="$store.state.accessibleMarkers.toilets"
        />
      </gmap-cluster>
      
      <gmap-cluster :minimumClusterSize="3">
        <GmapMarker 
          :key="index + 'misc'" 
          v-for="(m, index) in $store.state.accessibleServicesCoords.misc"
          :position="m.position"
          :icon="m.icon"/>
      </gmap-cluster>

      <GmapMarker :position="currentLocation" :icon="require('~/assets/my-location.svg')"> 
      </GmapMarker>

      <GmapMarker  v-if="place" :position="{lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}" :animation="google.maps.Animation.DROP"/>
    </gmap-map>
    </span>
    
    <v-btn
      :fixed="true"
      :bottom="true"
      :right="true"
      class="legend-btn"
      :color="primary"
      @click="legend = !legend"
      style="margin-bottom: 100px;"
      v-if="!legend"
    >
      Legend
    </v-btn>
    <v-btn :fixed="true" :bottom="true" :right="true" icon v-if="legend" @click="legend = !legend" style="margin-bottom: 100px;">
      <v-icon color="black">
        close
      </v-icon>
    </v-btn>
    <div id="legend" v-show="legend"></div>
    </span>
</template>

<script>
import { gmapApi } from '~/node_modules/vue2-google-maps'
import GmapCluster from '~/node_modules/vue2-google-maps/dist/components/cluster' 

export default {
    components: {
      GmapCluster
    },
    mounted() {
      this.geolocation()
      this.watchPositionId = navigator.geolocation.watchPosition((position) => {
        this.currentLocation.lat = position.coords.latitude
        this.currentLocation.lng = position.coords.longitude
      }, this.handleGetGeoError)

      const icons = [
        {
          name: 'Accessible Parking',
          icon: require('~/assets/ACORD-parking.svg')
        },
        {
          name: 'Universal Access Toilets',
          icon: require('~/assets/toilet-icon.png')
        },
        {
          name: 'Accessible Ramps',
          icon: require('~/assets/accessible-ramps2.svg')
        },
        {
          name: 'Lift',
          icon: require('~/assets/lift-icon.png')
        },
        {
          name: 'Guild Chemist',
          icon: require('~/assets/chemist-icon.png')
        },
        {
          name: 'Guild Student Assist',
          icon: require('~/assets/guild-icon.png')
        }
      ]
      var legend = document.getElementById('legend');
      for (let i = 0; i < icons.length; i++) {
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icons[i].icon + '"> ' + '<span class="black--text">' + icons[i].name + '</span>';
        legend.appendChild(div);
      }
      this.$refs.mapRef.$mapPromise.then(map => {
        this.gMap = map
        map.controls[this.google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
      })
    },

    destroyed () {
      navigator.geolocation.clearWatch(this.watchPositionId)
    },

    data() {
      return {
        currentLocation: {
          lat: 0,
          lng: 0
        },
        initLocation: null,
        directionsService: '',
        directionsDisplay: '',
        legend: false,
        gMap: null,
        place: null,
        watchPositionId: null,
        styles: [
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#C33361"
            },
            {
                "saturation": 43.400000000000006
            },
            {
                "lightness": 37.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#C33361"
            },
            {
                "saturation": -61.8
            },
            {
                "lightness": 45.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#C33361"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 51.19999999999999
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#C33361"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 52
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0078FF"
            },
            {
                "saturation": -13.200000000000003
            },
            {
                "lightness": 2.4000000000000057
            },
            {
                "gamma": 1
            }
        ]
    }
]
      }
    },

    computed: {
      google: gmapApi,
      center () {
        if (this.place) {
          return { lat: this.place.geometry.location.lat(), lng: this.place.geometry.location.lng()}
        } else if (this.initLocation) {
          return this.initLocation
        } else {
          return {lat:-31.980293, lng:115.817935}
        }
      },

      primary () {
        return this.$store.state.monochrome ? 'black' : 'primary'
      },

      secondary () {
        return this.$store.state.monochrome ? 'white' : 'secondary'
      }
    },

    methods: {
      geolocation: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.currentLocation.lat = position.coords.latitude
          this.currentLocation.lng = position.coords.longitude
          this.initLocation = JSON.parse(JSON.stringify(this.currentLocation))
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

      },

      setPlace: function (place) {
        this.place = place
      },

      handleGetGeoError: function (error) {
        this.$store.commit('showAlert', {type: 'error', message: 'Failed to retrieve your location because, ' + error.code})
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
.search-bar {
  position: fixed;
  left: 10px;
  top: 100px;
  z-index: 2;
  width: 95%
}

#map-search {
  width: 100%
}

.colored-placeholder::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: pink;
}
.colored-placeholder::-moz-placeholder { /* Firefox 19+ */
  color: pink;
}
.colored-placeholder:-ms-input-placeholder { /* IE 10+ */
  color: pink;
}
.colored-placeholder:-moz-placeholder { /* Firefox 18- */
  color: pink;
}

.white-placeholder::-webkit-input-placeholder {
  color: white;
}

.white-placeholder::-moz-placeholder { /* Firefox 19+ */
  color: white;
}
.white-placeholder:-ms-input-placeholder { /* IE 10+ */
  color: white;
}
.white-placeholder:-moz-placeholder { /* Firefox 18- */
  color: white;
}

input:focus{
  outline: none;
}
</style>
