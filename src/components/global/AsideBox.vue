<template>
  <aside class="flex items-center justify-end">
    <g-link :to="link">
      <div class="px-4 py-6 bg-primary-color">
        <Add class="mx-auto mb-6" />
        <p class="w-24 text-xs text-center uppercase din">
          <slot name="helperText" />
        </p>
      </div>
    </g-link>
  </aside>
</template>

<script>
import Add from '~/assets/img/icons/add.svg'
export default {
  components: {
    Add
  },
  props: {
    link: {
      type: String,
      default: '/'
    }
  }
}
</script>
