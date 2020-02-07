<template>
  <Layout>
    <!-- Hero -->
    <section class="mt-12 lg:mt-20 hero">
      <div class="container px-6 mx-auto">
        <h1 class="mb-4 text-3xl font-extrabold lg:text-5xl proxima">
          For things that <span class="text-strike">matter</span>.
        </h1>
        <p class="mb-6 text-xl leading-normal max-w-screen-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima impedit, numquam iste repudiandae quis amet reiciendis a sit voluptatum. Ipsa cumque facere, possimus laboriosam delectus ab rerum quasi ipsam.
        </p>
      </div>
    </section>
    <CaseStudyFilter
      :tag-handler="tagHandler"
    />
    <CaseStudyList
      :case-studies-list="caseStudiesList"
    />
    <section class="mb-12 lg:mb-24">
      <button
        v-if="loadMore"
        class="block mx-auto mt-24 text-gray-700 uppercase din"
        @click="onClick"
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
          title
          tags
          slug
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
      caseStudies: [],
      caseStudiesList: [],
      loadMore: true,
      maxDisplay: 1
    }
  },
  mounted () {
    this.allCaseStudies = [...this.$static.allCaseStudy.edges]
    this.caseStudiesList = this.filterByMaxDisplay(this.allCaseStudies)
  },
  methods: {
    onClick () {
      this.maxDisplay += this.maxDisplay
      this.caseStudiesList = this.filterByMaxDisplay(this.allCaseStudies)
      this.loadMore = this.maxDisplay > this.allCaseStudies.length
    },
    tagHandler (tag) {
      if (tag === 'all') {
        this.caseStudiesList = this.filterByMaxDisplay(this.allCaseStudies)
      } else {
        let next
        const all = [...this.allCaseStudies]
        const filtered = []
        next = all.pop()
        while (next) {
          const match = next.node.tags.find(t => t === tag)
          if (match) {
            filtered.push(next)
          }
          next = all.pop()
        }
        this.caseStudiesList = this.filterByMaxDisplay(filtered)
      }
    },
    filterByMaxDisplay (input) {
      return input.filter((a, i) => i < this.maxDisplay && a)
    }
  }
}
</script>
