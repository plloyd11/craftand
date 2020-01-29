<template>
  <Layout>
    <section class="container py-24 mx-auto bg-light-gray">
      <Hero
        class="w-7/12 mx-auto"
        alt="Hero Image"
      />
      <h1
        class="mt-12 mb-4 text-5xl font-extrabold text-center"
      >
        The attention landscape is always in flux.
      </h1>
      <p class="w-7/12 mx-auto text-xl text-center">
        Rather than be ruled by the tides, C&C evolved as a team of no-nonsense, outcomes-focused digital specialists, re-inventing how our purpose-driven partners capture attention, change behavior, and inspire action in this dynamic digital world— a landscape filled with untapped opportunity.
      </p>
    </section>
    <section class="mt-12 lg:mt-24">
      <h2 class="text-xl text-center">
        OUR APPROACH BOILS DOWN TO THIS —
      </h2>
      <div class="container relative mx-auto mt-12 approach-grid">
        <div class="approach-card">
          <div class="max-w-md overflow-hidden">
            <div>
              <Audience />
            </div>
            <div class="px-6 py-4">
              <h4 class="text-3xl font-bold leading-none text-center text-header-color proxima">
                Audience-driven research, strategy and insights
              </h4>
              <hr class="block w-1/12 mx-auto my-4">
              <p class="text-lg text-center text-gray-700">
                What makes your audience tick? Where are they, and what motivates them? Insights like these become your campaign’s North Star.
              </p>
            </div>
          </div>
        </div>
        <div class="approach-card">
          <div class="max-w-md overflow-hidden">
            <div>
              <Creative />
            </div>
            <div class="px-6 py-4">
              <h4 class="text-3xl font-bold leading-none text-center text-header-color proxima">
                Nimble, modern <br> creative
              </h4>
              <hr class="block w-1/12 mx-auto my-4">
              <p class="text-lg text-center text-gray-700">
                Eye-catching, feed-stopping visuals and copy that speaks your audience’s language is what drives action: then iterate to improve on what works!
              </p>
            </div>
          </div>
        </div>
        <div id="test" />
        <div class="approach-card">
          <div class="max-w-md overflow-hidden">
            <div>
              <Innovative />
            </div>
            <div class="px-6 py-4">
              <h4 class="text-3xl font-bold leading-none text-center text-header-color proxima">
                Innovative media planning and buying
              </h4>
              <hr class="block w-1/12 mx-auto my-4">
              <p class="text-lg text-center text-gray-700">
                Creativity isn’t confined to art or copy — what sets a campaign up for success is how we mix and remix our palette of platforms, budget, and timing.
              </p>
            </div>
          </div>
        </div>
        <div class="approach-card">
          <div class="max-w-md overflow-hidden">
            <div>
              <Testing />
            </div>
            <div class="px-6 py-4">
              <h4 class="text-3xl font-bold leading-none text-center text-header-color proxima">
                Rigorous testing, iteration, and optimization
              </h4>
              <hr class="block w-1/12 mx-auto my-4">
              <p class="text-lg text-center text-gray-700">
                There’s always room to learn and improve, even when our metrics are overperforming: testing and iterating brings our campaigns to new levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="max-w-4xl mx-auto mt-12 lg:mt-24">
      <div class="bg-main-gray">
        <p class="w-9/12 py-20 mx-auto text-4xl leading-normal text-center text-white">
          —and our mission is clear: <br>Craft & Commerce drives meaningful results for things that matter.
        </p>
      </div>
      <aside class="flex items-center justify-end">
        <g-link to="/">
          <div class="px-4 py-8 bg-primary-color">
            <TearSheet class="w-8 mx-auto mb-4" />
            <p class="w-32 text-sm text-center text-white uppercase din">
              Our services &amp; focus areas
            </p>
          </div>
        </g-link>
      </aside>
    </section>
    <LogoBox class="mt-16" />
  </Layout>
</template>

<script>
import LogoBox from '@/components/LogoBox.vue'
// SVG as imports
import Hero from '~/img/homepage/hero.svg'
import Audience from '~/img/homepage/audience.svg'
import Creative from '~/img/homepage/creative.svg'
import Innovative from '~/img/homepage/innovative.svg'
import Testing from '~/img/homepage/testing.svg'

export default {
  components: {
    LogoBox,
    Hero,
    Audience,
    Creative,
    Innovative,
    Testing
  },
  metaInfo: {
    title: 'Craft & Commerce | The Action Agency'
  }
}
</script>

<style scoped>
  .approach-grid {
    display: grid;
    gap: 64px;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }

  .approach-card {
    align-self: center;
    justify-self: center;
  }

  .approach-card svg {
    max-width: 325px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
  }

  #test {
    position: absolute;
    width: 100%;
    height: 550px;
    top: calc(50% - 27ch);
    background: url('~@/img/global/diagonal-bg.png') no-repeat center center;
    background-size: cover;
    z-index: -1;
  }

</style>
