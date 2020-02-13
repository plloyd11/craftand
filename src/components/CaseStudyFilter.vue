<template>
  <section class="my-16">
    <div class="mb-8 bg-light-gray title-box">
      <div class="container flex justify-end pt-2 pb-1 pl-6 mx-auto">
        <h2 class="pr-4 tracking-wider uppercase din">
          CASE STUDIES AHEAD —
        </h2>
      </div>
    </div>
    <div class="container px-6 mx-auto">
      <div @click="onClick">
        <a
          data-tag="all"
          href="#"
          class="mr-4 text-sm tracking-wider text-gray-600 uppercase din"
        >
          All
        </a>
        <a
          data-tag="issue education"
          href="#"
          class="mr-4 text-sm tracking-wider text-gray-600 uppercase din"
        >
          Issue Education
        </a>
        <a
          data-tag="behavior change"
          href="#"
          class="mr-4 text-sm tracking-wider text-gray-600 uppercase din"
        >
          Behavior Change
        </a>
        <a
          data-tag="program growth delivery"
          href="#"
          class="mr-4 text-sm tracking-wider text-gray-600 uppercase din"
        >
          Program Growth &amp; Delivery
        </a>
        <a
          data-tag="lead generation"
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
export default {
  props: {
    tagHandler: {
      type: Function,
      required: true
    }
  },
  methods: {
    onClick (event) {
      const tag = event.target.dataset.tag
      tag && this.tagHandler(tag)
    }
  }
}
</script>

<style scoped>

.title-box {
  width: calc(50% - 410px);
}

</style>
