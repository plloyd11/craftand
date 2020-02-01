<template>
  <section class="container px-6 mx-auto">
    <div class="flex items-center justify-center case-study">
      <div class="flex-1 case-study--image">
        <g-image
          src="~/assets/img/case-studies/carton-hero.png"
          class="mb-1"
        />
      </div>
      <div class="flex-1 pl-20 case-study--text">
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
