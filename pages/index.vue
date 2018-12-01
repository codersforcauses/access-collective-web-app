<template>
  <v-layout column justify-center align-center>
    <SettingsDialog />
    <HowToDialog />
    <v-card height="calc(100vh - 64px)" width="100vw">

      <Map />
      
    </v-card>
    
  </v-layout>
</template>

<script>
import Map from '@/components/Map'
import SettingsDialog from '@/components/SettingsDialog'
import HowToDialog from '@/components/HowToDialog'

  export default {
    components: {
      Map,
      SettingsDialog,
      HowToDialog
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
