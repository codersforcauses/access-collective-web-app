<template>
  <v-footer app :class="primary" height="20">
    <span class="ml-1">Made with &#10084; by Coders for Causes.</span>
  </v-footer>
</template>

<script>
  export default {
     computed: {
      primary () {
        return this.$store.state.monochrome ? 'black' : 'primary'
      },

      secondary () {
        return this.$store.state.monochrome ? 'white' : 'secondary'
      }
    },
  }
</script>