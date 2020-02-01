<template>
  <Layout>
    <!-- Hero -->
    <section class="mt-20 hero">
      <div class="container px-6 mx-auto">
        <h1 class="mb-4 text-5xl font-extrabold proxima">
          Behind the <span class="text-strike">curtain</span>...
        </h1>
        <p class="mb-6 text-xl leading-normal max-w-screen-md">
          West Philadelphia, born and — hang on, that’s a different orgin story ;)
        </p>
        <p class="mb-6 text-xl leading-normal max-w-screen-md">
          Here’s ours: founders Mark and Jordan, colleagues at GOOD, decided to change their lives in 200X, and started building a company from scratch. Craft & Commerce, born as a purposeful agency, grew through a combination of hustle and good fortune.
        </p>
        <p class="mb-6 text-xl leading-normal max-w-screen-md">
          Much like the digital world has, C&C has evolved, building a team of experts around our core strategic and creative disciplines. Along the way we have found bold partners in education, civic progress, non-profit, public policy, and more who share our vision of social purpose.
        </p>
        <p class="mt-20 text-xl din">
          MEET THE TEAM THAT MAKES IT POSSIBLE —
        </p>
      </div>
    </section>
    <!-- Team -->
    <div
      v-for="edge in $page.allTeamMembers.edges"
      :key="edge.node.id"
      class="team-container"
    >
      <div
        v-for="(item, index) in edge.node.data"
        :key="index"
      >
        <section class="mx-auto mb-24 max-w-screen-lg">
          <div class="flex flex-col items-center sm:flex-row team-member">
            <div class="team-member--photo">
              <g-image
                :src="item.photo"
                class="max-w-sm rounded-full"
              />
            </div>
            <div class="team-member--content">
              <h2 class="text-3xl font-extrabold proxima">
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
        <h2 class="mb-6 text-4xl font-extrabold text-center proxima">
          Join the team at Craft &amp; Commerce
        </h2>
        <p class="mx-auto text-lg text-center max-w-screen-md">
          Our hands-on team of digital media specialists believes in achieving better results for causes that matter. We're based in New York City but have team members across the country. If you're itching to put your digital skills to work for positive change, we should talk.
        </p>
        <p class="inline-block px-2 pt-1 mt-8 text-center bg-white shadow-sm din">
          WHAT ARE YOU WAITING FOR?
          <a
            href="mailto:hello@craftand.com"
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

<style lang="scss" scoped>
  .hero {
    width: 100%;
    height: 750px;
    background: url('~@/assets/img/global/diagonal-bg.png') no-repeat center center;
    background-size: contain;
  }

  .join-the-team {
    width: 100%;
    background: url('~@/assets/img/global/gray-decorated-square.png') no-repeat center center;
    background-size: cover;
  }

/* Programatically re-order the team member cards into a left / right pattern */
.team-container {
  @media (min-width: 1179px) {
      padding-left: 9rem;
  }
  > div:nth-child(even) {
    .team-member {
      &--photo {
        order: 2;
      }
      &--content {
        order: 1;
        padding-right: 3em;
        text-align: right;
      }
    }
  }
  > div:nth-child(odd) {
    .team-member {
      &--content {
        padding-left: 3em;
      }
    }
  }
}

</style>
