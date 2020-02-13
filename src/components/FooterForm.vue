<template>
  <section class="flex flex-col items-center justify-center px-6 py-12 sm:py-0 sm:w-8/12 bg-main-gray">
    <h2 class="mb-4 text-2xl font-bold leading-tight text-center lg:mb-2 lg:text-3xl text-primary-color proxima">
      The best way forward is together.
    </h2>
    <p class="text-sm text-center text-gray-400">
      Join us for a recurring newsletter that covers modern media and marketing, through the lens of those doing good in the world.
    </p>
    <form class="w-full max-w-4xl px-8 mx-auto mt-8 footer-form">
      <div class="mx-auto mb-6 footer-form_row-1">
        <div class="w-full mb-6 sm:mr-8 sm:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase din"
            for="first-name"
          >
            First Name
          </label>
          <input
            id="first-name"
            class="block w-full px-4 py-3 leading-tight text-gray-700 placeholder-gray-600 bg-transparent border border-white appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="First"
            required
          >
        </div>
        <div class="w-full">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase din"
            for="last-name"
          >
            Last Name
          </label>
          <input
            id="last-name"
            class="block w-full px-4 py-3 leading-tight text-gray-700 placeholder-gray-600 bg-transparent border border-white appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Last"
            required
          >
        </div>
      </div>
      <div class="mx-auto footer-form_row-2">
        <div class="w-full mb-6 sm:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase din"
            for="zip"
          >
            Email
          </label>
          <input
            id="email"
            class="block w-full px-4 py-3 leading-tight text-gray-700 placeholder-gray-600 bg-transparent border border-white appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Email"
            required
          >
        </div>
        <div class="self-end w-full">
          <div class="flex items-center px-12 text-gray-300 border border-white cursor-pointer din form-submit focus:shadow-outline focus:outline-none">
            <input
              class="pt-2 leading-none bg-transparent"
              type="submit"
              value="SUBMIT"
              name="Submit"
            >
            <RightArrowWhite class="inline-block w-3 ml-2" />
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import RightArrowWhite from '@/assets/img/icons/right-arrow-white.svg'

export default {
  components: {
    RightArrowWhite
  }
}
</script>

<style lang="scss" scoped>

.footer-form {
  &_row-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      display: grid;
      column-gap: 32px;
      grid-template-columns: 1fr 1fr;
    }
  }
  &_row-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr min-content;
    }
  }
}

.form-submit {
  height: 46px;
}

</style>
