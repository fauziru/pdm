<template>
  <div class="w-full max-w-screen-lg mx-auto px-2" :class="customClass"><!-- Wrapper -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    customClass: String
  }
}
</script>
