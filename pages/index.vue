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

      <Map />

      <v-speed-dial
        :fixed='true'
        class='dial'
        :top='true'
        :right='true'
        direction='bottom'
      >
        <v-btn
          slot="activator"
          v-model="showSettings"
          color="blue darken-2"
          dark
          fab
          @click='showSettings = !showSettings'
        >
          <v-icon>settings</v-icon>
          <v-icon>close</v-icon>
            
        </v-btn>
        <v-btn icon>
          <v-avatar>
            <img src="/ACORD-parking.svg" alt="ACORD parking">
          </v-avatar>
        </v-btn>
         <v-btn
            fab
            dark
            small
            color="green"
          >
            <v-icon>edit</v-icon>
          </v-btn>
      </v-speed-dial>
    </v-card>
  </v-layout>
</template>

<script>
import Map from '@/components/Map'
  export default {
    components: {
      Map
    },
    data () {
      return {
        showSettings: true,        
      }
    }
  }

</script>

<style scoped>
  .dial {
    z-index: 9999;
    margin-top: 40px;
  }

  .search-bar {
    position: fixed;
    left: 10px;
    top: 100px;
    z-index: 9999;
  }
</style>
