<template>
  <section class="container px-6 mx-auto">
    <div class="flex flex-col items-center justify-center mb-6 sm:flex-row case-study sm:mb-0">
      <div class="flex-1 case-study--image">
        <g-image
          src="~/assets/img/case-studies/carton-hero.png"
          class="mb-1"
        />
      </div>
      <div class="flex-1 sm:pl-20 case-study--text">
        <h4 class="font-semibold text-gray-700 uppercase text-md din">
          Carton Council
        </h4>
        <h2 class="max-w-sm my-4 text-4xl font-extrabold leading-none proxima">
          Reimagine recycling education
        </h2>
        <p class="max-w-sm mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat aut, iste accusamus eveniet labore. Cupiditate beatae laboriosam autem voluptatibus nam ea velit voluptate? Vitae praesentium facilis doloremque provident saepe.
        </p>
        <g-link
          to="/carton-council"
          class="px-1 pt-1 text-sm uppercase bg-primary-color din"
        >
          Read on
          <RightArrow class="inline-block w-2 pb-1" />
        </g-link>
      </div>
    </div>
    <!-- opposite facing item, will be removed once templating is setup -->
    <div class="flex flex-col items-center justify-center sm:flex-row case-study">
      <div class="flex-1 order-2 sm:order-1 sm:pl-20 case-study--text">
        <h4 class="font-semibold text-gray-700 uppercase text-md din">
          Bright Pink
        </h4>
        <h2 class="max-w-sm my-4 text-4xl font-extrabold leading-none proxima">
          Reach young, black women with prevention info
        </h2>
        <p class="max-w-sm mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat aut, iste accusamus eveniet labore. Cupiditate beatae laboriosam autem voluptatibus nam ea velit voluptate? Vitae praesentium facilis doloremque provident saepe.
        </p>
        <g-link
          to="/carton-council"
          class="px-1 pt-1 text-sm uppercase bg-primary-color din"
        >
          Read on
          <RightArrow class="inline-block w-2 pb-1" />
        </g-link>
      </div>
      <div class="flex-1 order-1 sm:order-2 case-study--image">
        <g-image
          src="~/assets/img/case-studies/bright-pink-hero.png"
          class="mb-1"
        />
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
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
