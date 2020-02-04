<template>
  <header class="px-6 py-8 shadow-md bg-main-gray">
    <div class="container flex items-center justify-between mx-auto">
      <div>
        <g-link
          exact
          to="/"
        >
          <g-image
            src="~/assets/img/global/logo.png"
            class="header-logo"
            immediate="true"
          />
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

.header-logo {
  width: 275px;
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
