<template>
  <Layout>
    <!-- Hero -->
    <section class="container relative px-6 mx-auto lg:px-0">
      <div class="flex flex-col items-center justify-center sm:flex-row case-study">
        <div class="flex-1 lg:pl-20 case-study--text">
          <h4 class="mt-12 font-semibold text-gray-700 uppercase text-md din lg:mt-0">
            {{ $page.caseStudy.client }}
          </h4>
          <h2 class="max-w-md mt-12 mb-6 text-xl font-extrabold leading-none sm:text-4xl proxima">
            {{ $page.caseStudy.headline }}
          </h2>
          <p class="max-w-md mb-8">
            {{ $page.caseStudy.campaignDescription }}
          </p>
          <span
            v-for="(category, index) in categories"
            :key="index"
            class="px-1 pt-1 text-sm uppercase bg-primary-color din"
          >
            {{ category }}
          </span>
        </div>
        <div class="flex-1 case-study--image">
          <g-image
            :src="$page.caseStudy.photo"
          />
        </div>
      </div>
      <div
        v-if="$page.caseStudy.mainTakeaway && $page.caseStudy.supportiveText"
        class="py-6 hero-callout bg-main-gray"
      >
        <p class="mb-1 text-xl font-bold text-primary-color proxima">
          {{ $page.caseStudy.mainTakeaway }}
        </p>
        <p class="italic text-white text-gray-400">
          {{ $page.caseStudy.supportiveText }}
        </p>
      </div>
    </section>
    <!-- Carousel -->
    <section class="relative pt-12 case-study-carousel">
      <div class="container mx-auto">
        <agile
          v-if="carousel.length > 0"
          :center-mode="true"
          :fade="true"
        >
          <CaseStudySlide
            v-for="(item, index) in carousel"
            :key="index"
          >
            <template v-slot:slide-image>
              <g-image
                :src="item.photo"
                class="w-2/3 mx-auto"
              />
            </template>
            <template v-slot:slide-header>
              {{ item.header }}
            </template>
            <template v-slot:slide-content>
              {{ item.body }}
            </template>
          </CaseStudySlide>
        </agile>
      </div>
    </section>
    <!-- Takeaway -->
    <section
      v-if="$page.caseStudy.yellowBoxHeadline && $page.caseStudy.yellowBoxContent"
      class="container max-w-screen-lg mx-auto my-12 takeaway"
    >
      <div class="flex flex-col items-center justify-center py-16">
        <h3 class="mb-6 text-4xl font-extrabold text-center proxima">
          {{ $page.caseStudy.yellowBoxHeadline }}
        </h3>
        <p class="max-w-screen-md mx-auto text-center text-md">
          {{ $page.caseStudy.yellowBoxContent }}
        </p>
      </div>
    </section>
    <!-- Video -->
    <section v-if="$page.caseStudy.youtubeLink">
      <div class="container mx-auto">
        <iframe
          width="100%"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="youtube-container"
          :src="`https://www.youtube.com/embed/${$page.caseStudy.youtubeLink.split('/').pop()}`"
        />
      </div>
    </section>
    <!-- Quote -->
    <section
      v-if="$page.caseStudy.clientTestimony && $page.caseStudy.clientTitle"
      class="mt-24"
    >
      <p class="w-10/12 mx-auto mb-12 text-xl leading-normal text-center lg:w-6/12 lg:text-4xl">
        {{ $page.caseStudy.clientTestimony }}
      </p>
      <div class="flex flex-col">
        <p
          v-for="(item, index) in $page.caseStudy.clientTitle.split('\n')"
          :key="index"
          :class="index === 0 && 'mb-2'"
          class="inline-block px-1 pt-1 mx-auto text-sm text-center uppercase bg-primary-color din"
        >
          {{ item }}
        </p>
      </div>
    </section>
    <!-- Bottom Nav -->
    <CaseStudyNav
      :next="next"
      :prev="prev"
    />
  </Layout>
</template>

<page-query>
  query($path: String!) {
    caseStudy(path: $path) {
      client
      categories {
        behaviorChange
        issueEducation
        leadGeneration
        programGrowthDelivery
      }
      carousel {
        photo
        header
        body
      }
      headline
      campaignDescription
      photo
      mainTakeaway
      supportiveText
      yellowBoxHeadline
      yellowBoxContent
      youtubeLink
      clientTestimony
      clientTitle
      path
    }
  }
</page-query>

<static-query>
  query {
    allCaseStudy {
      edges {
        node {
          path
        }
      }
    }
  }
</static-query>

<script>
import { VueAgile } from 'vue-agile'
import CaseStudySlide from '@/components/CaseStudySlide.vue'
import CaseStudyNav from '@/components/CaseStudyNav.vue'

export default {
  components: {
    agile: VueAgile,
    CaseStudySlide,
    CaseStudyNav
  },
  metaInfo: {
    title: 'Services'
  },
  data () {
    return {
      carousel: [],
      categories: [],
      next: null,
      prev: null
    }
  },
  watch: {
    $route () {
      this.createCategoryNames()
      this.createNavLinks()
    }
  },
  mounted () {
    this.createCategoryNames()
    this.createNavLinks()
    this.carousel = this.$page.caseStudy.carousel
  },
  methods: {
    createCategoryNames () {
      const categoryMap = {
        behaviorChange: 'Behavior Change',
        issueEducation: 'Issue Education',
        leadGeneration: 'Lead Generation',
        programGrowthDelivery: 'Program Growth & Delivery'
      }
      const categoriesAll = this.$page.caseStudy.categories
      const categoryKeys = Object.keys(categoriesAll)
      const categories = categoryKeys
        .filter(category => categoriesAll[category])
        .map(category => categoryMap[category])
      this.categories = categories
    },
    createNavLinks () {
      const allPaths = this.$static.allCaseStudy.edges
        .reduce((a, b) => [...a, b.node.path], [])
      const currentPath = this.$page.caseStudy.path
      const currentIndex = allPaths.indexOf(currentPath)
      this.next = allPaths[currentIndex + 1]
      this.prev = allPaths[currentIndex - 1]
    }
  }
}
</script>

<style lang="scss" scoped>

.hero-callout {
  padding-left: 12px;
  padding-right: 12px;
  @media (min-width: 1024px) {
    position: absolute;
    width: 725px;
    padding-left: calc(10% - 45px);
    padding-right: 0;
    z-index: 100;
    bottom: 0;
    left: 0;
  }
}

.takeaway {
  width: 100%;
  background: url('~@/assets/img/global/yellow-decorated-rectangle.jpg') no-repeat center center;
  background-size: cover;
}

.youtube-container {
  height: 400px;
  @media (min-width: 768px) {
    height: 800px;
  }
}

</style>
