<template>
  <div class="loader ease-linear" :class="`${customClass} ${height || 'h-12'} ${width || 'w-12'}`"></div>
</template>

<script>
export default {
  props: {
    customClass: String,
    height: String,
    width: String
  }
}
</script>

<style scoped>
.loader {
  border: 2px double #5c9aad;
  border-radius: 50%;
  border-top: 2px solid #30545f;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
