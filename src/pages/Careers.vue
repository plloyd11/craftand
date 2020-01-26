<template>
  <Layout>
    <section class="container flex-grow mx-auto">
      <g-image
        alt="Hero Image"
        src="~/img/careers/hero.jpg"
        class="w-10/12 mx-auto"
      />
      <h1
        class="mt-8 text-3xl font-bold text-center"
      >
        Careers
      </h1>
    </section>
    <section
      v-for="edge in $page.allJob.edges"
      :key="edge.node.id"
    >
      <p>{{ edge.node.title }}</p>
      <g-link :to="edge.node.path">
        Read Job Posting
      </g-link>
    </section>
  </Layout>
</template>

<page-query>
  query($page: Int) {
    allJob(perPage: 2, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Careers'
  }
}
</script>
