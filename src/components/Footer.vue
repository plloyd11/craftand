<template>
  <footer>
    <!-- Top Footer -->
    <section class="flex flex-col sm:flex-row">
      <FooterForm />
      <FooterCallout />
    </section>
    <!-- Bottom Footer -->
    <section class="py-10 bg-primary-color">
      <div class="container flex justify-center mx-auto text-center">
        <p class="text-sm tracking-wide uppercase din font">New York <span class="lowercase">x</span> Chicago</p>
        <span class="mx-4 din font">|</span>
        <p class="block text-sm tracking-wide din font">
          HELLO@CRAFTAND.COM
        </p>
      </div>
      <small class="block mt-4 text-center">
        Copyright 2020 by Craft &amp; Commerce. Read our <g-link to="/privacy-policy">Privacy Policy</g-link>
      </small>
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

<style></style>
