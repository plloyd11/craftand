<template>
  <main class="flex flex-col min-h-screen">
    <Header />
    <slot />
    <Footer class="mt-24" />
  </main>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
