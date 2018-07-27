<template>
  <v-app :dark="isDarkMode">
    <nav-draw></nav-draw>
    <tool-bar></tool-bar>
    <v-content>
      <v-container fluid="true" style="padding: 0;">
        <nuxt />
      </v-container>
    </v-content>
    <footer></footer>
  </v-app>
</template>

<script>
import ToolBar from '@/components/ToolBar'
import NavDraw from '@/components/NavDraw'
import Footer from '@/components/Footer'

export default {
  components: {
    ToolBar,
    NavDraw,
    Footer
  },
  data() {
    return {
      isDarkMode: true
    }
  }
}

</script>

<style>

</style>
