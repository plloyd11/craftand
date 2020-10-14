<template>
  <section
    class="flex flex-col items-center justify-center px-24 py-12 lg:py-24 sm:w-5/12 lg:w-4/12 bg-main-gray-faded"
  >
    <DollarsChange class="w-48 mx-auto mb-10" />
    <p class="w-64 mb-8 text-lg text-center text-white">
      Just for nonprofit marketers, our new, bimonthly email covers the
      intersection of modern advertising and doing good in the world.
    </p>
    <a
      href="https://mailchi.mp/craftand/dollars-and-change"
      class="px-1 py-1 text-sm leading-none uppercase bg-primary-color din"
      target="_blank"
    >
      Sign Up
      <RightArrow class="inline-block w-2 pb-1" />
    </a>
  </section>
</template>

<script>
import DollarsChange from '~/assets/img/icons/dollars-change.svg';
import RightArrow from '@/assets/img/icons/right-arrow.svg';

export default {
  components: {
    DollarsChange,
    RightArrow
  }
};
</script>

<style scoped>
.cls-1 {
  fill: #2bf9be;
}
.cls-2 {
  fill: #fff;
}
</style>
