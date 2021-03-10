<template>
  <Layout>
    <div class="py-16 mx-auto prose prose-lg" v-html="$page.job.content" />
  </Layout>
</template>

<page-query>
  query Job($path: String!) {
    job: job(path: $path) {
      title
      excerpt
      content
      cover_image
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.job.title,
      meta: [
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$page.job.excerpt
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: this.$page.job.cover_image.src
        }
      ]
    }
  }
}
</script>
