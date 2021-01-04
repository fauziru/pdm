import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// intial state
const state = () => ({
  ip: '',
  city: '',
  date: '',
  day: '',
  hour: '',
  minute: ''
})

const modUnderTen = (data) => {
  return data < 10 ? `0${data}` : data
}

// actions
const actions = {
  getIP ({commit}) {
    return new Promise((resolve, reject) => {
      axios
        .get('http://ip-api.com/json')
        .then(result => {
          commit('setIP', result.data.query)
          commit('setCity', result.data.city)
          resolve(result.data.status)
        }).catch((error) => {
          reject(error)
          commit('setCity', 'Maaf jaringan anda terputus')
        })
    })
  },

  getNow  ({commit}) {
    const week = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const today = new Date()
    commit('setDate', `${today.getFullYear()}-${modUnderTen(today.getMonth() + 1)}-${modUnderTen(today.getDate())}`)
    commit('setDay', week[today.getDay()])
    commit('setHour', modUnderTen(today.getHours()))
    commit('setMinute', modUnderTen(today.getMinutes()))
  }
}

// mutations
const mutations = {
  setIP (state, ip) {
    state.ip = ip
  },
  setCity (state, city) {
    state.city = city
  },
  setDate (state, date) {
    state.date = date
  },
  setDay (state, day) {
    state.day = day
  },
  setHour (state, hour) {
    state.hour = hour
  },
  setMinute (state, minute) {
    state.minute = minute
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
