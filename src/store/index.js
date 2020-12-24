import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stats: 123,
  },
  getters: {
    getStat: (state) => state.stats,
  },
  mutations: {},
  actions: {},
  modules: {},
});
