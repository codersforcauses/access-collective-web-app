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
      accessibleServicesCoords,
      alert: {
        alert: false,
        type: 'info',
        message: null
      },
      monochrome:null
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
      },

      showAlert (state, payload) {
        state.alert.alert = true
        state.alert.type = payload.type
        state.alert.message = payload.message
      },

      hideAlert(state) {
        state.alert.alert = false
      },

      makeMonochromeTrue(state) {
        state.monochrome = true
      },

      makeMonochromeFalse(state) {
        state.monochrome = false
      }
    }
  })
}

export default createStore