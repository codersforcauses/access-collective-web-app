<template>
  <v-card light>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
        <v-card light xs flat>
          <v-container width="500px">
            <v-layout row wrap>
              <v-flex d-flex xs6>
                <v-card flat>
                  <v-img :src="require('~/assets/CFC_Logo.png')">
                  </v-img>
                </v-card>
              </v-flex>

              <v-flex d-flex xs6>
                <v-card flat>
                  <v-img :src="require('~/assets/access_logo.jpg')">

                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </v-card>

      </v-flex>
    </v-layout>


    <v-card-title secondary-title class="mb-5" text-xs-center>
      <div>
        <h3 class="headline" text-xs-center>About</h3>
        <div>This web app has been proudly brought to you by <a href="https://codersforcauses.org">Coders for Causes</a>
          in collaboration with Guild Access Department</div>
      </div>

    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    computed: {
      logoHeight() {
        return this.$vuetify.breakpoint.name === 'xs' ? '250px' : '500px'
      }
    }
  }

</script>
