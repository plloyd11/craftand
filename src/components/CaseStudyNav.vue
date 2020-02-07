<template>
  <section class="py-8 mt-24 bg-gray-200">
    <div class="container flex justify-between mx-auto">
      <g-link to="/" class="flex items-center pl-4 text-sm uppercase lg:pl-12 din">
        <LeftArrow class="w-3 pb-1 mr-1"/>
        Back
      </g-link>
      <g-link to="/" class="flex items-center pr-4 text-sm uppercase lg:pr-12 din">
        Next
        <RightArrow class="w-3 pb-1 ml-1"/>
      </g-link>
    </div>
  </section>
</template>

<script>
import LeftArrow from '@/assets/img/icons/left-arrow.svg'
import RightArrow from '@/assets/img/icons/right-arrow.svg'

export default {
  components: {
    LeftArrow,
    RightArrow
  }
}

</script>

<style lang="scss">

</style>
