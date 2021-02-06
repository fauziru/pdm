<template>
  <div>
    <div class="flex justify-center" v-if="!jamSholat">
      <loading/>
    </div>
    <div v-if="pesanError">
      <span>{{ pesanError + ' Terjadi Kesalahan silahkan muat ulang halaman!' }}</span>
    </div>
    <div>
      <label>Pilihan Kota: </label>
      <t-rich-select
        v-model="selectedKota"
        placeholder="Pilih kota ..."
        v-bind:options="kotas"
        value-attribute="nama"
        text-attribute="nama"
        @input="change()"
      >
      </t-rich-select>
      <!-- <select class="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-SpringGreen-700 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" @input="change()">
        <option value="0" v-bind="city">{{ city }}</option>
        <option v-for="(item, index) in kota" :key="index" :value="item.id" >{{ item.nama }}</option>
      </select> -->
    </div>
    <div class="flex mt-3" v-if="jamSholat">
      <span>Tanggal gregorian: <span class="text-OuterSpace-900 font-bold">{{ date.gregorian }}</span></span>
      <span class="ml-2">Tanggal hijriah: <span class="text-OuterSpace-900 font-bold">{{ date.hijri }}</span></span>
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
        <td class="text-center text-RaisinBlack-900 rounded" :class="activeTimes(jamSholat, times['Imsak'])">{{ times.Imsak }}</td>
        <td class="text-center text-RaisinBlack-900 rounded" :class="activeTimes(jamSholat, times['Fajr'])">{{ times.Fajr }}</td>
        <td class="text-center text-RaisinBlack-900 rounded" :class="activeTimes(jamSholat, times['Dhuhr'])">{{ times.Dhuhr }}</td>
        <td class="text-center text-RaisinBlack-900 rounded" :class="activeTimes(jamSholat, times['Asr'])">{{ times.Asr }}</td>
        <td class="text-center text-RaisinBlack-900 rounded" :class="activeTimes(jamSholat, times['Maghrib'])">{{ times.Maghrib }}</td>
        <td class="text-center text-RaisinBlack-900 rounded" :class="activeTimes(jamSholat, times['Isha'])">{{ times.Isha }}</td>
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
  data () {
    return {
      selectedKota: ''
    }
  },
  mounted () {
    setInterval(this.sholatTerdekat, 1000)
    this.promise = true
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
    ]),
    ...mapState('kota', [
      'kotas'
    ])
  },
  methods: {
    ...mapActions('jadwalsholat', [
      'tes',
      'sholatTerdekat',
      'getDataJadwalsholat',
      'setDataSholatHari'
    ]),
    change: function () {
      console.log('ganti jadwal sholat kota ke =', this.selectedKota)
      this.$store.commit('jadwalsholat/setJamsholat', '')
      this.getDataJadwalsholat(this.selectedKota).then(response => {
        if (response === 200) this.setDataSholatHari()
      }).catch(error => {
        console.log(error)
      })
    },
    activeTimes: function (jamSholat, compare) {
      return jamSholat === compare ? 'bg-SpringGreen-500' : ''
    }
  }
}
</script>
