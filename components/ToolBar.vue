<template>
  <v-toolbar fixed app :color="primary">
    <v-toolbar-side-icon @click="$store.commit('changeNavDraw')"></v-toolbar-side-icon>
    <v-toolbar-title>Disability Services UWA</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-switch :color="secondary" v-model="monochrome">

      </v-switch>
    </v-btn>

    <v-btn 
      :color="primary"
      @click="$store.commit('showHowToDialog')"
    >
      How To
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    mounted () {
      this.monochrome = localStorage.getItem('monochrome') ? true : false
    },

    data () {
      return {
        monochrome: false
      }
    },

    computed: {
      primary () {
        return this.$store.state.monochrome ? 'black' : 'primary'
      },

      secondary () {
        return this.$store.state.monochrome ? 'white' : 'secondary'
      }
    },

    watch: {
      monochrome: function (val) {
        if (val) {
          localStorage.setItem('monochrome', '1')
          this.$store.commit('makeMonochromeTrue')
        } else {
          localStorage.removeItem('monochrome')
          this.$store.commit('makeMonochromeFalse')
        }
      }
    }

   
  }
</script>
