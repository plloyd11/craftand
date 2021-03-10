<template>
  <section class="py-8 mt-24 bg-gray-200">
    <div class="container flex justify-between mx-auto">
      <button class="focus:outline-none">
        <g-link
          v-if="next"
          :to="next"
          class="flex items-center pr-4 text-sm uppercase lg:pl-12 din"
        >
          <LeftArrow class="w-3 pb-1 mr-1" />
          Back
        </g-link>
        <p
          v-else
          class="flex items-center pr-4 text-sm uppercase cursor-not-allowed lg:pl-12 din"
        >
          Start of case studies
        </p>
      </button>
      <button class="focus:outline-none">
        <g-link
          v-if="prev"
          :to="prev"
          class="flex items-center pr-4 text-sm uppercase lg:pr-12 din"
        >
          Next
          <RightArrow class="w-3 pb-1 ml-1" />
        </g-link>
        <p
          v-else
          class="flex items-center pr-4 text-sm uppercase cursor-not-allowed lg:pr-12 din"
        >
          End of case studies
        </p>
      </button>
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
  },
  props: {
    next: {
      type: String,
      default: null
    },
    prev: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss"></style>
