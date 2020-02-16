<template>
  <section class="my-8 sm:my-16">
    <div class="mb-8 bg-light-gray title-box">
      <div class="container flex pt-2 pb-1 pl-6 mx-auto sm:justify-end">
        <h2 class="pr-4 tracking-wider uppercase din">
          CASE STUDIES AHEAD —
        </h2>
      </div>
    </div>
    <div class="container px-6 mx-auto">
      <div
        class="flex flex-col sm:flex-row"
        @click="onClick"
      >
        <a
          data-category="all"
          href="#"
          class="mr-4 text-sm tracking-wider text-gray-600 uppercase din"
        >
          All
        </a>
        <a
          data-category="issueEducation"
          href="#"
          class="mr-4 text-sm tracking-wider text-gray-600 uppercase din"
        >
          Issue Education
        </a>
        <a
          data-category="behaviorChange"
          href="#"
          class="mr-4 text-sm tracking-wider text-gray-600 uppercase din"
        >
          Behavior Change
        </a>
        <a
          data-category="programGrowthDelivery"
          href="#"
          class="mr-4 text-sm tracking-wider text-gray-600 uppercase din"
        >
          Program Growth &amp; Delivery
        </a>
        <a
          data-category="leadGeneration"
          href="#"
          class="text-sm tracking-wider text-gray-600 uppercase din"
        >
          Lead Generation
        </a>
      </div>
    </div>
  </section>
</template>

<script>
const activeClass = 'active'
const activeDefault = 'all'
export default {
  props: {
    categoryHandler: {
      type: Function,
      required: true
    }
  },
  mounted () {
    this.activeElement = document.querySelector(`[data-tag='${activeDefault}']`)
    this.activeElement.classList.add(activeClass)
  },
  methods: {
    onClick (event) {
      const { target } = event
      const category = event.target.dataset.category
      this.activeElement.classList.remove(activeClass)
      this.activeElement = target
      this.activeElement.classList.add(activeClass)
      category && this.categoryHandler(category)
    }
  }
}
</script>

<style lang="scss" scoped>

.title-box {
  @media (min-width: 768px) {
    width: calc(50% - 410px);
  }
}

</style>
