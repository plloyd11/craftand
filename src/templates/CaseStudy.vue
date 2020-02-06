<template>
  <Layout>
    <!-- Hero -->
    <section class="container relative px-6 mx-auto">
      <div class="flex items-center justify-center case-study">
        <div class="flex-1 pl-20 case-study--text">
          <h4 class="font-semibold text-gray-700 uppercase text-md din">
            {{ $page.caseStudy.title }}
          </h4>
          <h2 class="max-w-sm mt-12 mb-6 text-4xl font-extrabold leading-none proxima">
            {{ $page.caseStudy.heading1 }}
          </h2>
          <p class="max-w-sm mb-8">
            {{ $page.caseStudy.body1 }}
          </p>
          <span
            class="px-1 pt-1 text-sm uppercase bg-primary-color din"
          >
            Email Acquisition
          </span>
        </div>
        <div class="flex-1 case-study--image">
          <g-image
            :src="$page.caseStudy.photo"
            class="mb-1"
          />
        </div>
      </div>
      <div class="py-6 hero-callout bg-main-gray">
        <p class="mb-1 text-xl font-bold text-primary-color proxima">
          {{ $page.caseStudy.heading2 }}
        </p>
        <p class="italic text-white text-gray-400">
          {{ $page.caseStudy.body2 }}
        </p>
      </div>
    </section>
    <!-- Takeaway -->
    <section class="container mx-auto my-12 max-w-screen-lg takeaway">
      <div class="flex flex-col items-center justify-center py-16">
        <h3 class="mb-6 text-4xl font-extrabold text-center proxima">
          {{ $page.caseStudy.heading3 }}
        </h3>
        <p class="mx-auto text-center text-md max-w-screen-md">
          {{ $page.caseStudy.body3 }}
        </p>
      </div>
    </section>
    <section>
      <g-image :src="$page.caseStudy.videoPoster" />
    </section>
    <section class="mt-16">
      <p class="w-6/12 mx-auto mb-12 text-4xl leading-normal text-center">
        {{ $page.caseStudy.heading4 }}
      </p>
      <div class="flex flex-col">
        <p
          v-for="(item, index) in $page.caseStudy.body4.split('\n')"
          :key="index"
          :class="index === 0 && 'mb-2'"
          class="inline-block px-1 pt-1 mx-auto text-sm text-center uppercase bg-primary-color din"
        >
          {{ item }}
        </p>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query($path: String!) {
    caseStudy(path: $path) {
      title
      heading1
      body1
      photo
      heading2
      body2
      heading3
      body3
      videoPoster
      heading4
      body4
    }
  }
</page-query>

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
