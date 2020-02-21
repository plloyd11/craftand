<template>
  <section class="container relative mx-auto mt-2">
    <agile
      :center-mode="true"
    >
      <div class="slide">
        <div class="flex flex-col items-center justify-center sm:flex-row">
          <div class="sm:mr-12">
            <Strategy />
          </div>
          <div class="max-w-xl">
            <h2 class="mb-2 text-3xl font-bold proxima">
              Digital and Paid Media Strategy
            </h2>
            <div class="flex">
              <ul class="mr-12">
                <li>Quant / qual research</li>
                <li>Message development</li>
                <li>In-market testing</li>
                <li>Channel analysis and strategy</li>
              </ul>
              <ul>
                <li>Content strategy</li>
                <li>Benchmarks and best practices</li>
                <li>Campaign budgeting</li>
                <li>Performance dashboard</li>
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
          <div class="max-w-xl">
            <h2 class="mb-2 text-3xl font-bold proxima">
              Integrated Media Planning and Buying
            </h2>
            <div class="flex">
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
          <div class="max-w-2xl">
            <h2 class="mb-2 text-3xl font-bold proxima">
              Rigorous Testing, Iteration, and Optimization
            </h2>
            <div class="flex">
              <ul class="mr-12">
                <li>Multivariant test matrix</li>
                <li>Hands-on campaign management and optimization</li>
                <li>Actionable, real-time measurement</li>
                <li>Comprehensive campaign reporting and go-forward recommendations</li>
              </ul>
              <ul>
                <li>Landing page conversion rate</li>
                <li>Multi-touch attribution</li>
                <li>Cross device & cross-channel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="flex flex-col items-center justify-center sm:flex-row">
          <div class="sm:mr-12">
            <AdvisoryCapacity />
          </div>
          <div class="max-w-2xl">
            <h2 class="mb-2 text-3xl font-bold proxima">
              Advisory and Capacity Building
            </h2>
            <div class="flex">
              <ul class="mr-12">
                <li>Email creation and execution</li>
                <li>Editorial calendaring</li>
                <li>Social content creation</li>
                <li>Social page management</li>
              </ul>
              <ul>
                <li>Strategic promotion </li>
                <li>Measurement and analysis</li>
                <li>Team training</li>
                <li>Design support and brand enhancement</li>
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
import AdvisoryCapacity from '~/assets/img/services/advisory-capacity.svg'
import Strategy from '~/assets/img/services/strategy.svg'
import TestingIteration from '~/assets/img/services/testing-iteration.svg'
import MediaPlanning from '~/assets/img/services/media-planning.svg'

export default {
  metaInfo: {
    title: 'Services'
  },
  components: {
    agile: VueAgile,
    TestingIteration,
    MediaPlanning,
    AdvisoryCapacity,
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
    display: none;
  }
  &__dots {
    position: relative;
    top: 128px;
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
