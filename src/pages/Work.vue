<template>
  <Layout>
    <!-- Hero -->
    <section class="mt-12 lg:mt-20 hero">
      <div class="container px-6 mx-auto">
        <h1 class="mb-4 text-3xl font-extrabold lg:text-5xl proxima">
          Good <span class="text-strike">together</span>
        </h1>
        <p class="max-w-screen-md mb-6 text-xl leading-normal">
          While we're proud to bring a wealth of experience to our engagements, we've found that transformative results are rarely the result of an external force alone, but rather a collaborative partnership that merges agency expertise with that of internal teams—often across initiatives and departments.
        </p>
        <p class="max-w-screen-md mb-2 text-xl leading-normal">
          Below is some of what we've been able to achieve, together.
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
          campaignDescription
          categories {
            missionDelivery
            brandStorytelling
            fundraisingGrowth
            advocacyAction
          }
          client
          headline
          index
          path
          photo
          slug
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
    return {
      category: 'all',
      caseStudiesAll: [],
      caseStudiesFiltered: [],
      caseStudiesList: [],
      loadMore: false,
      maxDisplay: 100
    }
  },
  mounted () {
    this.caseStudiesAll = [...this.$static.allCaseStudy.edges]
    this.caseStudiesFiltered = [...this.caseStudiesAll]
    this.caseStudiesList = this.caseStudiesFiltered
    this.caseStudiesList = this.filterByIndex()
    this.caseStudiesList = this.filterByMaxDisplay()
    this.loadMore = this.toggleLoadMore()
  },
  methods: {
    onLoadMore () {
      this.maxDisplay += this.maxDisplay
      this.caseStudiesList = this.caseStudiesFiltered
      this.caseStudiesList = this.filterByIndex()
      this.caseStudiesList = this.filterByMaxDisplay()
      this.loadMore = this.toggleLoadMore()
    },
    onCategory (category) {
      if (category === 'all') {
        this.caseStudiesFiltered = [...this.caseStudiesAll]
        this.caseStudiesList = this.caseStudiesFiltered
        this.caseStudiesList = this.filterByIndex()
        this.caseStudiesList = this.filterByMaxDisplay()
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
        this.caseStudiesList = this.caseStudiesFiltered
        this.caseStudiesList = this.filterByIndex()
        this.caseStudiesList = this.filterByMaxDisplay()
      }
      this.category = category
      this.loadMore = this.toggleLoadMore()
    },
    filterByMaxDisplay () {
      return this.caseStudiesList.slice(0, this.maxDisplay)
    },
    filterByIndex () {
      function mergeHelper (left, right) {
        const result = []
        let leftIndex = 0
        let rightIndex = 0
        while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex = leftIndex + 1
          } else {
            result.push(right[rightIndex]);
            rightIndex = rightIndex + 1
          }
        }
        while (leftIndex < left.length) {
          result.push(left[leftIndex])
          leftIndex = leftIndex + 1
        }
        while (rightIndex < right.length) {
          result.push(right[rightIndex])
          rightIndex = rightIndex + 1
        }
        return result
      }

      function mergeSort (arr) {
        if (arr.length === 1) {
          return arr
        }
        const mid = Math.floor(arr.length / 2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid, arr.length)
        return mergeHelper(mergeSort(left), mergeSort(right))
      }
      return mergeSort(this.caseStudiesList)
    },
    toggleLoadMore () {
      return this.maxDisplay < this.caseStudiesFiltered.length
    }
  }
}
</script>
