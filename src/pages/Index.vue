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
          <ApproachCard>
            <template v-slot:image>
              <Audience />
            </template>
            <template v-slot:heading>
              Audience-driven research, strategy and insights
            </template>
            <template v-slot:content>
              What makes your audience tick? Where are they, and what motivates them? Insights like these become your campaign’s North Star.
            </template>
          </ApproachCard>
          <ApproachCard>
            <template v-slot:image>
              <Creative />
            </template>
            <template v-slot:heading>
              Nimble, modern <br> creative
            </template>
            <template v-slot:content>
              Eye-catching, feed-stopping visuals and copy that speaks your audience’s language is what drives action: then iterate to improve on what works!
            </template>
          </ApproachCard>
          <ApproachCard>
            <template v-slot:image>
              <Innovative />
            </template>
            <template v-slot:heading>
              Innovative media planning and buying
            </template>
            <template v-slot:content>
              Creativity isn’t confined to art or copy — what sets a campaign up for success is how we mix and remix our palette of platforms, budget, and timing.
            </template>
          </ApproachCard>
          <ApproachCard>
            <template v-slot:image>
              <Testing />
            </template>
            <template v-slot:heading>
              Rigorous testing, iteration, and optimization
            </template>
            <template v-slot:content>
              There’s always room to learn and improve, even when our metrics are overperforming: testing and iterating brings our campaigns to new levels.
            </template>
          </ApproachCard>
        </div>
      </div>
    </section>
    <section class="max-w-4xl mx-auto mt-12 lg:mt-24">
      <div class="bg-main-gray">
        <p class="w-9/12 py-20 mx-auto text-4xl leading-normal text-center text-white">
          —and our mission is clear: <br> Craft & Commerce drives meaningful results for things that matter.
        </p>
      </div>
      <AsideBox :link="`/services`">
        <template v-slot:helperText>
          Our services <br> &amp; focus areas
        </template>
      </AsideBox>
    </section>
    <section class="container max-w-4xl mx-auto">
      <h3 class="text-xl uppercase din">
        Our recent work
      </h3>
      <CaseStudyList
        :case-studies-list="caseStudiesList"
      />
      <AsideBox :link="`/our-work`">
        <template v-slot:helperText>
          See more <br> projects
        </template>
      </AsideBox>
    </section>
    <LogoBox class="mt-16" />
  </Layout>
</template>

<script>
import ApproachCard from '@/components/homepage/ApproachCard.vue'
import AsideBox from '@/components/global/AsideBox.vue'
import CaseStudyList from '@/components/CaseStudyList.vue'
import LogoBox from '@/components/homepage/LogoBox.vue'
// SVG as imports
import Hero from '~/assets/img/homepage/hero.svg'
import Audience from '~/assets/img/homepage/audience.svg'
import Creative from '~/assets/img/homepage/creative.svg'
import Innovative from '~/assets/img/homepage/innovative.svg'
import Testing from '~/assets/img/homepage/testing.svg'

export default {
  components: {
    ApproachCard,
    AsideBox,
    CaseStudyList,
    LogoBox,
    Hero,
    Audience,
    Creative,
    Innovative,
    Testing

  },
  metaInfo: {
    title: 'Craft & Commerce | The Action Agency'
  },
  data () {
    return {
      // TODO: Return array of isFeatured = true items to display on homepage
      caseStudiesList: []
    }
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
