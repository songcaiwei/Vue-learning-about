import Vue from 'vue'
import Vuex from 'vuex'
import mallModule from './mall'
import userModule from './user'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    msg: 'helloworld'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,mallModule,

  }
})
