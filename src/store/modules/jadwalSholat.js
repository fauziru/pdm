import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// intial state
const state = () => ({
  jadwalSholatHari: [],
  jadwalSholatBulan: [],
  jadwalSholatBesok: [],
  jadwalTerdekat: '',
  pesanError: '',
  pesanSholat: '',
  keySholat: '',
  jamSholat: '',
  sisaJam: '',
  sisaMenit: '',
  date: [],
  times: []
})

const modUnderTen = (data) => {
  return data < 10 ? `0${data}` : data
}

const modKey = (string) => {
  switch (string) {
    case 'Sunset':
      return 'Matahari Terbenam'
    case 'Sunrise':
      return 'Matahari Terbit'
    case 'Imsak':
      return 'Imsak'
    case 'Midnight':
      return 'Tangah Malam'
    case 'Asr':
      return 'Asar'
    case 'Dhuhr':
      return 'Zuhur'
    case 'Fajr':
      return 'Subuh'
    case 'Isha':
      return 'Isya'
    case 'Maghrib':
      return 'Magrib'
    default:
      return 'Error'
  }
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
  getDataJadwalsholat ({commit, rootState}, lokasi) {
    return new Promise((resolve, reject) => {
      // const config = {
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      //     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      //   }
      // }
      axios
        .get(`https://api.pray.zone/v2/times/this_month.json?city=${lokasi || rootState.ip.city}&school=9`)
        .then(result => {
          // commit perbulan, perhari
          // console.log(result)
          commit('setJadwalBulan', result.data.results.datetime)
          commit('setJadwalHari', getDataJadwalsholatHari(result.data.results.datetime))
          commit('setJadwalBesok', getDataJadwalsholatBesok(result.data.results.datetime))
          commit('setPesanerror', '')
          resolve(200)
        }).catch(error => {
          reject(error)
          commit('setPesanerror', 'Jadwal sholat di kota ini belum tersedia!')
        })
    })
  },

  setDataSholatHari ({commit, rootState}) {
    // console.log('jadwal sholat hari ini', rootState.jadwalsholat.jadwalSholatHari[0].times)
    const data = rootState.jadwalsholat.jadwalSholatHari[0]
    commit('setDate', data.date)
    commit('setTimes', data.times)
  },

  modMssg ({commit}, string) {
    switch (string) {
      case 'Sunset':
        commit('setPesanSholat', 'Waktu ')
        break
      case 'Sunrise':
        commit('setPesanSholat', 'Waktu ')
        break
      case 'Imsak':
        commit('setPesanSholat', 'Waktu ')
        break
      case 'Midnight':
        commit('setPesanSholat', 'Waktu ')
        break
      default:
        commit('setPesanSholat', 'Waktu sholat terdekat ')
        break
    }
  },

  sholatTerdekat ({commit, rootState, dispatch}) {
    // inisiasi waktu hari ini dan waktu sholat terdekat
    // console.log('call sholat terddekat')
    let data = rootState.jadwalsholat.jadwalSholatHari[0].times
    const today = new Date()
    const timePrayTo = today.toLocaleTimeString(('en-GB'), { hour: 'numeric', minute: 'numeric' })
    // const timePrayTo = '04:27'
    // console.log(timePrayTo)
    // console.log('data besok', this.jadwalSholatBesok[0].times)
    let key = Object.keys(data).sort((a, b) => parseFloat(data[a]) - parseFloat(data[b])).filter(prop => data[prop] >= timePrayTo)
    // let key = Object.getOwnPropertyNames(data).filter(prop => data[prop] >= timePrayTo)
    // console.log(data)
    // console.log('key', key)
    // console.log('key sorted', dataSorted)
    if (key.length === 0) {
      // console.log('tes kosong')
      data = rootState.jadwalsholat.jadwalSholatBesok[0].times
      key = Object.keys(data).sort((a, b) => parseFloat(data[a]) - parseFloat(data[b])).filter(prop => data[prop] >= '00:00')
      // console.log('tes key', key)
    }
    dispatch('modMssg', key[0])
    commit('setKey', modKey(key[0]))
    commit('setJamsholat', data[key[0]])
    // console.log('jam sholat', this.jamSholat)

    // kalkulasi sisa waktu
    let time1 = data[key[0]].split(':')
    let time2 = timePrayTo.split(':')
    let d1 = parseInt(time1[0]) * 60 + parseInt(time1[1])
    let d2 = parseInt(time2[0]) * 60 + parseInt(time2[1])
    let diff = d1 - d2
    let jamSisa = Math.floor(diff / 60) + (diff < 0 ? 24 : 0)
    let menitSisa = diff - ((jamSisa - (diff < 0 ? 24 : 0)) * 60)
    // console.log(jamSisa, diff)
    commit('setSisajam', jamSisa)
    commit('setSisamenit', menitSisa)
    // jika sudah masuk jam sholat umpan sweet alert dan bounce animasi jam
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
  },
  setPesanerror (state, pesan) {
    state.pesanError = pesan
  },
  setPesanSholat (state, pesan) {
    state.pesanSholat = pesan
  },
  setKey (state, key) {
    state.keySholat = key
  },
  setJamsholat (state, jam) {
    state.jamSholat = jam
  },
  setSisajam (state, jam) {
    state.sisaJam = jam
  },
  setSisamenit (state, menit) {
    state.sisaMenit = menit
  },
  setDate (state, tanggal) {
    state.date = tanggal
  },
  setTimes (state, jam) {
    state.times = jam
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
