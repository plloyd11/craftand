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
              Attention-aligned insights, strategy, and message development
            </template>
            <template v-slot:content>
              In our hyperconnected world, attention is the currency that matters—and it’s constantly evolving. We focus on where the attention of your audience resides today, where it’s going, and how to transform attention into action.
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
              Eye-catching, thumb-stopping visuals and copy that speak your audience’s language drives action. We pride ourselves in an iterative, “non-precious” approach to creative that’s at home in social and mobile feeds, and values effectiveness above all else.
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
              Media plans have traditionally revolved around inputs—a 0:30 spot here, a 728x90 banner there. Ours begin with the outcomes. We clearly define what success looks like, and reverse engineer a media plan with that outcome as our north star.
            </template>
          </ApproachCard>
          <ApproachCard>
            <template v-slot:image>
              <Testing />
            </template>
            <template v-slot:heading>
              Hands-on, iterative collaboration and optimization
            </template>
            <template v-slot:content>
              Our deep, recurring partnerships are built on collaboration, with C&C acting as an extension of your team—bolstering capacity, testing, learning, and iterating together, and being responsive to real-time developments.
            </template>
          </ApproachCard>
        </div>
      </div>
    </section>
    <section class="max-w-4xl mx-auto mt-12 lg:mt-24">
      <div class="bg-main-gray">
        <p class="w-9/12 py-20 mx-auto text-4xl leading-normal text-center text-white">
          —and the result is this: <br> We connect meaningfully with audiences where their attention lives today, and inspire action at scale. 
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

<static-query>
  query {
    allCaseStudy {
      edges {
        node {
          title
          featured
          heading1
          body1
          photo
          path
        }
      }
    }
  }
</static-query>

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
      caseStudiesList: []
    }
  },
  mounted () {
    const allCaseStudies = this.$static.allCaseStudy.edges
    this.caseStudiesList = allCaseStudies.filter((c) => c.node.featured)
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
