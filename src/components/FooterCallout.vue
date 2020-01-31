<template>
  <section class="flex flex-col items-center justify-center w-4/12 px-24 py-24 bg-main-gray-faded">
    <Calendar class="w-20 mb-12" />
    <p class="w-48 mb-8 text-lg text-center text-white">
      Join us November 15 and 16, 2019 at Digital Media Fest in Chicago. We’ll be the ones with the lorem ipsum.
    </p>
    <g-link
      to="/carton-council"
      class="px-1 pt-1 text-sm leading-none uppercase bg-primary-color din"
    >
      Link
      <RightArrow class="inline-block w-2 pb-1" />
    </g-link>
  </section>
</template>

<script>
import Calendar from '~/assets/img/homepage/calendar.svg'
import RightArrow from '@/assets/img/icons/right-arrow.svg'

export default {
  components: {
    Calendar,
    RightArrow
  }
}
</script>

<style>

</style>
