import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import { getList } from '../api/api.js'

export function createStore() {
  return new Vuex.Store({
    state: {
      list: []
    },
    actions: {
      async getListData({ commit }, params) {
        console.log(15, params)
        let data = await getList(params);
        commit('setData', data);
      }
    },
    mutations: {
      setData(state, data) {
        state.list = data.list && data.list.map((item, index) => {
          return `${item}-${index}`
        })
      }
    }
  })
}