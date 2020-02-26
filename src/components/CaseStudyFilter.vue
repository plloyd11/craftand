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
        class="flex flex-col items-baseline sm:flex-row"
        @click="onClick"
      >
        <a
          data-category="all"
          href="#"
          class="relative mb-4 mr-4 text-sm font-semibold tracking-wider text-gray-600 uppercase sm:mb-0 din"
        >
          All
        </a>
        <a
          data-category="missionDelivery"
          href="#"
          class="relative mb-4 mr-4 text-sm font-semibold tracking-wider text-gray-600 uppercase sm:mb-0 din"
        >
          Mission Delivery
        </a>
        <a
          data-category="brandStorytelling"
          href="#"
          class="relative mb-4 mr-4 text-sm font-semibold tracking-wider text-gray-600 uppercase sm:mb-0 din"
        >
          Brand Storytelling
        </a>
        <a
          data-category="fundraisingGrowth"
          href="#"
          class="relative mb-4 mr-4 text-sm font-semibold tracking-wider text-gray-600 uppercase sm:mb-0 din"
        >
          Fundraising &amp; Growth
        </a>
        <a
          data-category="advocacyAction"
          href="#"
          class="relative text-sm font-semibold tracking-wider text-gray-600 uppercase din"
        >
          Advocacy &amp; Action
        </a>
      </div>
    </div>
  </section>
</template>

<script>
const activeClass = 'active-tag'
const activeDefault = 'all'
export default {
  props: {
    categoryHandler: {
      type: Function,
      required: true
    }
  },
  mounted () {
    this.activeElement = document.querySelector(`[data-category='${activeDefault}']`)
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

.active-tag {
  &::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #fadd0d;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 2px;
    @media (min-width: 640px) {
      bottom: -2px;
    }
  }
}

</style>
