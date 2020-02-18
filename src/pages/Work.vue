<template>
  <Layout>
    <!-- Hero -->
    <section class="mt-12 lg:mt-20 hero">
      <div class="container px-6 mx-auto">
        <h1 class="mb-4 text-3xl font-extrabold lg:text-5xl proxima">
          For things that <span class="text-strike">matter</span>.
        </h1>
        <p class="max-w-screen-md mb-6 text-xl leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima impedit, numquam iste repudiandae quis amet reiciendis a sit voluptatum. Ipsa cumque facere, possimus laboriosam delectus ab rerum quasi ipsam.
        </p>
      </div>
    </section>
    <CaseStudyFilter
      :category-handler="onCategory"
    />
    <CaseStudyList
      :case-studies-list="caseStudiesList"
    />
    <section class="mb-12 lg:mb-24">
      <button
        v-if="loadMore"
        class="block mx-auto mt-24 text-gray-700 uppercase din"
        @click="onLoadMore"
      >
        Load More
      </button>
    </section>
  </Layout>
</template>

<static-query>
  query {
    allCaseStudy {
      edges {
        node {
          client
          slug
          headline
          campaignDescription
          photo
          path
          categories {
            behaviorChange
            issueEducation
            leadGeneration
            programGrowthDelivery
          }
        }
      }
    }
  }
</static-query>

<script>
import CaseStudyFilter from '@/components/CaseStudyFilter.vue'
import CaseStudyList from '@/components/CaseStudyList.vue'

export default {
  name: 'CaseStudies',
  metaInfo: {
    title: 'Our Work'
  },
  components: {
    CaseStudyFilter,
    CaseStudyList
  },
  data () {
    // set up our initial instance properties
    return {
      caseStudiesAll: [],
      caseStudiesFiltered: [],
      caseStudiesList: [],
      loadMore: true,
      maxDisplay: 8,
      category: 'all'
    }
  },
  mounted () {
    this.caseStudiesAll = [...this.$static.allCaseStudy.edges]
    this.caseStudiesFiltered = [...this.caseStudiesAll]
    this.caseStudiesList = this.filterByMaxDisplay(this.caseStudiesFiltered)
  },
  methods: {
    onLoadMore () {
      this.maxDisplay += this.maxDisplay
      this.caseStudiesList = this.filterByMaxDisplay(this.caseStudiesFiltered)
      this.loadMore = this.maxDisplay < this.caseStudiesFiltered.length
      console.log(this.caseStudiesFiltered.length)
    },
    onCategory (category) {
      if (category === 'all') {
        this.caseStudiesFiltered = [...this.caseStudiesAll]
        this.caseStudiesList = this.filterByMaxDisplay(this.caseStudiesFiltered)
      } else {
        let next
        const all = [...this.caseStudiesAll]
        this.caseStudiesFiltered = []
        next = all.shift()
        while (next) {
          const match = next.node.categories[category]
          if (match) {
            this.caseStudiesFiltered.push(next)
          }
          next = all.shift()
        }
        this.caseStudiesList = this.filterByMaxDisplay(this.caseStudiesFiltered)
      }
      this.category = category
      this.loadMore = this.maxDisplay < this.caseStudiesFiltered.length
    },
    filterByMaxDisplay (arr) {
      return arr.slice(0, this.maxDisplay)
    }
  }
}
</script>
