import 'es6-promise/auto'
import Vue from 'vue'
// eslint-disable-next-line
import Vuex, { createLogger } from 'vuex'
import ip from './modules/ip'
import hadits from './modules/hadits'
import jadwalsholat from './modules/jadwalSholat'
import kota from './modules/kota'

Vue.use(Vuex)

// eslint-disable-next-line
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store(
  {
    modules: {
      ip,
      hadits,
      jadwalsholat,
      kota
    }
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
  }
)
