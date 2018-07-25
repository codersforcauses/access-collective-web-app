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
      showAccessibleMarkers: state => {
        let markers = []
        for (const key of Object.keys(state.accessibleMarkers)) {
          if (state.accessibleMarkers[key]) markers.push(key)
        }
        return markers
      }
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