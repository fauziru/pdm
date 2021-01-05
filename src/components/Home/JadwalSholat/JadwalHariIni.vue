<template>
  <div>
    <div class="flex justify-center" v-if="!jamSholat">
      <loading/>
    </div>
    <div v-if="pesanError">
      <span>Terjadi Kesalahan, silahkan muat ulang halaman ini</span>
    </div>
    <div v-if="jamSholat" >
      <label>Pilihan Kota: </label>
      <select class="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-SpringGreen-700 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" @input="change()">
        <option value="0" v-bind="city">{{ city }}</option>
      </select>
    </div>
    <div class="flex mt-3" v-if="jamSholat">
      <span>Tanggal gregorian: <span class="text-SpringGreen-1300 font-bold">{{ date.gregorian }}</span></span>
      <span class="ml-2">Tanggal hijriah: <span class="text-SpringGreen-1300 font-bold">{{ date.hijri }}</span></span>
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
        <th class="pt-3">Imsak</th>
        <th class="pt-3">Subuh</th>
        <th class="pt-3">Zuhur</th>
        <th class="pt-3">Asar</th>
        <th class="pt-3">Magrib</th>
        <th class="pt-3">Isya</th>
      </tr>
      <tr>
        <td class="text-center text-RaisinBlack-900">{{ times.Imsak }}</td>
        <td class="text-center text-RaisinBlack-900">{{ times.Fajr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ times.Dhuhr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ times.Asr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ times.Maghrib }}</td>
        <td class="text-center text-RaisinBlack-900">{{ times.Isha }}</td>
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
      'date',
      'times'
    ]),
    ...mapState('ip', [
      'city'
    ])
  },
  methods: {
    ...mapActions('jadwalsholat', [
      'tes',
      'sholatTerdekat'
    ]),
    change: function () {
      console.log('triger ganti kota')
    }
  }
}
</script>
