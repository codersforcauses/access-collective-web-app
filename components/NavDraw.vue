<template>
  <v-navigation-drawer :mini-variant.sync="miniVariant" v-model='$store.state.navDraw' fixed app>

  </v-navigation-drawer>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        miniVariant: false
      }
    }
  }

</script>
