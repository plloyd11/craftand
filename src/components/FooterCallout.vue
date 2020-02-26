<template>
  <section class="flex flex-col items-center justify-center px-24 py-12 lg:py-24 sm:w-4/12 bg-main-gray-faded">
    <Interview class="w-24 mx-auto mb-12" />
    <p class="w-64 mb-8 text-lg text-center text-white">
      Campaign US interviews Mark and Jordan about their "purposeful" approach to life and work, out of which C&C was born.
    </p>
    <a
      href="https://www.campaignlive.com/article/why-craft-commerce-seeks-work-meaning/1673611"
      class="px-1 py-1 text-sm leading-none uppercase bg-primary-color din"
      target="_blank"
    >
      Link
      <RightArrow class="inline-block w-2 pb-1" />
    </a>
  </section>
</template>

<script>
import Interview from '~/assets/img/icons/interview.svg'
import RightArrow from '@/assets/img/icons/right-arrow.svg'

export default {
  components: {
    Interview,
    RightArrow
  }
}
</script>

<style>

</style>
