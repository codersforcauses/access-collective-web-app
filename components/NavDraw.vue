<template>
  <v-navigation-drawer :mini-variant.sync="miniVariant" v-model='$store.state.navDraw' fixed app>
     <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

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
