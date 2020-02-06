<template>
  <Layout>
    <section class="container px-6 py-24 mx-auto bg-light-gray">
      <Hero
        class="w-11/12 mx-auto sm:w-7/12"
        alt="Hero Image"
      />
      <h1
        class="mt-12 mb-4 text-3xl font-extrabold leading-tight text-center sm:text-5xl proxima"
      >
        The attention landscape is <span class="text-strike">always</span> in flux.
      </h1>
      <p class="w-full mx-auto text-center sm:w-7/12 text-md sm:text-xl">
        Rather than be ruled by the tides, C&C evolved as a team of no-nonsense, outcomes-focused digital specialists, re-inventing how our purpose-driven partners capture attention, change behavior, and inspire action in this dynamic digital world— a landscape filled with untapped opportunity.
      </p>
    </section>
    <section class="mt-12 lg:mt-24">
      <h2 class="text-xl text-center din">
        OUR APPROACH BOILS DOWN TO THIS —
      </h2>
      <div
        id="test"
        class="relative mt-12"
      >
        <div class="container px-6 mx-auto approach-grid">
          <div class="approach-card">
            <div class="max-w-md overflow-hidden">
              <div>
                <Audience />
              </div>
              <div class="px-6 py-4">
                <h4 class="text-3xl font-bold leading-none text-center text-header-color proxima">
                  Audience-driven research, strategy and insights
                </h4>
                <hr class="block w-1/12 mx-auto my-6 border-2 border-gray-800">
                <p class="text-lg text-center text-gray-800">
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
                <hr class="block w-1/12 mx-auto my-6 border-2 border-gray-800">
                <p class="text-lg text-center text-gray-800">
                  Eye-catching, feed-stopping visuals and copy that speaks your audience’s language is what drives action: then iterate to improve on what works!
                </p>
              </div>
            </div>
          </div>
          <div class="approach-card">
            <div class="max-w-md overflow-hidden">
              <div>
                <Innovative />
              </div>
              <div class="px-6 py-4">
                <h4 class="text-3xl font-bold leading-none text-center text-header-color proxima">
                  Innovative media planning and buying
                </h4>
                <hr class="block w-1/12 mx-auto my-6 border-2 border-gray-800">
                <p class="text-lg text-center text-gray-800">
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
                <hr class="block w-1/12 mx-auto my-6 border-2 border-gray-800">
                <p class="text-lg text-center text-gray-800">
                  There’s always room to learn and improve, even when our metrics are overperforming: testing and iterating brings our campaigns to new levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="max-w-4xl mx-auto mt-12 lg:mt-24">
      <div class="bg-main-gray">
        <p class="w-9/12 py-20 mx-auto text-4xl leading-normal text-center text-white">
          —and our mission is clear: <br> Craft & Commerce drives meaningful results for things that matter.
        </p>
      </div>
      <aside class="flex items-center justify-end">
        <g-link to="/services">
          <div class="px-4 py-6 bg-primary-color">
            <Add class="mx-auto mb-6" />
            <p class="w-24 text-xs text-center uppercase din">
              Our services <br> &amp; focus areas
            </p>
          </div>
        </g-link>
      </aside>
    </section>
    <section class="container max-w-4xl mx-auto">
      <h3 class="text-xl uppercase din">
        Our recent work
      </h3>
      <CaseStudyList />
      <aside class="flex items-center justify-end">
        <g-link to="/our-work">
          <div class="px-4 py-6 bg-primary-color">
            <Add class="mx-auto mb-6" />
            <p class="w-24 text-xs text-center uppercase din">
              See more <br> projects
            </p>
          </div>
        </g-link>
      </aside>
    </section>
    <LogoBox class="mt-16" />
  </Layout>
</template>

<script>
import CaseStudyList from '@/components/CaseStudyList.vue'
import LogoBox from '@/components/LogoBox.vue'
// SVG as imports
import Hero from '~/assets/img/homepage/hero.svg'
import Audience from '~/assets/img/homepage/audience.svg'
import Creative from '~/assets/img/homepage/creative.svg'
import Innovative from '~/assets/img/homepage/innovative.svg'
import Testing from '~/assets/img/homepage/testing.svg'
import Add from '~/assets/img/icons/add.svg'

export default {
  components: {
    CaseStudyList,
    LogoBox,
    Hero,
    Audience,
    Creative,
    Innovative,
    Testing,
    Add
  },
  metaInfo: {
    title: 'Craft & Commerce | The Action Agency'
  }
}
</script>

<style lang="scss" scoped>
  .approach-grid {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      display: grid;
      gap: 48px;
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }
  }

  .approach-card {
    align-self: center;
    justify-self: center;
    z-index: 100;
    svg {
      max-width: 325px;
      height: 250px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  #test {
    @media (min-width: 1280px) {
      background: url('~@/assets/img/global/diagonal-bg-plus.png') no-repeat center center;
      background-size: contain;
    }
  }

</style>
