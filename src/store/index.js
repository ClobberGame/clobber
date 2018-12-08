import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    x: 0
  },
  mutations: {
    incrementScore (state) {
      state.score++;
    },
    incrementX (state) {
      state.x += 50;
    },
    setX (state, newX) {
      state.x = newX;
    }

  },
  actions: {

  }
})
