<template>
  <Layout>
    <!-- Hero -->
    <section class="hero">
      <div class="container flex flex-col items-start px-6 py-12 mx-auto lg:py-16 lg:flex-row bg-main-gray-semi-transparent">
        <div class="mb-6 lg:mb-0 lg:w-8/12">
          <h2 class="mb-8 text-3xl font-extrabold leading-none text-left text-white md:text-center lg:text-left lg:text-5xl proxima">
            Leading-edge capabilities, <br> in-house mentality
          </h2>
          <p class="max-w-screen-sm mb-6 text-base leading-normal text-white">
            C&amp;C is a hands-on team of paid and digital media specialists. At our core, we turn the knobs and pull the levers that power campaign success.
          </p>
          <p class="max-w-screen-sm mb-6 text-base leading-normal text-white">
            But what’s mission critical in today’s dynamic, evolving media landscape isn’t just knowing how to push the buttons, it’s knowing when and why to push them, and which ones to push next.
          </p>
          <p class="max-w-screen-sm mb-6 text-base leading-normal text-white">
            That is what truly sets C&amp;C apart, and is the beating heart of the work that we do. We’re humbled that our clients have referred to us a “force multiplier”— not simply an agency resource, but a strategic thought partner and dot connector in navigating the modern marketing era.
          </p>
        </div>
        <div class="border-l-2 lg:w-4/12 border-primary-color">
          <h4 class="pl-4 mb-8 text-lg font-bold tracking-wider text-white uppercase din">
            WE PROUDLY SERVE:
          </h4>
          <ul class="text-sm tracking-wider text-white uppercase din hero-list">
            <li>Nonprofits</li>
            <li>Foundations</li>
            <li>Advocacy Organizations</li>
            <li>Purpose-Driven Brands</li>
            <li>Educational and Cultural Institutions</li>
            <li>Civic Agencies</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Tearsheet -->
    <aside class="flex items-center justify-center">
      <div class="px-4 py-8 bg-main-gray">
        <Tools class="w-6 mx-auto mb-4" />
        <p class="w-32 text-sm text-center text-white uppercase din">
          Our Toolbox
        </p>
      </div>
    </aside>
    <!-- Services Carousel -->
    <section class="py-12 -my-24 services-carousel">
      <div class="flex items-center justify-center py-48">
        <ServicesCarousel />
      </div>
    </section>
    <!-- Quote -->
    <section class="container max-w-xl px-6 mx-auto mt-12 mb-12 text-center lg:mb-24">
      <div class="flex flex-col items-center justify-center pt-16">
        <p class="mb-8 text-xl leading-tight sm:text-4xl">
          <span class="block mb-2 sm:mb-4">"I’ve worked with a lot of media folks in my career.</span> The Craft & Commerce team is <br> the smartest and most effective I’ve ever run into.”
        </p>
        <p class="px-3 tracking-wider uppercase din bg-primary-color">
          —Bright Pink
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
import Tools from '~/assets/img/icons/tools.svg'
import ServicesCarousel from '~/components/ServicesCarousel.vue'

export default {
  metaInfo: {
    name: 'Services',
    title: 'Our Services',
    meta: [
      { key: 'description', name: 'description', content: 'Craft & Commerce blends leading-edge paid and digital media capabilities with a collaborative, in-house partner mentality.' }
    ]
  },
  components: {
    Tools,
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
