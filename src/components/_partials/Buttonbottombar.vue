<template>
  <router-link :to="link" class="w-full text-gray-500 justify-center inline-block text-center pt-2 pb-1">
    <i v-if="icon" class="fas fa-lg inline-block mb-1" :class="icon" />
    <span class="block text-xs">{{ text }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'notext'
    },
    link: {
      type: String,
      default: '#'
    }
  }
}
</script>
