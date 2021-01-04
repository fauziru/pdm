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
    axios
      .get(`http://api.alquran.cloud/v1/ayah/262`)
      .then(result => {
        commit('setHadits', result)
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
