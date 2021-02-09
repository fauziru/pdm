<template>
  <div id="footer">
    <div class="bg-wave-sm md:bg-wave h-64"></div>
    <Wrapper customClass="z-50">
      <div class="rounded-t-lg -mt-32 bg-gradient-to-br from-OuterSpace-900 via-OuterSpace-900 to-RaisinBlack-900 shadow-lg py-3 px-2 md:px-5 cheight">
        <p class="text-Cultured-900">&copy; {{ year }}. Padjadjaran Master Developer</p>
      </div>
    </Wrapper>
  </div>
</template>

<script>
import Card from '../_partials/Card'
import Wrapper from '../_partials/Wrapper'

export default {
  components: {
    Wrapper,
    card: Card
  },
  data () {
    return {
      data: console.log('@/assets/images/wave.svg'),
      year: new Date().getFullYear()
    }
  },
  name: 'Footer'
}
</script>

<style scoped>
  .bg-wave {
    background-image: url('~@/assets/images/wave.svg');
  }
  .cheight{
    height: 128px;
  }
</style>
