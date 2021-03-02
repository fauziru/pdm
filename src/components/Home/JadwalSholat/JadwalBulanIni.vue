<template>
  <div class="">
    <table class="w-full">
      <tr>
        <th class="sticky top-0 bg-SpringGreen-500 rounded">Tanggal</th>
        <th v-for="(item, index) in keyPray" :key="index" class="sticky top-0 bg-SpringGreen-500 rounded">{{ item.id }}</th>
      </tr>
      <tr class="hover:bg-SpringGreen-500 h-10 border-gray-200 border-solid border-t-2" v-for="(item, index) in jadwalSholatBulan"
        :key="index" :class="item.date.gregorian == date ? 'bg-SpringGreen-700' : '' ">
        <td class="text-center text-RaisinBlack-900">
          <t-dropdown
            variant="tooltip"
            toggle-on-hover
          >
            <span
              slot="trigger"
              class="text-RaisinBlack-900"
            >
              {{ item.date.gregorian }}
            </span>

            <template>
              <div class="text-center w-24">
                {{ item.date.hijri }}
              </div>
            </template>
          </t-dropdown>
        </td>
        <td v-for="(itemKey, index) in keyPray" :key="index" class="text-center text-RaisinBlack-900">{{ item.times[itemKey.en] }}</td>
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
    ]),
    ...mapState('menu', [
      'keyPray'
    ])
  }
}
</script>
