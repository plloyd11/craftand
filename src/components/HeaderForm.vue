<template>
  <transition name="slide-out">
    <section
      class="absolute top-0 left-0 z-50 w-full h-screen bg-primary-color"
    >
      <div class="container relative flex px-6 mx-auto">
        <FormTriggerClose
          class="formClose"
          @click="close"
        />
        <div class="flex-1 mt-24">
          <h2 class="text-5xl font-extrabold proxima">
            Reach out.
          </h2>
          <form
            class="flex flex-col w-full max-w-sm mt-16"
            name="header-form"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thank-you/"
          >
            <p class="hidden">
              <input name="bot-field">
            </p>
            <div class="flex flex-col items-start pt-2 mb-16 border-b border-b-2 border-gray-800">
              <label
                for="name"
                class="text-sm uppercase din"
              >Name</label>
              <input
                id="name"
                class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                type="text"
                name="name"
                required
                aria-label="Full name"
              >
            </div>
            <div class="flex flex-col items-start pt-2 mb-16 border-b border-b-2 border-gray-800">
              <label
                for="email"
                class="text-sm uppercase din"
              >Email</label>
              <input
                id="email"
                class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                type="email"
                name="email"
                required
                aria-label="Email"
              >
            </div>
            <h4 class="text-3xl font-extrabold proxima">
              Your message...
            </h4>
            <div class="flex items-center py-2 border-b border-b-2 border-gray-800">
              <input
                class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                type="textarea"
                aria-label="Message"
              >
            </div>
            <input
              type="submit"
              name="Submit"
              class="inline-block w-32 px-4 pt-4 pb-3 mt-16 text-sm tracking-wide text-center uppercase transition-all duration-300 ease-in-out bg-transparent border border-black cursor-pointer hover:bg-main-gray hover:text-white din"
            >
          </form>
        </div>
        <div class="flex-1">
          <g-image
            src="~/assets/img/global/form-hero.png"
            class="w-8/12 mx-auto mb-12"
          />
          <MapPin class="mx-auto" />
          <p class="mt-6 text-sm tracking-wider text-center uppercase din">
            222 Broadway 19th Floor, <br> New York, NY 10038
          </p>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import FormTriggerClose from '@/assets/img/icons/form-trigger-close.svg'
import MapPin from '@/assets/img/icons/map-pin.svg'
export default {
  components: {
    FormTriggerClose,
    MapPin
  },
  methods: {
    // TODO handle the submission form
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>

.header-form {
  z-index: 1000;
}

.formClose {
  position: absolute;
  top: 32px;
  right: 0;
  cursor: pointer;
}

</style>
