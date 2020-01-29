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

<style>
.job-post h1 {
  font-family: 'Proxima Nova', sans-serif;
  @apply text-5xl font-bold;
}

.job-post ul {
  @apply my-1;
}

.job-post .body-text {
  @apply my-4 max-w-screen-lg;
}

.job-post li {
  @apply list-disc list-inside;
}

.job-post p > a {
  @apply mt-12 inline-block bg-transparent text-gray-900 font-semibold py-2 px-4 border border-gray-900 border-2 uppercase;
}

</style>
