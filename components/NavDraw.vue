<template>
  <v-navigation-drawer :mini-variant.sync="mini" v-model='$store.state.navDraw' fixed app class="secondary">
    <v-toolbar flat color="primary">
      <v-btn icon>
        <v-avatar>
          <img :src="require('~/assets/access_logo.jpg')" alt="Access Logo">
        </v-avatar>
      </v-btn>
   
    </v-toolbar>

    <v-divider></v-divider>

    <v-list>
      <v-list-tile to="/">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Home
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-list-tile @click="$store.commit('showSettingsDialog')">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Settings
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-list-tile to="/contact">
        <v-list-tile-action>
          <v-icon>question_answer</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Contact Us
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-list-tile to="/about">
        <v-list-tile-action>
          <v-icon>people</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          About
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        miniVariant: false
      }
    },

    computed: {
      mini () {
        return this.$vuetify.breakpoint.name === 'xs'
      }
    }
  }

</script>

<style>

</style>
