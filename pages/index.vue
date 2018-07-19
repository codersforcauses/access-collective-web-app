<template>
  <v-layout column justify-center align-center>
    <v-toolbar
      dense
      floating
      class='search-bar'
    >
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
      <v-card height="calc(100vh - 64px)" width="100vw">
         
        <gmap-map
          :center="{lat:-31.980293, lng:115.817935}"
          :zoom="17"
          map-type-id="terrain"
          style="width: 100%; height: 100%;"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in accessibleMarkers"
            :position="m.position"
            :icon="m.icon"
          />
        </gmap-map>
      </v-card>
  </v-layout>
</template>

<script>

export default {
  data () {
    let wheelChairIcon = '/wheel-chair-icon.gif'
    let publicTransIcon =  '/public-transport-icon.gif'
    let toiletIcon = '/toilet-icon.gif'
    let accessibleRampsIcon = '/accessible-ramps-icon.gif'
    let liftIcon = '/lift-icon.gif'
    return {
      accessibleMarkers: [
        {
          icon: wheelChairIcon,
          position: {
            lat: -31.980293,
            lng:115.817935
          }
        }
      ]
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
