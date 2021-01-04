<template>
  <div>
    <table class="w-full">
      <tr>
        <th>Tanggal</th>
        <th>Subuh</th>
        <th>Zuhur</th>
        <th>Asar</th>
        <th>Magrib</th>
        <th>Isya</th>
      </tr>
      <tr class="hover:bg-SpringGreen-500 h-10 border-gray-200 border-solid border-t-2" v-for="(item, index) in jadwalSholatBulan"
        :key="index" :class="item.date.gregorian == date ? 'bg-SpringGreen-700' : '' ">
        <td class="text-center text-RaisinBlack-900">{{ item.date.gregorian }}</td>
        <td class="text-center text-RaisinBlack-900">{{ item.times.Fajr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ item.times.Dhuhr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ item.times.Asr }}</td>
        <td class="text-center text-RaisinBlack-900">{{ item.times.Maghrib }}</td>
        <td class="text-center text-RaisinBlack-900">{{ item.times.Isha }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  computed: {
    ...mapState('jadwalsholat', [
      'jadwalSholatBulan'
    ]),
    ...mapState('ip', [
      'date'
    ])
  }
}
</script>
