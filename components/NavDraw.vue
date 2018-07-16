<template>
  <v-navigation-drawer :mini-variant.sync="miniVariant" v-model='drawer' fixed app>

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
