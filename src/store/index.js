import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUserName: ''
  },
  getters: {
    getLoginUserName: state => {
      return state.loginUserName
    }
  },
  mutations: {
    setLoginUserName (state, name) {
      state.loginUserName = name
    }
  }
})
