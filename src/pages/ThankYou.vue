<template>
  <main>
    <section class="flex flex-col items-center w-full h-screen bg-primary-color">
      <h1 class="max-w-xl pt-48 mx-auto text-2xl font-extrabold leading-none text-center lg:text-5xl proxima">
        Thanks! We got your message and we'll be <br> in touch soon!
      </h1>
      <g-link
        to="/"
        class="inline-block px-4 pt-4 pb-3 mt-16 text-sm tracking-wide text-center uppercase transition-all duration-300 ease-in-out bg-transparent border border-black cursor-pointer hover:bg-main-gray hover:text-white din"
      >
        Back to the site
      </g-link>
    </section>
  </main>
</template>

<script>

export default {
  metaInfo: {
    title: 'Thank You',
    meta: [
      { name: 'description', content: 'Thank you for filling out our form!' }
    ]
  }
}
</script>

<style scoped>

</style>
