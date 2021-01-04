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

export default {
  components: {
    Navbar,
    Content,
    Footer
  },
  name: 'App'
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
