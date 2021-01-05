<template>
  <div id="app">
      <Navbar/>
    <Content>
      <router-view/>
    </Content>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/layouts/Navbar'
import Content from './components/layouts/Content'
import Footer from './components/layouts/Footer'
import { mapActions } from 'vuex'

export default {
  components: {
    Navbar,
    Content,
    Footer
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
  methods: {
    ...mapActions('ip', [
      'getIP'
    ]),
    ...mapActions('jadwalsholat', [
      'getDataJadwalsholat',
      'setDataSholatHari'
    ])
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
</style>
