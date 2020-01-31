<template>
  <Layout>
    <!-- Hero -->
    <section class="container relative px-6 mx-auto">
      <div class="flex items-center justify-center case-study">
        <div class="flex-1 pl-20 case-study--text">
          <h4 class="font-semibold text-gray-700 uppercase text-md din">
            Carton Council
          </h4>
          <h2 class="max-w-sm mt-12 mb-6 text-4xl font-extrabold leading-none proxima">
            Reimagine recycling education
          </h2>
          <p class="max-w-sm mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat aut, iste accusamus eveniet labore. Cupiditate beatae laboriosam autem voluptatibus nam ea velit voluptate? Vitae praesentium facilis doloremque provident saepe.
          </p>
          <span
            class="px-1 pt-1 text-sm uppercase bg-primary-color din"
          >
            Email Acquisition
          </span>
        </div>
        <div class="flex-1 case-study--image">
          <g-image
            src="~/assets/img/case-studies/carton-hero.png"
            class="mb-1"
          />
        </div>
      </div>
      <div class="py-6 hero-callout bg-main-gray">
        <p class="mb-1 text-xl font-bold text-primary-color proxima">
          Messenger lowers Cost Per Email by 150%
        </p>
        <p class="italic text-white text-gray-400">
          Coupled with an average of 0:38 time on content
        </p>
      </div>
    </section>
    <!-- Takeaway -->
    <section class="container mx-auto my-12 max-w-screen-lg takeaway">
      <div class="flex flex-col items-center justify-center py-16">
        <h3 class="mb-6 text-4xl font-extrabold text-center proxima">
          What we learned along the way
        </h3>
        <p class="mx-auto text-center text-md max-w-screen-md">
          When we began this project with Carton Council, Messenger chatbots were relatively new, and we were cautiously optimistic that it could be a good tool for this kind of information-heavy campaign where we aim to gather emails. The results far exceeded expectations, and offered a third benefit we hadn’t anticipated: it allowed us to track intent to recycle, too, opening up the possibility of personalized, ongoing recycling reminders.
        </p>
      </div>
    </section>
    <section>
      <g-image src="~/assets/img/case-studies/video-poster.png" />
    </section>
    <section class="mt-16">
      <p class="w-6/12 mx-auto mb-12 text-4xl leading-normal text-center">
        “With Craft & Commerce, we have been able to see our impact in real time, and know that our message is turning into action.”
      </p>
      <div class="flex flex-col">
        <p class="inline-block px-1 pt-1 mx-auto mb-2 text-sm text-center uppercase bg-primary-color din">
          — Firstname Lastname
        </p>
        <p class="inline-block px-1 pt-1 mx-auto text-sm text-center uppercase bg-primary-color din">
          Digital Media Director, Carton Council
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Services'
  }
}
</script>

<style scoped>

.hero-callout {
  position: absolute;
  width: 700px;
  padding-left: calc(10% - 48px);
  z-index: 100;
  bottom: 4px;
}

.takeaway {
  width: 100%;
  background: url('~@/assets/img/global/yellow-decorated-rectangle.jpg') no-repeat center center;
  background-size: cover;
}

</style>
