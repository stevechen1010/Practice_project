import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters.js';
import {
  state,
  actions,
  mutations
} from './root.js';

import counter from './modules/counter';


Vue.use(Vuex);


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  //將整理好的 modules放入 vuex 中組合
  modules: {
    counter
  },
  //嚴格模式，禁止直接修改 state
  strict: true
})