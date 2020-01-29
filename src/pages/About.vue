<template>
  <Layout>
    <!-- Hero -->
    <section class="pt-24 hero">
      <div class="container px-6 mx-auto">
        <h1 class="mb-4 text-4xl font-extrabold">
          Behind the curtain...
        </h1>
        <p class="mb-6 text-xl leading-normal max-w-screen-md">
          West Philadelphia, born and raised — hold up, that’s a different orgin story;)
        </p>
        <p class="mb-6 text-xl leading-normal max-w-screen-md">
          Here’s ours: Founders Mark and Jordan met while working at GOOD, and went on to form Craft & Commerce in 200X as a digital ad firm focused on elevating organizations that were making a positive impact in the world.
        </p>
        <p class="mb-6 text-xl leading-normal max-w-screen-md">
          Since then, we’ve grown and evolved much like the digital world has, building a team of experts around our core disciplines of strategy + planning, data + analytics, copywriting, design + branding. And we’ve found bold partners in education, civic progress, non-profit, public policy, and more who share our vision of social purpose.
        </p>
        <p class="mt-24 text-xl din">
          MEET THE TEAM THAT MAKES IT POSSIBLE —
        </p>
      </div>
    </section>
    <!-- Team -->
    <div
      v-for="edge in $page.allTeamMembers.edges"
      :key="edge.node.id"
    >
      <div
        v-for="item in edge.node.data"
        :key="item.id"
      >
        <section class="mx-auto mb-24 max-w-screen-lg">
          <div class="flex items-center team-card">
            <div>
              <g-image
                src="~/img/team/mark.png"
                class="max-w-sm rounded-full"
              />
            </div>
            <div class="pl-12">
              <h2 class="text-3xl font-extrabold">
                {{ item.name }}
              </h2>
              <p class="uppercase din">
                {{ item.title }}
              </p>
              <p class="max-w-md mt-8">
                {{ item.shortBio }}
                <a
                  href="#modal"
                  class="px-1 py-0 text-sm font-extrabold bg-primary-color"
                >+</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- Callout -->
    <section class="container mx-auto max-w-screen-lg join-the-team">
      <div class="flex flex-col items-center justify-center py-16">
        <h2 class="text-4xl font-extrabold text-center">
          Join the team at Craft &amp; Commerce
        </h2>
        <p class="mx-auto text-lg text-center max-w-screen-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien. Maecenas sed enim ut sem viverra aliquet. Integer feugiat scelerisque varius morbi.
        </p>
        <p class="inline-block px-2 py-1 mt-8 text-center bg-white shadow-sm din">
          WHAT ARE YOU WAITING FOR?
          <a
            href="#"
            class="underline uppercase"
          >Drop us a line.</a>
        </p>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query TeamMembers {
    allTeamMembers {
      edges {
        node {
          data {
            id
            photo
            name
            title
            shortBio
            fullBio
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style scoped>
  .hero {
    width: 100%;
    height: 800px;
    background: url('~@/img/global/diagonal-bg.png') no-repeat center center;
    background-size: cover;
  }

  .join-the-team {
    width: 100%;
    background: url('~@/img/global/gray-decorated-square.png') no-repeat center center;
    background-size: cover;
  }
</style>
