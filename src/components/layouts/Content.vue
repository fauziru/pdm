<template>
  <div id="content">
    <Wrapper>
      <slot></slot>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from '../_partials/Wrapper'

export default {
  components: {
    Wrapper
  },
  name: 'Content'
}
</script>

<style>
  #content{
    min-height:calc(100vh - 27.75rem);
  }
</style>
