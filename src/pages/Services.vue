<template>
  <Layout>
    <!-- Hero -->
    <section class="hero">
      <div class="container flex flex-col items-start px-6 py-12 mx-auto lg:py-16 lg:flex-row bg-main-gray-semi-transparent">
        <div class="mb-6 lg:mb-0 lg:w-8/12">
          <h2 class="mb-8 text-3xl font-extrabold text-center text-white lg:text-left lg:text-5xl proxima">
            All method, no madness.
          </h2>
          <p class="max-w-screen-sm mb-6 text-lg leading-normal text-white">
            At Craft & Commerce, we‘ve thrown out our cookie-cutters: instead, we take a broad view of the tools available, and calibrate to your desired outcome, tilting momentum toward even the most enigmatic goals.
          </p>
          <p class="max-w-screen-sm mb-6 text-lg leading-normal text-white">
            One of the ways we like to begin is by defining how we’ll measure success: is success a million downloads, or a dozen downloads by just the right people? Is it broad awareness, or do you need to gauge how people are reacting?
          </p>
          <p class="max-w-screen-sm mb-6 text-lg leading-normal text-white">
            How might you move the needle with the right method in hand?
          </p>
        </div>
        <div class="border-l-2 lg:w-4/12 border-primary-color">
          <h4 class="pl-4 mb-8 text-lg font-bold tracking-wider text-white uppercase din">
            Focus Areas
          </h4>
          <ul class="text-sm tracking-wider text-white uppercase din hero-list">
            <li class="pl-8">
              Non-Profits
            </li>
            <li>Advocacy Organizations</li>
            <li>Purpose-Driven Brands</li>
            <li>Foundations</li>
            <li>Educators</li>
            <li class="w-64">
              State, Local, and Regional Government Agencies and Planning Authorities
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Tearsheet -->
    <aside class="flex items-center justify-center">
      <g-link to="/">
        <div class="px-4 py-8 bg-main-gray">
          <TearSheet class="w-6 mx-auto mb-4" />
          <p class="w-32 text-sm text-center text-white uppercase din">
            Download <br> our services tearsheet
          </p>
        </div>
      </g-link>
    </aside>
    <!-- Services Carousel -->
    <section class="py-12 -my-24 services-carousel">
      <div class="flex items-center justify-center py-48">
        <ServicesCarousel />
      </div>
    </section>
    <!-- Callout -->
    <section class="container max-w-screen-lg px-6 mx-auto mt-24 right-stuff">
      <div class="flex flex-col items-center justify-center py-16">
        <p class="mb-8 tracking-wider uppercase din">
          The right stuff
        </p>
        <h2 class="mb-2 text-3xl font-extrabold text-center sm:text-5xl proxima">
          The C&amp;C Toolbox:
        </h2>
        <p class="max-w-screen-md mx-auto text-lg text-center">
          Media Planning & Buying • Campaign Dashboard Development • Creative Development • Copywriting • Message Development • Market Research
        </p>
      </div>
    </section>
    <!-- Quote -->
    <section class="container max-w-xl px-6 mx-auto mt-12 mb-12 text-center lg:mb-24">
      <div class="flex flex-col items-center justify-center pt-16">
        <p class="mb-8 text-xl leading-tight sm:text-4xl">
          <span class="block mb-2 sm:mb-4">"I’ve worked with a lot of media folks in my career.</span> The Craft & Commerce team is <br> the smartest and most effective I’ve ever run into.”
        </p>
        <p class="px-3 pt-2 tracking-wider uppercase din bg-primary-color">
          —Bright Pink
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
import TearSheet from '~/assets/img/icons/tearsheet.svg'
import ServicesCarousel from '~/components/ServicesCarousel.vue'

export default {
  metaInfo: {
    title: 'Services'
  },
  components: {
    TearSheet,
    ServicesCarousel
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: url('~@/assets/img/services/services-hero.jpg') no-repeat center center;
    background-size: cover;
    @media (min-width: 1024px) {
      height: 700px;
    }
  }

  .hero-list li {
    padding-left: 1rem;
    margin-bottom: 1.25rem;
  }

  .services-carousel {
    width: 100%;
    background: url('~@/assets/img/global/diagonal-bg.png') no-repeat center center;
    background-size: cover;
  }

  .right-stuff {
    width: 100%;
    background: url('~@/assets/img/global/gray-decorated-square.png') no-repeat center center;
    background-size: cover;
  }

</style>
