<template>
  <section class="container mx-auto case-study-container">
    <div
      v-for="(caseStudy, index) in caseStudiesList"
      :key="index"
      class="flex flex-col items-center justify-center mb-6 sm:flex-row case-study sm:mb-0"
    >
      <div class="case-study--photo">
        <g-image
          :src="caseStudy.node.photo"
        />
      </div>
      <div class="flex-1 px-6 case-study--content sm:px-0">
        <h4 class="mt-3 font-semibold text-gray-700 uppercase sm:mt-0 text-md din">
          {{ caseStudy.node.title }}
        </h4>
        <h2 class="max-w-sm my-4 text-2xl font-extrabold leading-tight sm:leading-none sm:text-4xl proxima">
          {{ caseStudy.node.heading1 }}
        </h2>
        <p class="max-w-sm mb-8">
          {{ caseStudy.node.body1 }}
        </p>
        <g-link
          :to="caseStudy.node.path"
          class="px-1 pt-1 text-sm uppercase bg-primary-color din"
        >
          Read on
          <RightArrow class="inline-block w-2 pb-1" />
        </g-link>
      </div>
    </div>
  </section>
</template>

<script>
import RightArrow from '@/assets/img/icons/right-arrow.svg'

export default {
  components: {
    RightArrow
  },
  props: {
    caseStudiesList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.case-study-container {
  > div:nth-child(even) {
    .case-study {
      &--photo {
        flex: 1 1 80px;
        @media (min-width: 1024px) {
          order: 2;
        }
      }
      &--content {
        text-align: center;
        @media (min-width: 1024px) {
          order: 1;
          order: 1;
          text-align: right;
          padding-right: 5rem;
        }
        h2,p {
          margin-left: auto;
        }
      }
    }
  }
  > div:nth-child(odd) {
    .case-study {
      &--photo {
        flex: 1 1 80px;
      }
      &--content {
        text-align: center;
        @media (min-width: 1024px) {
          text-align: left;
          padding-left: 5rem;
        }
      }
    }
  }
}

</style>
