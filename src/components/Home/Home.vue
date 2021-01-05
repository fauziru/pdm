<template>
  <div id="home" class="mt-5">
    <tabs>
      <tab
        v-for="(item, index) in items"
        :key="item.id"
        :name="item.name"
        :selected="index == 0"
      >
        <card customClass="rounded-b-xl mt-0.5">
          <span class="text-2xl">{{ item.name }}</span>
            <keep-alive>
              <component :is="item.component" :key="item.id"></component>
            </keep-alive>
        </card>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '../_partials/Tab'
import Tabs from '../_partials/Tabs'
import Loader from '../_partials/LoaderSpinner'
import Card from '../_partials/Card'
import JadwalSholat from './JadwalSholat'
import CariHadits from './CariHadits'
import Dzikir from './Dzikir'

export default {
  components: {
    tab: Tab,
    tabs: Tabs,
    loader: Loader,
    card: Card
  },
  name: 'Home',
  data () {
    return {
      items: [
        {id: 1, name: 'Jadwal Sholat', component: JadwalSholat},
        {id: 2, name: 'Penghitung Dzikir', component: Dzikir},
        {id: 3, name: 'Cari Hadits', component: CariHadits}
      ]
    }
  }
}
</script>
