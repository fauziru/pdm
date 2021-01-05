<template>
  <div>
    <div class="flex justify-center" v-if="!jamSholat">
      <loading/>
    </div>
    <div v-if="pesanError">
      <span>Terjadi Kesalahan, silahkan muat ulang halaman ini</span>
    </div>
    <div class="flex" v-if="jamSholat">
      <span>Tanggal gregorian: <span class="text-SpringGreen-1300 font-bold">{{ dateGregorian }}</span></span>
      <span class="ml-2">Tanggal hijriah: <span class="text-SpringGreen-1300 font-bold">{{ dateHijria }}</span></span>
    </div>
    <div v-if="jamSholat">
      <card customClass="rounded-xl mx-auto mt-3 border-gray-100 border-t-2 border-solid" width="md:w-3/5" bg="bg-gradient-to-tl from-Cultured-1000 via-Cultured-900 to-Cultured-900">
        <div class="grid justify-center">
          <div class="text-center">
            <i class="far fa-clock fa-4x text-SpringGreen-700 mr-1" :class="`${sisaJam || sisaMenit ? 'animate-pulse' : 'animate-bounce'}`"></i>
            <span class="text-6xl text-RaisinBlack-900 align-top">{{ jamSholat }}</span>
          </div>
          <span class="text-xl text-OuterSpace-900" >{{ `${sisaJam || sisaMenit ? pesanSholat : 'Sudah memasuki waktu sholat '}` }}<span class="text-SpringGreen-1300 font-bold">{{ keySholat }}</span>{{ `${sisaJam || sisaMenit ? ' dalam ' : ' sekarang' }` }}<span class="text-SpringGreen-1300 font-bold">{{ `${sisaJam || ''} ${ sisaJam ? ' jam' : ''} ` }}{{ `${sisaMenit || ''} ${ sisaMenit ? ' menit' : ''} ` }}</span></span>
        </div>
      </card>
    </div>
    <table v-if="jamSholat" class="w-full mt-5 border-gray-200 border-solid border-t-2">
      <tr>
        <th class="pt-3">Subuh</th>
        <th class="pt-3">Zuhur</th>
        <th class="pt-3">Asar</th>
        <th class="pt-3">Magrib</th>
        <th class="pt-3">Isya</th>
      </tr>
      <tr>
        <td class="text-center text-RaisinBlack-900">{{ Fajr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ Dhuhr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ Asr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ Maghrib }}</td>
        <td class="text-center text-RaisinBlack-900">{{ Isha }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import card from '../../_partials/Card'
import loading from '../../_partials/LoaderSpinner'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    card,
    loading
  },
  mounted () {
    setInterval(this.sholatTerdekat, 1000)
  },
  updated () {
    console.log('update')
  },
  computed: {
    ...mapState('jadwalsholat', [
      'jadwalSholatHari',
      'jadwalSholatBesok',
      'pesanError',
      'pesanSholat',
      'keySholat',
      'jamSholat',
      'sisaJam',
      'sisaMenit',
      'dateGregorian',
      'dateHijria',
      'Isha',
      'Fajr',
      'Dhuhr',
      'Asr',
      'Maghrib'
    ])
  },
  methods: {
    ...mapActions('jadwalsholat', [
      'tes',
      'sholatTerdekat'
    ])
  }
}
</script>
