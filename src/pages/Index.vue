<template>
  <Layout>
    <section class="container px-6 py-24 mx-auto bg-light-gray">
      <h1
        class="max-w-5xl px-6 mx-auto mb-12 text-3xl font-extrabold text-center md:px-12 sm:text-6xl proxima"
      >
        <span class="text-strike">Our mission</span> is to more effectively harness paid media to advance <span class="text-strike">your mission.</span>
      </h1>
      <p class="w-full mx-auto text-center sm:w-7/12 text-md sm:text-xl">
        Craft &amp; Commerce is the only agency that’s dedicated to helping mission-driven organizations thrive in today’s complex, fast-evolving marketplace for attention. Our hands-on team delivers better, smarter paid media strategies that empower nonprofits, foundations, public sector organizations, and purposeful brands to amplify their storytelling and drive real-world results.
      </p>
    </section>
    <section class="mt-12 lg:mt-24">
      <h2 class="text-base tracking-wider text-center sm:text-xl din">
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
              Attention-aligned insight and strategy
            </template>
            <template v-slot:content>
              In our hyperconnected world, attention is the currency that matters—and it’s constantly evolving. We focus on where the attention of your audience resides today, where it’s going, and how to transform attention into action.
            </template>
          </ApproachCard>
          <ApproachCard>
            <template v-slot:image>
              <Innovative />
            </template>
            <template v-slot:heading>
              Innovative media <br> planning and buying
            </template>
            <template v-slot:content>
              Media plans have traditionally revolved around inputs—a 0:30 spot here, a 728x90 banner there. Ours begin with the outcomes. We clearly define what success looks like, and reverse engineer a media plan with that outcome as our North Star.
            </template>
          </ApproachCard>
          <ApproachCard>
            <template v-slot:image>
              <Testing />
            </template>
            <template v-slot:heading>
              Hands-on collaboration and optimization
            </template>
            <template v-slot:content>
              Our deep, recurring partnerships are built upon C&C serving not as a vendor, but a “force multiplier” for your team—bolstering capacity, testing, learning, and iterating together, and being responsive to real-time developments.
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
              Since the dawn of the agency, creative has been an art project, with awards the primary barometer of success. We pride ourselves in an iterative, “non-precious” approach to creative that values effectiveness above all else.
            </template>
          </ApproachCard>
        </div>
      </div>
    </section>
    <section class="max-w-4xl mx-auto mt-12 lg:mt-24">
      <div class="bg-main-gray">
        <p class="w-9/12 py-8 mx-auto text-xl leading-normal text-center text-white sm:py-20 sm:text-4xl">
          —and the result is this: <br> We connect meaningfully with audiences where their attention lives today, and inspire action at scale.
        </p>
      </div>
      <AsideBox :link="`/services`">
        <template v-slot:helperText>
          Our services <br> &amp; focus areas
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
          client
          featured
          headline
          campaignDescription
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
import LogoBox from '@/components/homepage/LogoBox.vue'
// SVG as imports
import Audience from '~/assets/img/homepage/audience.svg'
import Creative from '~/assets/img/homepage/creative.svg'
import Innovative from '~/assets/img/homepage/innovative.svg'
import Testing from '~/assets/img/homepage/testing.svg'

export default {
  components: {
    ApproachCard,
    AsideBox,
    LogoBox,
    Audience,
    Creative,
    Innovative,
    Testing

  },
  metaInfo: {
    title: 'Better Results, For Things That Matter',
    meta: [
      { name: 'description', content: 'We\'re dedicated to helping nonprofits, foundations, public sector organizations, and purposeful brands amplify their storytelling and drive real-world results.' }
    ]
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

  h1 {
    line-height: 1.10;
  }

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
