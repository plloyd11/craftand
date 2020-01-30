<template>
  <Layout>
    <!-- Hero -->
    <section class="hero">
      <div class="container flex items-start px-6 py-16 mx-auto bg-main-gray-semi-transparent">
        <div class="w-8/12">
          <h2 class="mb-8 text-5xl font-extrabold text-white proxima">
            All method, no madness.
          </h2>
          <p class="mb-6 text-xl leading-normal text-white max-w-screen-sm">
            At Craft & Commerce, we‘ve thrown out our cookie-cutters: instead, we take a broad view of the tools available, and calibrate to your desired outcome, tilting momentum toward even the most enigmatic goals.
          </p>
          <p class="mb-6 text-xl leading-normal text-white max-w-screen-sm">
            One of the ways we like to begin is by defining how we’ll measure success: is success a million downloads, or a dozen downloads by just the right people? Is it broad awareness, or do you need to gauge how people are reacting?
          </p>
          <p class="mb-6 text-xl leading-normal text-white max-w-screen-sm">
            How might you move the needle with the right method in hand?
          </p>
        </div>
        <div class="w-4/12 border-l-2 border-primary-color">
          <h4 class="pl-4 mb-8 font-bold text-white uppercase din">
            Focus Areas
          </h4>
          <ul class="text-white uppercase din hero-list">
            <li class="pl-8">
              Non-Profits
            </li>
            <li>Advocacy Organizations</li>
            <li>Purpose-Driven Brands</li>
            <li>Foundations</li>
            <li>Educators</li>
            <li>State, Local, and Regional Government Agencies and Planning Authorities</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Tearsheet -->
    <aside class="flex items-center justify-center">
      <g-link to="/">
        <div class="px-4 py-8 bg-main-gray">
          <TearSheet class="w-8 mx-auto mb-4" />
          <p class="w-32 text-sm text-center text-white uppercase din">
            Download <br> our services tearsheet
          </p>
        </div>
      </g-link>
    </aside>
    <!-- Services Carousel -->
    <section class="py-12 -my-12 services-carousel">
      <div class="flex items-center justify-center py-48">
        <div class="mr-12">
          <IssueEducation class="w-64" />
        </div>
        <div class="max-w-lg">
          <h2 class="mb-2 text-3xl font-bold proxima">
            Issue Education
          </h2>
          <p class="max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, voluptatum consequatur fugiat dolores alias perspiciatis tempora adipisci tempore exercitationem labore explicabo aliquid.
          </p>
          <p class="mt-8 mb-4 text-sm uppercase din">
            Related Case Studies
          </p>
          <ul>
            <li class="my-3">
              3PS for CA
            </li>
            <li class="my-3">
              Maine Family Planning
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Callout -->
    <section class="container mx-auto mt-24 max-w-screen-lg right-stuff">
      <div class="flex flex-col items-center justify-center py-16">
        <p class="mb-8 uppercase din">
          The right stuff
        </p>
        <h2 class="mb-2 text-5xl font-extrabold text-center proxima">
          The C&amp;C Toolbox:
        </h2>
        <p class="mx-auto text-lg text-center max-w-screen-md">
          Media Planning & Buying • Campaign Dashboard Development • Creative Development • Copywriting • Message Development • Market Research
        </p>
      </div>
    </section>
    <!-- Quote -->
    <section class="container max-w-xl mx-auto mt-12 text-center">
      <div class="flex flex-col items-center justify-center py-16">
        <p class="mb-8 text-4xl">
          <span class="block mb-8">"I’ve worked with a lot of media folks in my career.</span> The Craft & Commerce team is <br> the smartest and most effective I've ever run into.”
        </p>
        <p class="px-3 pt-2 uppercase din bg-primary-color">
          —Bright Pink
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
import TearSheet from '~/assets/img/icons/tearsheet.svg'
import IssueEducation from '~/assets/img/services/issue-education.svg'

export default {
  metaInfo: {
    title: 'Services'
  },
  components: {
    TearSheet,
    IssueEducation
  }
}
</script>

<style scoped>
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    background: url('~@/assets/img/services/services-hero.jpg') no-repeat center center;
    background-size: cover;
  }

  .hero-list li {
    padding-left: 1rem;
    margin-bottom: 1.25rem;
  }

  .services-carousel {
    width: 100%;
    background: url('~@/assets/img/global/diagonal-bg.png') no-repeat center center;
    background-size: cover;
  }

  .right-stuff {
    width: 100%;
    background: url('~@/assets/img/global/gray-decorated-square.png') no-repeat center center;
    background-size: cover;
  }

</style>
