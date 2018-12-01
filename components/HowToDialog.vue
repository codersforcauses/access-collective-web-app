<template>
  <v-dialog v-model="$store.state.howToDialog" max-width="500" :class="primary">
    <v-card :color="primary">
      <v-card-title>
        How To Use App
      </v-card-title>
      <v-card-text>
        <ul>
          <li>The icons on the map represent the locations of disability services around the UWA campus and beyond.</li>
          <li>Click on the legend button to view what each icon stands for</li>
          <li>Use the map like any other Google map</li>
          <li>You can enter a location in the search bar to quickly find near by disability services for a certain
            location</li>
          <li>Zoom into the map if you want to find the exact location of the disability service</li>
          <li>This app is a PWA so you can actually download it to your phone like a normal phone app</li>
        </ul>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="$store.commit('closeHowToDialog')" :color="primary">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
  export default {
    computed: {
      primary() {
        return this.$store.state.monochrome ? "black" : "primary";
      }
    }
  };

</script>
