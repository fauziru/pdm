<template>
  <div id="carihadist" class="pt-3">
    <span class="text-3xl font-semibold text-OuterSpace-900 align-middle">Coming Soon</span>
    <!-- <input type="text" v-model="searchKey"/>
    <mybutton class="mt-3" @click="cariHadits(searchKey)" color="secondary">Cari <i class="fas fa-search ml-1 align-middle"></i></mybutton> -->
  </div>
</template>

<script>
import Wrapper from '../_partials/Wrapper'
import Card from '../_partials/Card'
import Loading from '../_partials/LoaderSpinner'
import Button from '../_partials/Button'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Wrapper,
    card: Card,
    loading: Loading,
    mybutton: Button
  },
  name: 'CariHadits',
  data () {
    return {
      searchKey: ''
    }
  },
  computed: {
    ...mapState('hadits', [
      'hadits'
    ])
  },
  methods: {
    ...mapActions('hadits', [
      'cariHadits'
    ])
  }
}
</script>
