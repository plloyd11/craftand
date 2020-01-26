<template>
  <section class="flex flex-col items-center justify-center w-4/12 px-24 py-32 bg-main-gray-faded">
    <Calendar class="w-24 mb-12" />
    <p class="w-56 mb-8 text-lg text-center text-white">
      Join us November 15 and 16, 2019 at Digital Media Fest in Chicago. We’ll be the ones with the lorem ipsum.
    </p>
    <a
      href="#"
      class="inline-block mx-auto text-center bg-primary-color"
    >I'm a link</a>
  </section>
</template>

<script>
import Calendar from '~/img/homepage/calendar.svg'

export default {
  components: {
    Calendar
  }
}
</script>

<style>

</style>
