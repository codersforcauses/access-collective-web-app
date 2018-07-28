<template>
  <v-app :dark="isDarkMode">
    <nav-draw></nav-draw>
    <tool-bar></tool-bar>
    <v-content>
      <v-container fluid="true" style="padding: 0;">
        <alert></alert>        
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
import Alert from '@/components/Alert'

export default {
  components: {
    ToolBar,
    NavDraw,
    Footer,
    Alert
  },
  created () {
    if (this.isIE()) this.$store.commit('showAlert', {type: 'error', message: 'Sorry IE browser is not supported please use a more recent browser: Chrome, Firefox, Edge, Safari'})
  },
  data() {
    return {
      isDarkMode: true
    }
  },
  methods: {
    isIE: function () {
      let ua = window.navigator.userAgent;
      let msie = ua.indexOf("MSIE ");
      return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    }
  }
}

</script>

<style>

</style>
