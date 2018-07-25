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
    <SettingsDialog />
    <v-card height="calc(100vh - 64px)" width="100vw">

      <Map />
      <v-btn
        :fixed="true"
        class="settings-btn"
        :top="true"
        :right="true"
        color="blue darken-2"
        dark
        fab
        @click="$store.commit('showSettingsDialog')"
      >
        <v-icon>settings</v-icon>
      </v-btn>

      
    </v-card>
  </v-layout>
</template>

<script>
import Map from '@/components/Map'
import SettingsDialog from '@/components/SettingsDialog'

  export default {
    components: {
      Map,
      SettingsDialog
    },
    data () {
      return {
        showSettings: true,        
      }
    }
  }

</script>

<style scoped>
  .settings-btn {
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
