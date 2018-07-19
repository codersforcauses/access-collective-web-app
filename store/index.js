import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      navDraw: false
    },
    mutations: {
      changeNavDraw (state) {
        state.navDraw = !state.navDraw
      }
    }
  })
}

export default createStore