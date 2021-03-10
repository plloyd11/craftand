<template>
  <Layout>
    <div class="py-16 mx-auto prose prose-lg" v-html="$page.job.content" />
  </Layout>
</template>

<page-query>
  query($path: String!) {
    job(path: $path) {
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
          hid: 'description',
          name: 'description',
          content: this.$page.job.excerpt
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$page.job.cover_image
        }
      ]
    }
  }
}
</script>
