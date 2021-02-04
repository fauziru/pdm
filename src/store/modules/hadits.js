import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// intial state
const state = () => ({
  hadits: []
})

// actions
const actions = {
  cariHadits ({commit}, keyword) {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    }
    axios
      .get(`hadis/?q=${keyword}`, config)
      // .get(`/api/v1/tes1`, config)
      .then(result => {
        console.log('tes proxy', result)
        // commit('setHadits', result)
      })
  }
}

// mutations
const mutations = {
  setHadits (state, hadits) {
    state.hadits = hadits
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
