<template>
  <section class="container px-6 mx-auto">
    <div
      v-for="(caseStudy, index) in caseStudiesList"
      :key="index"
      class="flex flex-col items-center justify-center mb-6 sm:flex-row case-study sm:mb-0"
    >
      <div class="flex-1 case-study--image">
        <g-image
          :src="caseStudy.node.photo"
          class="mb-1"
        />
      </div>
      <div class="flex-1 sm:pl-20 case-study--text">
        <h4 class="font-semibold text-gray-700 uppercase text-md din">
          {{ caseStudy.node.name }}
        </h4>
        <h2 class="max-w-sm my-4 text-4xl font-extrabold leading-none proxima">
          {{ caseStudy.node.title }}
        </h2>
        <p class="max-w-sm mb-8">
          {{ caseStudy.node.introduction }}
        </p>
        <g-link
          :to="caseStudy.node.path"
          class="px-1 pt-1 text-sm uppercase bg-primary-color din"
        >
          Read on
          <RightArrow class="inline-block w-2 pb-1" />
        </g-link>
      </div>
    </div>
  </section>
</template>

<script>
import RightArrow from '@/assets/img/icons/right-arrow.svg'

export default {
  components: {
    RightArrow
  },
  props: {
    caseStudiesList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
