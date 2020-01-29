<template>
  <section class="flex flex-col items-center justify-center w-8/12 bg-main-gray">
    <h2 class="text-4xl font-bold text-center text-primary-color proxima">
      We drive better results for things that matter.
    </h2>
    <p class="text-lg text-center text-gray-400">
      Sign up for our newsletter, where we share our insights and predictions on all things digital.
    </p>
    <form class="w-full max-w-4xl mx-auto mt-8">
      <div class="flex flex-wrap w-11/12 mx-auto mb-6">
        <div class="flex-1 w-full px-3">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
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
        <div class="flex-1 w-full px-3">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
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
      <div class="flex flex-wrap items-end w-10/12 mx-auto mb-2">
        <div class="flex-1 w-full">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
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
        <div class="flex-initial w-full">
          <input
            class="h-12 px-12 font-bold text-white bg-transparent border border-white focus:shadow-outline focus:outline-none"
            type="submit"
            value="SUBMIT"
            name="Submit"
          >
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
