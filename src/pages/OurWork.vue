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
    <CaseStudyFilter />
    <CaseStudyList />
    <section>
      <div
        v-for="(caseStudy, index) in caseStudies"
        :key="index"
      >
        {{ caseStudy.title }}
      </div>
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

<script>
import CaseStudyFilter from '@/components/CaseStudyFilter.vue'
import CaseStudyList from '@/components/CaseStudyList.vue'
// import allCaseStudies from '@/data/caseStudies.json'

const caseStudyCount = allCaseStudies.length
const caseStudyDisplay = 4

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
      caseStudies: allCaseStudies.splice(0, caseStudyDisplay),
      loadMore: true
    }
  },
  methods: {
    onClick () {
      this.caseStudies = [
        ...this.caseStudies,
        ...allCaseStudies.splice(0, caseStudyDisplay)
      ]
      this.loadMore = this.caseStudies.length !== caseStudyCount
    }
  }
}
</script>
