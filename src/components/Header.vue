<template>
  <header class="px-6 py-5 shadow-md bg-main-gray">
    <div class="container flex items-center justify-between mx-auto">
      <div>
        <g-link exact to="/" class="relative">
          <g-image
            src="~/assets/img/global/logo.png"
            class="header-logo"
            immediate="true"
          />
        </g-link>
      </div>
      <nav class="items-center hidden lg:flex">
        <g-link
          class="mr-8 text-sm font-medium tracking-wider text-center text-white uppercase din hover:underline"
          to="/about/"
        >
          About
        </g-link>
        <g-link
          class="mr-8 text-sm font-medium tracking-wider text-white uppercase din hover:underline"
          to="/services/"
        >
          Services
        </g-link>
        <g-link
          class="mr-8 text-sm font-medium tracking-wider text-white uppercase din hover:underline"
          to="/work/"
        >
          Work
        </g-link>
        <g-link
          class="mr-8 text-sm font-medium tracking-wider text-white uppercase din hover:underline"
          to="/careers/"
        >
          Careers
        </g-link>
        <g-image
          src="~/assets/img/icons/contact-icon.png"
          class="w-12 cursor-pointer md:ml-8 lg:ml-12"
          @click="toggle"
        />
        <transition name="slide-in" mode="out-in">
          <HeaderForm v-if="isOpen" class="header-form" @close="toggle" />
        </transition>
      </nav>
    </div>
  </header>
</template>

<script>
import HeaderForm from '@/components/HeaderForm.vue'

export default {
  components: {
    HeaderForm
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
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
nav {
  a {
    position: relative;
    &:hover {
      text-decoration: none;
      &::after {
        content: '';
        position: absolute;
        border-bottom: 2px solid #fadd0d;
        width: 100%;
        height: 2px;
        left: 0;
        bottom: -2px;
      }
    }
  }
}

.active {
  &::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #fadd0d;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -2px;
  }
}

.header-logo {
  width: 235px;
}

.slide-in-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.45s ease-in-out;
}

.slide-in-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
