<template>
  <v-layout column justify-center align-center>
    <SettingsDialog />
    <v-card height="calc(100vh - 64px)" width="100vw">

      <Map />
      
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

 
</style>
