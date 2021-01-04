<template>
  <div id="dzikir" class="pt-3">
    <select class="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-SpringGreen-700 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed" v-model="dzikirVal" @input="change()">
      <option value="0">Subhaanallaah</option>
      <option value="1">Alhamdulillaah</option>
      <option value="2">Laa ilaaha illallaah</option>
      <option value="3">Allaahu akbar</option>
      <option value="4">La haula wa laa quwwata illaa billaah</option>
    </select>
    <card customClass="rounded-xl mx-auto mt-3" width="md:w-3/5" bg="bg-gradient-to-tl from-Cultured-1000 via-Cultured-900 to-Cultured-900">
      <div class="grid justify-center">
        <i class="fas fa-stopwatch fa-2x text-SpringGreen-900 mr-1 align-middle text-center"></i>
        <div class="text-center">
          <span class="text-6xl text-RaisinBlack-900 align-middle">{{ counter }}</span>
          <span class="text-3xl text-SpringGreen-900 align-bottom animate-pulse">x</span>
        </div>
        <span class="text-4xl text-OuterSpace-900 self-center" style="direction: rtl">{{ dzikirArr[dzikirVal] }}</span>
      </div>
    </card>
    <div class="md:w-3/5 mx-auto mt-3">
      <mybutton @click="hitung()" color="primary">Hitung</mybutton>
    </div>
  </div>
</template>

<script>
import Card from '../_partials/Card'
import Button from '../_partials/Button'

export default {
  components: {
    card: Card,
    mybutton: Button
  },
  data () {
    return {
      counter: 0,
      dzikirVal: 0,
      dzikirStr: '',
      dzikirArr: [
        'سبحان الله',
        'الحمد لله',
        'لا إله إلا الله',
        'الله أكبر',
        'لا حول ولا قوة إلا بالله العلي العظيم'
      ]
    }
  },
  name: 'Dzikir',
  methods: {
    hitung: function () {
      this.counter++
    },
    change: function () {
      console.log(this.dzikirVal)
      this.counter = 0
    }
  }
}
</script>
