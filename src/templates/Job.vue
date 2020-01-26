<template>
  <Layout>
    <div v-html="$page.job.content"></div>
  </Layout>
</template>

<page-query>
  query($path: String!) {
    job(path: $path) {
      content
    }
  }
</page-query>
