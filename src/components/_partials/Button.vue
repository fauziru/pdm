<template>
  <button class="rounded-full shadow-md font-normal" :class="`${scheme} ${width || 'w-full'} ${height || 'h-10'}`" @click="$emit('click')"><slot></slot></button>
</template>

<script>
export default {
  props: {
    color: String,
    width: String,
    height: String
  },
  data () {
    return {
      scheme: this.pickColor(this.color)
    }
  },
  methods: {
    pickColor: function (color) {
      switch (color) {
        case 'primary':
          color = 'bg-gradient-to-br from-OuterSpace-900 via-OuterSpace-900 to-RaisinBlack-900 text-white hover:text-OuterSpace-900 hover:bg-gradient-to-br hover:from-SpringGreen-900 hover:via-SpringGreen-900 hover:to-SpringGreen-1100 focus:bg-SpringGreen-1100'
          break
        case 'secondary':
          color = 'border-t-2 border-solid border-gray-200 bg-gradient-to-tl from-Cultured-1000 via-Cultured-900 to-Cultured-900 text-RaisinBlack-900 hover:text-white hover:bg-gradient-to-br hover:from-OuterSpace-900 hover:via-OuterSpace-900 hover:to-RaisinBlack-900 focus:bg-SpringGreen-1100'
          break
        default:
          break
      }
      return color
    }
  }
}
</script>
