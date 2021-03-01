<template>
  <div id="puasa" class="mt-5">
    <card>
      <CS />
      <div class="px-5 md:px-0">
        <card
          customClass="rounded-xl mx-auto mt-3 border-gray-100 border-t-2 border-solid"
          width="md:w-3/5"
          bg="bg-gradient-to-tl from-Cultured-1000 via-Cultured-900 to-Cultured-900"
        >
          <div class="grid justify-center">
            <div class="text-center">
              <i
                class="fas fa-star-and-crescent fa-4x text-SpringGreen-700 mr-1"
              ></i>
              <span class="text-6xl text-RaisinBlack-900 align-top">{{ ramadhan }}</span>
            </div>
            <span class="text-xl text-OuterSpace-900">
              <span class="text-SpringGreen-1300 font-bold">{{ ramadhan == 1 ? 'Besok' : 'Hari' }}</span>
              Menuju
              <span class="text-SpringGreen-1300 font-bold">Bulan Ramadhan</span>
            </span>
          </div>
        </card>
      </div>
    </card>
  </div>
</template>

<script>
import Card from './_partials/Card'
import CS from './ComingSoon'

export default {
  components: {
    card: Card,
    CS
  },
  data () {
    return {
      ramadhan: this.daysTogo()
    }
  },
  methods: {
    daysTogo: function () {
      let dayTo = new Date(2021, 3, 12)
      let today = new Date()
      console.log('days to go', dayTo, today)
      return Math.round((dayTo - today) / (1000 * 60 * 60 * 24))
    }
  }
}
</script>

<style scoped>
</style>
