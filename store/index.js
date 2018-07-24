import Vuex from 'vuex'
import accessibleServicesCoords from './accessible-services-coords.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      navDraw: false,
      accessibleServicesCoords
    },
    mutations: {
      changeNavDraw (state) {
        state.navDraw = !state.navDraw
      }
    }
  })
}

export default createStore