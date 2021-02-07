import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// reusable aliases for mutations
const IP_MUTATIONS = {
  SET_SETTING: 'SET_SETTING',
  SET_TIME: 'SET_TIME'
}

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
        .get('https://ipapi.co/json/')
        .then(result => {
          const { data } = result
          commit(IP_MUTATIONS.SET_SETTING, data)
          resolve(result.status)
        }).catch((error) => {
          reject(error)
          commit('setCity', 'Maaf jaringan anda terputus')
        })
    })
  },

  getNow  ({commit}) {
    const week = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const today = new Date()
    const data = {
      date: `${today.getFullYear()}-${modUnderTen(today.getMonth() + 1)}-${modUnderTen(today.getDate())}`,
      day: week[today.getDay()],
      hour: modUnderTen(today.getHours()),
      minute: modUnderTen(today.getMinutes())
    }
    commit(IP_MUTATIONS.SET_TIME, data)
  }
}

// mutations
const mutations = {
  [IP_MUTATIONS.SET_SETTING] (state, { ip, city }) {
    state.ip = ip
    state.city = city
  },
  [IP_MUTATIONS.SET_TIME] (state, { date, day, hour, minute }) {
    state.date = date
    state.day = day
    state.hour = hour
    state.minute = minute
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
