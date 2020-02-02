<template>
  <header class="py-8 shadow-md bg-main-gray">
    <div class="container flex items-center justify-between mx-auto">
      <div>
        <g-link
          exact
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="275"
            viewBox="0 0 275 24"
          >
            <image
              id="Craft_Commerce_TextHeader"
              data-name="Craft&amp;Commerce_TextHeader"
              width="275"
              xlink:href="data:img/png;base64,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"
            />
          </svg>
        </g-link>
      </div>

      <nav class="items-center hidden lg:flex">
        <g-link
          class="mr-8 text-white uppercase din hover:underline"
          to="/about/"
        >
          About
        </g-link>
        <g-link
          class="mr-8 text-white uppercase din hover:underline"
          to="/services/"
        >
          Services
        </g-link>
        <g-link
          class="mr-8 text-white uppercase din hover:underline"
          to="/our-work/"
        >
          Our Work
        </g-link>
        <g-link
          class="text-white uppercase din hover:underline"
          to="/careers/"
        >
          Careers
        </g-link>
        <FormTrigger
          class="cursor-pointer md:ml-16 lg:ml-24"
          @click="toggle"
        />
        <transition
          name="slide-in"
          mode="out-in"
        >
          <HeaderForm
            v-if="isOpen"
            class="header-form"
            @close="toggle"
          />
        </transition>
      </nav>
    </div>
  </header>
</template>

<script>
import HeaderForm from '@/components/HeaderForm.vue'
import FormTrigger from '@/assets/img/icons/form-trigger.svg'

export default {
  components: {
    HeaderForm,
    FormTrigger
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
      document.body.classList.toggle('no-flow')
    }
  }
}
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style lang="scss" scoped>

.active {
  color: #fadd0d;
}

.slide-in-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: all .45s ease-in-out;
}

.slide-in-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

</style>
