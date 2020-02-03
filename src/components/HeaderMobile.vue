<template>
  <header class="px-4 py-8 shadow-md bg-main-gray">
    <div class="container flex items-center justify-between mx-auto">
      <!-- Menu -->
      <div>
        <a
          class="nav-trigger"
        ><span>Menu</span></a>
      </div>
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
      <!-- Form -->
      <div>
        <FormTrigger
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
      </div>
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
  width: 165px;
  @media (min-width: 1024px) {
    width: 275px;
  }
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
}

.nav-trigger span,
.nav-trigger span::before {
  position: absolute;
  width: 36px;
  height: 2px;
  background: #fadd0d;
  border-radius: 9999px;
}

.nav-trigger span::after {
  position: absolute;
  width: 18px;
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
  transform: translateY(-12px);
}

.nav-trigger span::after {
  transform: translateY(12px);
}

.nav-trigger:hover span,
.nav-trigger:hover span::before,
.nav-trigger:hover span::after {
  background: white;
}

.nav-open .nav-trigger span::before,
.nav-open .nav-trigger span::after {
  background-color: #333;
}

.nav-open .nav-trigger span {
  background: transparent;
}

.nav-open .nav-trigger span::before {
  transform: rotate(-45deg);
}

.nav-open .nav-trigger span::after {
  transform: rotate(45deg);
}

</style>
