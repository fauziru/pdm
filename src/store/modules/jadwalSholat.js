import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const JSSHOLAT_MUTATIONS = {
  SET_JADWAL: 'SET_JADWAL',
  SET_JADWAL_HARIINI: 'SET_JADWAL_HARIINI',
  SET_TERDEKAT: 'SET_TERDEKAT'
}

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
  times: [],
  loadSholat: true
})

const modUnderTen = (data) => {
  return data < 10 ? `0${data}` : data
}

const getHourNumber = (data) => {
  let arrayHour = data.split(':')
  return parseInt(arrayHour[0]) * 60 + parseInt(arrayHour[1])
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
      axios
        .get(`https://api.pray.zone/v2/times/this_month.json?city=${lokasi || rootState.ip.city}&school=9`)
        .then(result => {
          const { datetime } = result.data.results
          const data = {
            jadwalBulan: datetime,
            jadwalHari: getDataJadwalsholatHari(datetime),
            jadwalBesok: getDataJadwalsholatBesok(datetime)
          }
          commit(JSSHOLAT_MUTATIONS.SET_JADWAL, data)
          commit('setPesanerror', '')
          resolve(200)
        }).catch(error => {
          reject(error)
          commit('setPesanerror', 'Jadwal sholat di kota ini belum tersedia!')
        })
    })
  },

  setDataSholatHari ({commit, rootState}) {
    commit(JSSHOLAT_MUTATIONS.SET_JADWAL_HARIINI, rootState.jadwalsholat.jadwalSholatHari[0])
  },

  modMssg ({commit}, string) {
    ['Sunset', 'Sunrise', 'Imsak', 'Midnight'].includes(string)
      ? commit('setPesanSholat', 'Waktu ')
      : commit('setPesanSholat', 'Waktu sholat terdekat ')
  },

  sholatTerdekat ({commit, rootState, dispatch}) {
    // inisiasi waktu hari ini dan waktu sholat terdekat
    let data = rootState.jadwalsholat.jadwalSholatHari[0].times
    const today = new Date()
    const timePrayTo = today.toLocaleTimeString(('en-GB'), { hour: 'numeric', minute: 'numeric' })
    // const timePrayTo = '18:17' // untuk debuging dan testing
    let key = Object.keys(data).sort((a, b) => getHourNumber(data[a]) - getHourNumber(data[b])).filter(prop => data[prop] >= timePrayTo)

    // jika waktu menunjukan tengah malam
    if (key.length === 0) {
      data = rootState.jadwalsholat.jadwalSholatBesok[0].times
      key = Object.keys(data).sort((a, b) => parseFloat(data[a]) - parseFloat(data[b])).filter(prop => data[prop] >= '00:00')
    }
    dispatch('modMssg', key[0])

    // kalkulasi sisa waktu
    let diff = getHourNumber(data[key[0]]) - getHourNumber(timePrayTo)
    let jamSisa = Math.floor(diff / 60) + (diff < 0 ? 24 : 0)
    let menitSisa = diff - ((jamSisa - (diff < 0 ? 24 : 0)) * 60)

    const result = {
      key: modKey(key[0]),
      jamSholat: data[key[0]],
      sisaJam: jamSisa,
      sisaMenit: menitSisa
    }

    // store data
    commit(JSSHOLAT_MUTATIONS.SET_TERDEKAT, result)
    commit('setLoad', false)
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
  [JSSHOLAT_MUTATIONS.SET_JADWAL] (state, { jadwalHari, jadwalBulan, jadwalBesok }) {
    state.jadwalSholatHari = jadwalHari
    state.jadwalSholatBulan = jadwalBulan
    state.jadwalSholatBesok = jadwalBesok
  },
  [JSSHOLAT_MUTATIONS.SET_JADWAL_HARIINI] (state, { date, times }) {
    state.date = date
    state.times = times
  },
  [JSSHOLAT_MUTATIONS.SET_TERDEKAT] (state, { key, jamSholat, sisaJam, sisaMenit }) {
    state.keySholat = key
    state.jamSholat = jamSholat
    state.sisaJam = sisaJam
    state.sisaMenit = sisaMenit
  },
  setPesanerror (state, pesan) {
    state.pesanError = pesan
  },
  setPesanSholat (state, pesan) {
    state.pesanSholat = pesan
  },
  setLoad (state, bool) {
    state.loadSholat = bool
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
