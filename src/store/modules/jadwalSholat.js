import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// intial state
const state = () => ({
  jadwalSholatHari: [],
  jadwalSholatBulan: [],
  jadwalSholatBesok: [],
  jadwalTerdekat: ''
})

const modUnderTen = (data) => {
  return data < 10 ? `0${data}` : data
}

const getDataJadwalsholatHari = (data) => {
  const date = new Date()
  const today = `${date.getFullYear()}-${modUnderTen(date.getMonth() + 1)}-${modUnderTen(date.getDate())}`
  return data.filter(function (tanggal) {
    return tanggal.date.gregorian === today
  })
}

const getDataJadwalsholatBesok = (data) => {
  const date = new Date()
  const tomorrow = `${date.getFullYear()}-${modUnderTen(date.getMonth() + 1)}-${modUnderTen(date.getDate() === 31 ? '01' : date.getDate() + 1)}`
  return data.filter(function (tanggal) {
    return tanggal.date.gregorian === tomorrow
  })
}

// actions
const actions = {
  getDataJadwalsholat ({commit, rootState}) {
    axios
      .get(`https://api.pray.zone/v2/times/this_month.json?city=${rootState.ip.city}`)
      .then(result => {
        // commit perbulan, perhari
        // console.log(result)
        commit('setJadwalBulan', result.data.results.datetime)
        commit('setJadwalHari', getDataJadwalsholatHari(result.data.results.datetime))
        commit('setJadwalBesok', getDataJadwalsholatBesok(result.data.results.datetime))
      })
  },

  tes ({rootState}) {
    console.log('hari ini', rootState.jadwalsholat.jadwalSholatHari)
  }
}

// getters
const getters = {
}

// mutations
const mutations = {
  setJadwalHari (state, jadwal) {
    state.jadwalSholatHari = jadwal
  },
  setJadwalBulan (state, jadwal) {
    state.jadwalSholatBulan = jadwal
  },
  setJadwalTerdekat (state, jadwal) {
    state.jadwalTerdekat = jadwal
  },
  setJadwalBesok (state, jadwal) {
    state.jadwalSholatBesok = jadwal
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
