<template>
  <footer>
    <!-- Top Footer -->
    <section class="flex">
      <FooterForm />
      <FooterCallout />
    </section>
    <!-- Bottom Footer -->
    <section class="py-10 bg-primary-color">
      <div class="container flex justify-center mx-auto text-center">
        <p class="din font">
          NEW YORK, NY
        </p>
        <span class="mx-4 din font">|</span>
        <a
          href="mailto:hello@craftand.com"
          class="block din font"
        >HELLO@CRAFTAND.COM</a>
      </div>
      <small class="block mt-4 text-center">Copyright 2020 by Craft &amp; Commerce.</small>
    </section>
  </footer>
</template>

<script>
import FooterForm from '~/components/FooterForm.vue'
import FooterCallout from '~/components/FooterCallout.vue'

export default {
  components: {
    FooterForm,
    FooterCallout
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

<style>

</style>
