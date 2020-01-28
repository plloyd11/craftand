<template>
  <Layout>
    <div v-html="$page.job.content" class="job-post"></div>
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
  @apply text-6xl font-bold;
}
</style>
