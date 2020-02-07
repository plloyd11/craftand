<template>
  <Layout>
    <!-- Hero -->
    <section class="container relative px-6 mx-auto lg:px-0">
      <div class="flex flex-col items-center justify-center sm:flex-row case-study">
        <div class="flex-1 lg:pl-20 case-study--text">
          <h4 class="mt-12 font-semibold text-gray-700 uppercase text-md din lg:mt-0">
            {{ $page.caseStudy.title }}
          </h4>
          <h2 class="max-w-sm mt-12 mb-6 text-4xl font-extrabold leading-none proxima">
            {{ $page.caseStudy.heading1 }}
          </h2>
          <p class="max-w-sm mb-8">
            {{ $page.caseStudy.body1 }}
          </p>
          <span
            class="px-1 pt-1 text-sm uppercase bg-primary-color din"
          >
            <!-- This is the category / tag -->
            {{ $page.caseStudy.category }}
          </span>
        </div>
        <div class="flex-1 case-study--image">
          <g-image
            :src="$page.caseStudy.photo"
          />
        </div>
      </div>
      <div class="py-6 hero-callout bg-main-gray">
        <p class="mb-1 text-xl font-bold text-primary-color proxima">
          {{ $page.caseStudy.heading2 }}
        </p>
        <p class="italic text-white text-gray-400">
          {{ $page.caseStudy.body2 }}
        </p>
      </div>
    </section>
    <!-- Carousel -->
    <section class="relative pt-12 case-study-carousel">
      <div class="container mx-auto">
        <agile
          :center-mode="true"
          :fade="true"
        >
          <CaseStudySlide>
            <template v-slot:slide-image>
              <g-image 
                src="~/assets/img/case-studies/ChatThumb.png"
                class="w-2/3 mx-auto"
              />
            </template>
            <template v-slot:slide-header>
              {{ $page.caseStudy.heading2 }}
            </template>
            <template v-slot:slide-content>
              {{ $page.caseStudy.body1 }}
            </template>
          </CaseStudySlide>
          <CaseStudySlide>
            <template v-slot:slide-image>
              <g-image src="~/assets/img/case-studies/case-study-carousel.png" class="w-2/3 mx-auto" />
            </template>
            <template v-slot:slide-header>
              Simplify, Simplify
            </template>
            <template v-slot:slide-content>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officiis atque, praesentium totam sed veniam quasi. Quod veniam amet voluptates nemo nihil soluta quas rerum, totam optio doloribus molestiae deserunt.
            </template>
          </CaseStudySlide>
        </agile>
      </div>
    </section>
    <!-- Takeaway -->
    <section class="container mx-auto my-12 max-w-screen-lg takeaway">
      <div class="flex flex-col items-center justify-center py-16">
        <h3 class="mb-6 text-4xl font-extrabold text-center proxima">
          {{ $page.caseStudy.heading3 }}
        </h3>
        <p class="mx-auto text-center text-md max-w-screen-md">
          {{ $page.caseStudy.body3 }}
        </p>
      </div>
    </section>
    <!-- Video -->
    <section>
      <g-image :src="$page.caseStudy.videoPoster" />
    </section>
    <!-- Quote -->
    <section class="mt-24">
      <p class="w-10/12 mx-auto mb-12 text-xl leading-normal text-center lg:w-6/12 lg:text-4xl">
        {{ $page.caseStudy.heading4 }}
      </p>
      <div class="flex flex-col">
        <p
          v-for="(item, index) in $page.caseStudy.body4.split('\n')"
          :key="index"
          :class="index === 0 && 'mb-2'"
          class="inline-block px-1 pt-1 mx-auto text-sm text-center uppercase bg-primary-color din"
        >
          {{ item }}
        </p>
      </div>
    </section>
    <!-- Bottom Nav -->
    <CaseStudyNav />
  </Layout>
</template>

<page-query>
  query($path: String!) {
    caseStudy(path: $path) {
      title
      heading1
      body1
      category
      tags
      photo
      heading2
      body2
      heading3
      body3
      videoPoster
      heading4
      body4
    }
  }
</page-query>

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
  }
}
</script>

<style lang="scss" scoped>

.hero-callout {
  padding-left: 24px;
  @media (min-width: 1024px) {
    position: absolute;
    width: 725px;
    padding-left: calc(10% - 25px);
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

</style>
