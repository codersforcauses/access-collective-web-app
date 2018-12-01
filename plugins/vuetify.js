import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#A50034', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.pink.lighten2,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
    black: '#000000',
    white: '#ffffff'
  }
})
