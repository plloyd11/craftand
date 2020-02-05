<template>
  <header class="px-4 py-6 shadow-md bg-main-gray">
    <div class="container flex items-center justify-between mx-auto">
      <!-- Logo -->
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
      <!-- Menu -->
      <div :class="{ navOpen: isOpen}">
        <a
          class="nav-trigger"
          @click="toggle"
        ><span>Menu</span></a>
      </div>
      <transition
        name="slide-in"
        mode="out-in"
      >
        <HeaderMobileMenu
          v-if="isOpen"
          class="header-form"
          @close="toggle"
        />
      </transition>
      <transition
        name="fade-in"
        mode="out-in"
      >
        <div
          v-if="isOverlay"
          class="overlay"
        />
      </transition>
    </div>
  </header>
</template>

<script>
import HeaderMobileMenu from '~/components/HeaderMobileMenu.vue'

export default {
  components: {
    HeaderMobileMenu
  },
  data () {
    return {
      isOpen: false,
      isOverlay: false
    }
  },
  methods: {
    toggle () {
      const main = document.querySelector('main')
      this.isOpen = !this.isOpen
      this.isOverlay = !this.isOverlay
      // main.classList.toggle('no-flow-mobile')
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
  width: 215px;
}

// Transition for mobile menu

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

// Transition for overlay

.fade-in-enter {
  opacity: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all .25s ease-out;
}

.fade-in-leave-to {
  opacity: 0;
}

/********************************
Hamburger menu
********************************/

.nav-trigger {
  position: relative;
  display: block;
  z-index: 4;
  width: 44px;
  height: 44px;
  overflow: hidden;
  color: transparent;
  white-space: nowrap;
  text-indent: 100%;
  cursor: pointer;
}

.nav-trigger span,
.nav-trigger span::before {
  position: absolute;
  width: 32px;
  height: 2px;
  background: #fadd0d;
  border-radius: 9999px;
}

.nav-trigger span::after {
  position: absolute;
  width: 16px;
  height: 2px;
  background: #fadd0d;
  border-radius: 9999px;
}

.nav-trigger span {
  top: calc(50% - 2px);
  left: calc(50% - 18px);
  transition: background 0.3s;
}

.nav-trigger span::before,
.nav-trigger span::after {
  content: "";
  top: 0;
  left: 0;
  transition: background 0.3s, transform 0.3s;
}

.nav-trigger span::before {
  transform: translateY(-8px);
}

.nav-trigger span::after {
  transform: translateY(8px);
}

.nav-trigger:hover span,
.nav-trigger:hover span::before,
.nav-trigger:hover span::after {
  background: white;
}

.navOpen .nav-trigger span {
  transform: rotate(45deg);
}

.navOpen .nav-trigger span::before {
  transform: rotate(-95deg);
}

.navOpen .nav-trigger span::after {
  background: transparent;
}

.overlay {
  position: absolute;
  top: 92px;
  right: 0;
  background: hsla(0, 0%, 20%,.8);
  z-index: 999;
  width: 100vw;
  height: 100vh;
}

</style>
