<template>
  <div id="navbar">
    <Wrapper customClass="-mt-10">
      <card customClass="rounded-xl">
        <div class="flex justify-center" v-if="!date">
          <loading/>
        </div>
        <div class="grid grid-rows-2 grid-flow-col" v-if="date">
          <div class="row-span-1 my-auto">
            <i class="fas fa-map-marker-alt fa-2x text-SpringGreen-900 mr-1 align-middle"></i>
            <span class="text-3xl font-semibold text-OuterSpace-900 align-middle">{{ city }}</span>
          </div>
          <div class="row-span-1 my-auto">
            <span class="text-lg text-OuterSpace-900 align-middle">{{ `${day}, ${date}` }}</span>
          </div>
          <div v-if="!isMobile" class="row-span-2 m-auto space-x-3">
            <router-link
              v-for="(item, index) in menuBottombar"
              :key="index"
              :to="item.link"
              class="hover:text-SpringGreen-900 text-OuterSpace-700"
            >{{ item.text }}</router-link>
          </div>
          <div class="text-6xl text-RaisinBlack-900 justify-self-end row-span-2 my-auto">
            {{ hour }}<span :class="sepStat ? 'text-SpringGreen-900' : 'text-Cultured-900' " >:</span>{{ minute }}
          </div>
        </div>
      </card>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from '../_partials/Wrapper'
import Card from '../_partials/Card'
import Loading from '../_partials/LoaderSpinner'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Wrapper,
    card: Card,
    loading: Loading
  },
  name: 'Navbar',
  data () {
    return {
      sepStat: 0
    }
  },
  computed: {
    ...mapState('ip', [
      'city',
      'date',
      'day',
      'hour',
      'minute'
    ]),
    ...mapState('menu', [
      'menuBottombar'
    ]),
    ...mapState('utl', [
      'isMobile'
    ])
  },
  mounted () {
    setInterval(this.getNow, 1000)
    setInterval(this.tes, 1000)
  },
  methods: {
    ...mapActions('ip', [
      'getNow'
    ]),
    ...mapActions('jadwalsholat', [
      'getDataJadwalsholat'
    ]),
    tes: function () {
      this.sepStat = !this.sepStat
    }
  }
}
</script>

<style scoped>
.router-link-active {
  @apply text-SpringGreen-1300;
}
</style>
