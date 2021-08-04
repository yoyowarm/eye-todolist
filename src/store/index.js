import Vue from 'vue'
import Vuex from 'vuex'
import { login, getToDoLists, getList, updateList, deleteList, getNewestId } from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: {},
    allLists: [],
    listDetail: {
      "to_do_id": "",
      "author": "",
      "brief": "",
      "content": "",
      "level": 9,
      "modified_time": "2021-02-09 11:21:37",
      "reserved_time": "2021-06-09 12:04",
      "subject": "",
      "attachments": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    },
    updateResponse: {},
    deleteResponse: {},
    newestId: ''
  },
  mutations: {
  },
  modules: {
    LOGIN_SUCCESS(state, data) {
      state.login = data
    },
    SET_ALL_LISTS(state, data) {
      state.allLists = data
    },
    SET_LIST_DETAIL(state, data) {
      state.listDetail = data
    },
    UPDATE_LIST_RESPONSE(state, response) {
      state.updateResponse = response
    },
    DELETE_LIST_RESPONSE(state, response) {
      state.deleteResponse = response
    },
    NEWEST_ID(state, id) {
      state.newestId = id
    }
  },
  actions: {
    async login({ commit }, { account, passwd }) {
      const data = await login({ account, passwd })
      commit('LOGIN_SUCCESS', data)
    },
    async getToDoLists({ commit }) {
      const data = await getToDoLists()
      commit('SET_ALL_LISTS', data)
    },
    async getList({ commit }, id) {
      const data = await getList(id)
      commit('SET_LIST_DETAIL', data)
    },
    async updateList({ commit }, data) {
      const response = await updateList(data)
      commit('UPDATE_LIST_RESPONSE', response)
    },
    async deleteList({ commit }, id) {
      const response = await deleteList(id)
      commit('DELETE_LIST_RESPONSE', response)
    },
    async getNewestId({ commit }) {
      const id = await getNewestId()
      commit('NEWEST_ID', id)
    }
  },

})
