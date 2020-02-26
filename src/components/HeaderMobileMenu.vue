<template>
  <transition name="slide-out">
    <section
      class="absolute h-screen mobile-menu bg-primary-color"
    >
      <div class="container relative flex flex-col px-6 mx-auto">
        <div class="flex flex-col pt-6">
          <g-link
            class="mb-6 text-gray-900 uppercase din hover:underline"
            to="/about/"
          >
            About
          </g-link>
          <g-link
            class="mb-6 text-gray-900 uppercase din hover:underline"
            to="/services/"
          >
            Services
          </g-link>
          <g-link
            class="mb-6 text-gray-900 uppercase din hover:underline"
            to="/work/"
          >
            Work
          </g-link>
          <g-link
            class="text-gray-900 uppercase din hover:underline"
            to="/careers/"
          >
            Careers
          </g-link>
        </div>
        <hr class="block w-10/12 my-6 border-black opacity-50">
        <div class="flex-1">
          <h2 class="text-lg font-extrabold proxima">
            Reach out.
          </h2>
          <form
            class="flex flex-col w-full max-w-sm mt-4"
            method="POST"
            data-netlify="true"
            name="mobile-form"
            action="/thank-you"
          >
            <p class="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field"></label>
            </p>
            <div class="flex flex-col items-start pt-2 mb-4 border-b border-b-2 border-gray-800">
              <label
                for="name"
                class="text-xs uppercase din"
              >Name</label>
              <input
                id="name"
                class="w-full px-2 py-1 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                type="text"
                name="name"
                required
                aria-label="Full name"
              >
            </div>
            <div class="flex flex-col items-start pt-2 mb-4 border-b border-b-2 border-gray-800">
              <label
                for="email"
                class="text-xs uppercase din"
              >Email</label>
              <input
                id="email"
                class="w-full px-2 py-1 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                type="email"
                name="email"
                required
                aria-label="Email"
              >
            </div>
            <div class="flex items-center py-2 border-b border-b-2 border-gray-800">
              <label
                for="email"
                class="text-xs uppercase din"
              >Message</label>
              <input
                class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                type="textarea"
                aria-label="Message"
              >
            </div>
            <input
              type="submit"
              name="Submit"
              class="block px-4 py-1 mt-6 mr-auto bg-transparent border-2 border-header-color"
            >
          </form>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>

.mobile-menu {
  top: 92px;
  right: 0;
  width: 65%;
  margin-left: auto;
  z-index: 1000;
}

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
