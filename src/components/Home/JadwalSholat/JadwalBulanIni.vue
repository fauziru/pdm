<template>
  <div class="">
    <table class="w-full -ml-5 sm:-ml-0">
      <tr>
        <th class="sticky top-0 bg-SpringGreen-500 rounded">Tanggal</th>
        <th class="sticky top-0 bg-SpringGreen-500 rounded">Imsak</th>
        <th class="sticky top-0 bg-SpringGreen-500 rounded">Subuh</th>
        <th class="sticky top-0 bg-SpringGreen-500 rounded">Zuhur</th>
        <th class="sticky top-0 bg-SpringGreen-500 rounded">Asar</th>
        <th class="sticky top-0 bg-SpringGreen-500 rounded">Magrib</th>
        <th class="sticky top-0 bg-SpringGreen-500 rounded">Isya</th>
      </tr>
      <tr class="hover:bg-SpringGreen-500 h-10 border-gray-200 border-solid border-t-2" v-for="(item, index) in jadwalSholatBulan"
        :key="index" :class="item.date.gregorian == date ? 'bg-SpringGreen-700' : '' ">
        <td class="text-center text-RaisinBlack-900">{{ item.date.gregorian }}</td>
        <td class="text-center text-RaisinBlack-900">{{ item.times.Imsak }}</td>
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
