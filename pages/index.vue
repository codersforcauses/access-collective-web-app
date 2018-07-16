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
          :center="{lat:10, lng:10}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100%; height: 100%;"
        >
      
        </gmap-map>
      </v-card>
  </v-layout>
</template>

<script>

export default {

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
