<template>
  <div class="card shadow-lg border-gray-200 px-2 md:px-5 py-3 overflow-visible" :class="`${customClass} ${width || 'w-full'} ${height || 'h-auto'} ${bg || 'bg-Cultured-900'}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    customClass: String,
    height: String,
    width: String,
    bg: String
  }
}
</script>
