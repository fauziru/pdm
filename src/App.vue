<template>
  <div id="app">
    <Navbar/>
    <Content>
      <transition name="fade">
        <router-view/>
      </transition>
    </Content>
    <Footer/>
    <BottomBar v-if="isMobile"/>
  </div>
</template>

<script>
import Navbar from './components/layouts/Navbar'
import Content from './components/layouts/Content'
import Footer from './components/layouts/Footer'
import BottomBar from './components/layouts/Bottombar'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  components: {
    Navbar,
    Content,
    Footer,
    BottomBar
  },
  name: 'App',
  beforeCreate () {
    console.log('app before create')
  },
  created () {
    console.log('app created')
    this.getIP().then(response => {
      if (response === 200) {
        this.getDataJadwalsholat().then(response => {
          if (response === 200) {
            this.setDataSholatHari()
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }).catch(error => {
      console.log(error)
    })
  },
  computed: {
    ...mapState('utl', [
      'isMobile'
    ])
  },
  beforeDestroy () {
    if (typeof window === 'undefined') {
      return window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    ...mapActions('ip', [
      'getIP'
    ]),
    ...mapActions('jadwalsholat', [
      'getDataJadwalsholat',
      'setDataSholatHari'
    ]),
    ...mapMutations('utl', [
      'setIsmobile'
    ]),
    onResize () {
      this.setIsmobile(window.innerWidth < 600)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Assistant', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.slither-enter-active, .slither-leave-active {
  transition: transform 0.3s;
}
.slither-enter, .slither-leave-to {
  transform: translateX(-100%);
}
.slither-enter-to, .slither-leave {
  transform: translateX(0);
}

.fade-enter-active {
  @apply transition ease-out duration-300 transform opacity-0 scale-95;
}
.fade-enter-to {
  @apply transform opacity-100 scale-100;
}
.fade-leave {
  @apply transition ease-in transform opacity-100 scale-100;
}
.fade-leave-to {
  @apply transform opacity-0 scale-95 duration-75;
}
</style>
