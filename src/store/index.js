import 'es6-promise/auto'
import Vue from 'vue'
// eslint-disable-next-line
import Vuex, { createLogger } from 'vuex'
import ip from './modules/ip'
import hadits from './modules/hadits'
import jadwalsholat from './modules/jadwalSholat'
import menu from './modules/menu'
import kota from './modules/kota'
import utl from './modules/utl'

Vue.use(Vuex)

// eslint-disable-next-line
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store(
  {
    modules: {
      ip,
      hadits,
      jadwalsholat,
      kota,
      menu,
      utl
    }
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
  }
)
