<template>
  <div id="bottom bar">
    <div class="block bg-gray-100 border-t-2 border-gray-200 border-opacity-25 w-full text-center fixed bottom-0 h-14 shadow inset-x-0 z-10">
      <div class="flex justify-between">
        <item-bottombar
          v-for="(item, index) in menuBottombar"
          :key="index"
          :icon="item.icon"
          :link="item.link"
          :text="item.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Buttonbottombar from '../_partials/Buttonbottombar'

export default {
  components: {
    'item-bottombar': Buttonbottombar
  },
  computed: {
    ...mapState('menu', [
      'menuBottombar',
      'tes'
    ])
  }
}
</script>

<style scoped>
  .router-link-exact-active, .router-link-active {
    @apply text-SpringGreen-1300;
  }
  a {
    -webkit-tap-highlight-color: rgba(0, 128, 0, 0.157)!important;
  }
</style>
