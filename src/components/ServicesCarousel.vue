<template>
  <section class="container relative mx-auto mt-2">
    <agile
      :center-mode="true"
      :autoplay="true"
      :dots="false"
    >
      <div class="slide">
        <div class="flex flex-col items-center justify-center sm:flex-row">
          <div class="sm:mr-12">
            <Strategy />
          </div>
          <div class="max-w-xl px-6 sm:px-0">
            <h2 class="my-2 text-xl font-bold sm:text-3xl proxima">
              Digital and Paid Media Strategy
            </h2>
            <div class="flex flex-col pl-4 sm:pl-0 sm:flex-row">
              <ul class="mr-12">
                <li>Attention research and planning</li>
                <li>Audience segmentation</li>
                <li>Channel analysis and strategy</li>
                <li>Content strategy</li>
              </ul>
              <ul>
                <li>Message development</li>
                <li>In-market testing</li>
                <li>Performance benchmarking</li>
                <li>Campaign budgeting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="flex flex-col items-center justify-center sm:flex-row">
          <div class="sm:mr-12">
            <MediaPlanning />
          </div>
          <div class="max-w-xl px-6 sm:px-0">
            <h2 class="my-2 text-xl font-bold sm:text-3xl proxima">
              Integrated Media Planning and Buying
            </h2>
            <div class="flex flex-col pl-4 sm:pl-0 sm:flex-row">
              <ul class="mr-12">
                <li>Cross-platform social</li>
                <li>Programmatic native, video, and display</li>
                <li>Digital audio and podcasts</li>
                <li>Terrestrial radio</li>
                <li>Sponsored and custom content integrations</li>
              </ul>
              <ul>
                <li>Linear and streaming TV</li>
                <li>Search engine marketing (incl. Google Grants)</li>
                <li>Out-of-home</li>
                <li>Print</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="flex flex-col items-center justify-center sm:flex-row">
          <div class="sm:mr-12">
            <TestingIteration />
          </div>
          <div class="max-w-xl px-6 sm:px-0">
            <h2 class="my-2 text-xl font-bold sm:text-3xl proxima">
              Performance Optimization
            </h2>
            <div class="flex flex-col max-w-md pl-4 sm:pl-0 sm:flex-row sm:max-w-full">
              <ul class="mr-12">
                <li>Multivariant testing</li>
                <li>Active, cross-platform media monitoring and hands-on management </li>
                <li>Dynamic, responsive campaign iteration, optimization, and scale</li>
                <li>Actionable, real-time measurement and reporting</li>
              </ul>
              <ul>
                <li>Landing page and conversion rate optimization</li>
                <li>Multi-touch attribution</li>
                <li>Comprehensive campaign analysis and go-forward recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="flex flex-col items-center justify-center sm:flex-row">
          <div class="sm:mr-12">
            <GrowthCapacity />
          </div>
          <div class="max-w-xl px-6 sm:px-0">
            <h2 class="my-2 text-xl font-bold sm:text-3xl proxima">
              Growth Support and Capacity Building
            </h2>
            <div class="flex flex-col pl-4 sm:pl-0 sm:flex-row">
              <ul class="mr-12">
                <li>Digital content creation</li>
                <li>Design support and brand enhancement </li>
                <li>Channel optimization and best practice implementation</li>
                <li>Content calendaring and channel management</li>
              </ul>
              <ul>
                <li>Strategic social promotion</li>
                <li>KPI dashboard creation</li>
                <li>Tech stack analysis and implementation</li>
                <li>Team training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </agile>
  </section>
</template>

<script>
import { VueAgile } from 'vue-agile'
import GrowthCapacity from '~/assets/img/services/growth-capacity.svg'
import Strategy from '~/assets/img/services/digital-strategy.svg'
import TestingIteration from '~/assets/img/services/iteration.svg'
import MediaPlanning from '~/assets/img/services/media-planning-buying.svg'

export default {
  metaInfo: {
    title: 'Services'
  },
  components: {
    agile: VueAgile,
    TestingIteration,
    MediaPlanning,
    GrowthCapacity,
    Strategy
  }
}
</script>

<style lang="scss" scoped>

li {
  list-style-type: disc;
  list-style-position: outside;
}

.agile {
  &__nav-button {
    background: transparent;
    border: none;
    color: #ccc;
    cursor: pointer;
    font-size: 24px;
    transition-duration: .3s;
    &:hover {
      color: #888;
    }
  }
  &__actions {
    justify-content: center;
  }
  &__nav-button {

  }
  &__dots {
    position: relative;
    top: 128px;
    display: none;
  }
  &__dot {
    margin: 0 10px;
    button {
      background-color: #bababa;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      height: 10px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      transition-duration: .3s;
      width: 10px;
    }
    &--current {
      button {
        background-color: #333;
      }
    }
  }
}

</style>
