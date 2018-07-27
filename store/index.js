import Vuex from 'vuex'
import accessibleServicesCoords from './accessible-services-coords.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      navDraw: false,
      settingsDialog: false,
      accessibleMarkers: {
        accordParking: true,
        lift: true,
        ramps: true,
        toilets: true,

      },
      accessibleServicesCoords
    },

    getters: {

    },

    mutations: {
      changeNavDraw (state) {
        state.navDraw = !state.navDraw
      },

      showSettingsDialog (state) {
        state.settingsDialog = true
      },

      closeSettingsDialog (state) {
        state.settingsDialog = false
      }
    }
  })
}

export default createStore