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
    <section>
      <button
        v-if="loadMore"
        class="block mx-auto text-gray-700 uppercase din"
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
          category
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

// cache a copy of all case studies outside of the instance
const allCaseStudies = [];

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
    this.caseStudies = this.$static.allCaseStudy.edges
    this.caseStudiesList = this.caseStudies.filter((c, i) => i < this.maxDisplay && c)
  },
  methods: {
    onClick () {
      this.maxDisplay += this.maxDisplay
      this.caseStudiesList = this.caseStudies.filter((c, i) => i < this.maxDisplay && c)
      this.loadMore = this.maxDisplay > this.caseStudies.length
    },
    tagHandler (tag) {
      if (tag === 'all') {
        this.caseStudiesList = this.caseStudies.filter((c, i) => i < this.maxDisplay && c)
      } else {
        let next
        const all = [...this.caseStudies]
        const filtered = []
        next = all.pop()
        while (next) {
          console.log(next)
          next = all.pop()
        }
      }
    }
  }
}
</script>
