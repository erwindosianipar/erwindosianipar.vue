import Vue from 'vue'
import Vuex from 'vuex'

import APIService from '../network/api.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectList: [],
    covid19Data: {},
    loadingProject: false,
    loadingCovid19: false
  },
  mutations: {
    setProjectList(state, data) {
      state.projectList = data
    },
    setCovid19Data(state, data) {
      state.covid19Data = data
    },
    toggleLoadingProject(state, value) {
      state.loadingProject = value
    },
    toggleLoadingCovid19(state, value) {
      state.loadingCovid19 = value
    }
  },
  actions: {
    getProjectList(context) {
      context.commit('toggleLoadingProject', true)
      return APIService.getProjectList()
    },
    getCovid19Data(context) {
      context.commit('toggleLoadingCovid19', true)
      return APIService.getCovid19Data()
    }
  }
})
