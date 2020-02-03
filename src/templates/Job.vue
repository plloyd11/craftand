<template>
  <Layout>
    <div
      class="container px-6 mx-auto mt-12 job-post"
      v-html="$page.job.content"
    />
  </Layout>
</template>

<page-query>
  query($path: String!) {
    job(path: $path) {
      content
    }
  }
</page-query>

<style lang="scss">

.job-post {
  .title {
    font-family: 'Proxima Nova', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }
}

.job-post ul {
  @apply my-1;
}

.job-post .body-text {
  @apply my-6 max-w-screen-md;
}

.job-post li {
  @apply list-disc list-inside mb-2;
}

.job-post p > a {
  @apply mt-12 inline-block bg-transparent text-gray-900 font-semibold py-2 px-4 border border-gray-900 border-2 uppercase;
}

</style>
