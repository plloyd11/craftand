<template>
  <Layout>
    <section class="hero">
      <div class="p-8 bg-white shadow-sm lg:p-12">
        <h1 class="text-2xl font-extrabold text-center lg:text-5xl proxima">
          Work With Us
        </h1>
      </div>
    </section>
    <!-- <section class="container px-6 mx-auto my-12 lg:my-24">
      <h3 class="mb-8 text-2xl font-extrabold lg:text-4xl proxima">
        We're Hiring!
      </h3>
      <p class="max-w-screen-lg text-lg leading-normal">
        Finding the right people for our team’s next level of growth is both art and science to us: lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section> -->
    <section class="container px-6 mx-auto my-12 lg:my-24 job-posting-grid">
      <!-- Individual job posting -->
      <div
        v-for="edge in $page.allJob.edges"
        :key="edge.node.id"
      >
        <div class="max-w-sm mb-6 overflow-hidden rounded shadow-lg lg:mb-0">
          <div class="px-6 py-4">
            <g-image
              :src="edge.node.cover_image"
              class="w-full mb-4"
            />
            <h4 class="mb-2 text-2xl font-bold proxima">
              {{ edge.node.title }}
            </h4>
            <p class="mb-6 text-base text-gray-700">
              {{ edge.node.excerpt }}
            </p>
            <g-link :to="edge.node.path">
              Learn more
            </g-link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query($page: Int) {
    allJob(perPage: 20, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
          excerpt
          date
          tags
          cover_image
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

<style lang="scss" scoped>
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background: url('~@/assets/img/careers/careers-hero.jpg') no-repeat center center;
    background-size: cover;
    @media (min-width: 1024px) {
      height: 600px;
    }
  }

  .job-posting-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
      display: grid;
      column-gap: 8px;
      row-gap: 92px;
      grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
    }
  }

</style>
