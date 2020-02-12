<template>
  <section class="flex flex-col items-center justify-center px-24 py-12 lg:py-24 sm:w-4/12 bg-main-gray-faded">
    <Podcast class="mx-auto mb-12" />
    <p class="w-56 mb-8 text-lg text-center text-white">
      Mark and Jordan talk Republicans’ vs. Democrats’ online savvy in this recent Dastardly Cleverness podcast
    </p>
    <a
      href="https://dastardlycleverness.com/barker-ruden"
      class="px-1 pt-1 text-sm leading-none uppercase bg-primary-color din"
      target="_blank"
    >
      Link
      <RightArrow class="inline-block w-2 pb-1" />
    </a>
  </section>
</template>

<script>
import Podcast from '~/assets/img/icons/podcast.svg'
import RightArrow from '@/assets/img/icons/right-arrow.svg'

export default {
  components: {
    Podcast,
    RightArrow
  }
}
</script>

<style>

</style>
