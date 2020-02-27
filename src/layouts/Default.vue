<template>
  <main class="flex flex-col min-h-screen">
    <Header class="hidden lg:block" />
    <HeaderMobile class="lg:hidden" />
    <slot />
    <Footer />
  </main>
</template>

<script>
import Header from '~/components/Header.vue'
import HeaderMobile from '~/components/HeaderMobile.vue'
import Footer from '~/components/Footer.vue'

export default {
  metaInfo: {
    titleTemplate: 'Craft & Commerce | %s'
  },
  components: {
    Header,
    HeaderMobile,
    Footer
  }
}
</script>

<style>
  @font-face {
    font-family: Cargan-Bold;
    src: url('../assets/fonts/Cargan/bold.ttf');
    font-weight: normal;
    font-style: normal;
}
  @font-face {
    font-family: Cargan-BoldIt;
    src: url('../assets/fonts/Cargan/boldIt.ttf');
    font-weight: normal;
    font-style: normal;
}
  @font-face {
    font-family: Cargan-Italic;
    src: url('../assets/fonts/Cargan/italic.ttf');
    font-weight: normal;
    font-style: normal;
}
  @font-face {
    font-family: Cargan-Light;
    src: url('../assets/fonts/Cargan/light.ttf');
    font-weight: normal;
    font-style: normal;
}
  @font-face {
    font-family: Cargan-Regular;
    src: url('../assets/fonts/Cargan/regular.ttf');
    font-weight: normal;
    font-style: normal;
}
</style>
