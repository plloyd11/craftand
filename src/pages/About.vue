<template>
  <Layout>
    <!-- Hero -->
    <section class="my-12 lg:mb-0 lg:mt-20 hero">
      <div class="container px-6 mx-auto">
        <h1 class="mb-4 text-3xl font-extrabold leading-none lg:text-5xl proxima">
          What’s your <span class="text-strike">desired outcome?</span>
        </h1>
        <p class="max-w-screen-lg mb-6 text-lg leading-normal lg:text-xl">
          We were humbled to listen in as a dear friend and collaborator recently described our work, far better than we ever could: <span class="italic">“They’re an agency, but they’re different. They start by asking the question ‘what’s your desired outcome?’ And then they work backwards to figure out how to get you there.”</span>
        </p>
        <p class="max-w-screen-lg mb-6 text-lg leading-normal lg:text-xl">
          In those few words, our friend synthesized a five-year mission to reimagine the way causes deploy their marketing dollars, helping them to create more modern strategies, more efficient and effective media plans, and, ultimately, more real-world impact.
        </p>
        <p class="max-w-screen-lg mb-6 text-lg leading-normal lg:text-xl">
          What began as an insight that tugged relentlessly at co-founders Mark & Jordan as they worked on the front lines of cause marketing at GOOD/Upworthy—that impactful storytelling is only half the distance to the goal; breaking through the noise and turning attention into action is the hard-fought ground game that so often makes the difference—C&C has today helped to pass landmark affordable housing reform in California, modernized growth for one of the country’s oldest and most beloved organizations, and inspired millions of millennial women to assess their cancer risk. Our work has been awarded “Social Media Campaign of the Year” by AdAge and Modern Healthcare, received a Webby, and recognized as an Effies finalist. And as the media landscape continues to evolve, our world-class, roll-up-your-sleeves team of strategists, tacticians, and creatives evolves with it—while remaining steadfast to that original North Star. <span class="font-semibold"> All to say: <span class="italic">What’s your desired outcome?</span></span>
        </p>
        <p class="mt-12 text-lg tracking-wider uppercase lg:mt-16 lg:text-xl din">
          Meet the team that makes it possible—
        </p>
      </div>
    </section>
    <!-- Team -->
    <div
      v-for="edge in $page.allTeamMembers.edges"
      :key="edge.node.id"
      class="mt-12 team-container"
    >
      <div
        v-for="(item, index) in edge.node.data"
        :key="index"
      >
        <section class="max-w-screen-lg mx-auto mb-24">
          <div class="flex flex-col items-center justify-center sm:flex-row team-member">
            <div class="team-member--photo">
              <g-image
                :src="item.photo"
                class="max-w-sm mb-4 rounded-full sm:mb-0"
              />
            </div>
            <div class="team-member--content">
              <h2 class="text-3xl font-extrabold proxima">
                {{ item.name }}
              </h2>
              <p class="uppercase din">
                {{ item.title }}
              </p>
              <p class="max-w-md px-6 mt-8 sm:px-0">
                {{ item.shortBio }}
                <a
                  class="px-1 py-0 text-sm font-extrabold cursor-pointer bg-primary-color"
                  @click.stop="triggerModal(item)"
                >+</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- Modal Component -->
    <TeamModal
      v-if="showModal"
      aria-label="close"
      @close="showModal = false"
    >
      <template v-slot:photo>
        <g-image
          :src="teamMember.photo"
          :alt="teamMember.name"
          class="img-responsive"
        />
      </template>
      <template v-slot:name>
        {{ teamMember.name }}
      </template>
      <template v-slot:title>
        {{ teamMember.title }}
      </template>
      <template v-slot:content>
        {{ teamMember.fullBio }}
      </template>
    </TeamModal>
    <!-- Callout -->
    <section class="container max-w-screen-lg px-6 mx-auto mb-12 sm:px-0 join-the-team lg:mb-24">
      <div class="flex flex-col items-center justify-center py-16">
        <h2 class="mb-6 text-xl font-extrabold text-center sm:text-4xl proxima">
          Join the team at Craft &amp; Commerce
        </h2>
        <p class="max-w-screen-md mx-auto text-lg text-center">
          Our hands-on team of paid and digital media specialists is dedicated to achieving better results, for things that matter. We're based in New York City but have team members across the country. If you're ready to put your skills to work for positive change, we should talk.
        </p>
        <p class="inline-block px-2 pt-1 mt-8 text-center uppercase bg-white shadow-sm din">
          See current openings <g-link
            to="/careers"
            class="underline"
          >
            here
          </g-link>
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
import TeamModal from '~/components/TeamModal.vue'
export default {
  components: {
    TeamModal
  },
  metaInfo: {
    title: 'About us'
  },
  data () {
    return {
      showModal: false,
      teamMember: {}
    }
  },
  methods: {
    triggerModal (item) {
      this.teamMember = item
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    width: 100%;
    @media (min-width: 1024px) {
      padding-bottom: 5em;
      background: url('~@/assets/img/global/diagonal-bg.png') no-repeat bottom;
      background-size: contain;
    }
  }

  .join-the-team {
    width: 100%;
    background: url('~@/assets/img/global/gray-decorated-square.png') no-repeat center center;
    background-size: cover;
  }

/* Programatically re-order the team member cards into a left / right pattern */
.team-container {
  > div:nth-child(even) {
    .team-member {
      &--photo {
        @media (min-width: 1024px) {
          order: 2;
        }
      }
      &--content {
        text-align: center;
        @media (min-width: 1024px) {
          order: 1;
          order: 1;
          padding-right: 3em;
          text-align: right;
        }
      }
    }
  }
  > div:nth-child(odd) {
    .team-member {
      &--content {
        text-align: center;
        @media (min-width: 1024px) {
          padding-left: 3em;
          text-align: left;
        }
      }
    }
  }
}

</style>
