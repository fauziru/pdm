<template>
  <div>
    <div class="flex">
      <span>Tanggal gregorian: <span class="text-SpringGreen-1300 font-bold">{{ jadwalSholatHari[0].date.gregorian }}</span></span>
      <span class="ml-2">Tanggal hijriah: <span class="text-SpringGreen-1300 font-bold">{{ jadwalSholatHari[0].date.hijri }}</span></span>
    </div>
    <div>
      <card customClass="rounded-xl mx-auto mt-3 border-gray-100 border-t-2 border-solid" width="md:w-3/5" bg="bg-gradient-to-tl from-Cultured-1000 via-Cultured-900 to-Cultured-900">
        <div class="grid justify-center">
          <div class="text-center">
            <i class="far fa-clock fa-4x text-SpringGreen-700 mr-1 animate-pulse"></i>
            <span class="text-6xl text-RaisinBlack-900 align-top">{{ jamSholat }}</span>
          </div>
          <span class="text-xl text-OuterSpace-900" >{{ mssg }}<span class="text-SpringGreen-1300 font-bold">{{ key }}</span> dalam <span class="text-SpringGreen-1300 font-bold">{{ `${sisaJam || ''} ${ sisaJam ? ' jam' : ''} ` }}{{ `${sisaMenit || ''} ${ sisaMenit ? ' menit' : ''} ` }}</span></span>
        </div>
      </card>
    </div>
    <table class="w-full mt-5 border-gray-200 border-solid border-t-2">
      <tr>
        <th class="pt-3">Subuh</th>
        <th class="pt-3">Zuhur</th>
        <th class="pt-3">Asar</th>
        <th class="pt-3">Magrib</th>
        <th class="pt-3">Isya</th>
      </tr>
      <tr>
        <td class="text-center text-RaisinBlack-900">{{ jadwalSholatHari[0].times.Fajr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ jadwalSholatHari[0].times.Dhuhr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ jadwalSholatHari[0].times.Asr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ jadwalSholatHari[0].times.Maghrib }}</td>
        <td class="text-center text-RaisinBlack-900">{{ jadwalSholatHari[0].times.Isha }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import card from '../../_partials/Card'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    card
  },
  data () {
    return {
      date: '',
      times: '',
      key: '',
      jamSholat: '',
      sisaJam: 0,
      sisaMenit: 0,
      mssg: ''
    }
  },
  mounted () {
    setInterval(this.sholatTerdekat, 1000)
    // setInterval(this.tes, 1000)
  },
  computed: {
    ...mapState('jadwalsholat', [
      'jadwalSholatHari',
      'jadwalSholatBesok'
    ])
  },
  methods: {
    ...mapActions('jadwalsholat', [
      'tes'
    ]),
    modUnderTen: function (data) {
      return data < 10 ? `0${data}` : data
    },

    modMssg: function (string) {
      switch (string) {
        case 'Sunset':
          this.mssg = 'Waktu '
          break
        case 'Sunrise':
          this.mssg = 'Waktu '
          break
        case 'Imsak':
          this.mssg = 'Waktu '
          break
        case 'Midnight':
          this.mssg = 'Waktu '
          break
        default:
          this.mssg = 'Waktu sholat terdekat '
          break
      }
    },

    modKey: function (string) {
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
    },

    sholatTerdekat: function () {
      // inisiasi waktu hari ini dan waktu sholat terdekat
      const today = new Date()
      const timePrayTo = today.toLocaleTimeString(('en-GB'), { hour: 'numeric', minute: 'numeric' })
      // const timePrayTo = '00:00'
      // console.log(timePrayTo)
      // console.log('data besok', this.jadwalSholatBesok[0].times)
      let data = this.jadwalSholatHari[0].times
      let key = Object.getOwnPropertyNames(data).filter(prop => data[prop] >= timePrayTo)
      // console.log(key)
      if (key.length === 1) {
        // console.log('tes kosong')
        data = this.jadwalSholatBesok[0].times
        key = Object.getOwnPropertyNames(data).filter(prop => data[prop] >= '00:00')
        // console.log('tes key', key)
      }
      this.modMssg(key[0])
      this.key = this.modKey(key[0])
      this.jamSholat = data[key[0]]

      // kalkulasi sisa waktu
      let time1 = data[key[0]].split(':')
      let time2 = timePrayTo.split(':')
      let d1 = parseInt(time1[0]) * 60 + parseInt(time1[1])
      let d2 = parseInt(time2[0]) * 60 + parseInt(time2[1])
      let diff = d1 - d2
      let jamSisa = Math.floor(diff / 60) + (diff <= 0 ? 24 : 0)
      let menitSisa = diff - ((jamSisa - (diff <= 0 ? 24 : 0)) * 60)

      // console.log(jamSisa, diff)
      this.sisaJam = jamSisa
      this.sisaMenit = menitSisa
      // jika sudah masuk jam sholat umpan sweet alert dan bounce animasi jam
    }
  }
}
</script>
