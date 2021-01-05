<template>
  <div id="jadwalsholat" class="pt-3">
    <div class="flex justify-center" v-if="!date">
      <loading/>
    </div>
    <tabs v-if="date">
      <tab
        v-for="(item, index) in items"
        :key="item.id"
        :name="item.name"
        :selected="index == 0"
      >
        <card customClass="rounded-b-xl mt-0.5 overflow-auto">
          <keep-alive>
            <component :is="item.component" :key="item.id"></component>
          </keep-alive>
        </card>
      </tab>
    </tabs>
  </div>
</template>

<script>
import tab from '../_partials/Tab'
import tabs from '../_partials/Tabs'
import card from '../_partials/Card'
import JadwalHariIni from './JadwalSholat/JadwalHariIni'
import JadwalBulanIni from './JadwalSholat/JadwalBulanIni'
import loading from '../_partials/LoaderSpinner'
import { mapState } from 'vuex'

export default {
  components: {
    card,
    tab,
    tabs,
    loading
  },
  name: 'CariHadits',
  data () {
    return {
      items: [
        {id: 1, name: 'Hari ini', component: JadwalHariIni},
        {id: 2, name: 'Bulan Ini', component: JadwalBulanIni}
      ]
    }
  },
  computed: {
    ...mapState('jadwalsholat', [
      'jadwalSholatHari'
    ]),
    ...mapState('ip', [
      'date'
    ])
  }
}
</script>
