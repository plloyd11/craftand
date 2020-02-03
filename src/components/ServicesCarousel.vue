<template>
  <section class="container relative mx-auto mt-2">
    <agile
      :center-mode="true"
    >
      <div class="slide">
        <div class="flex items-center justify-center">
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
      </div>
      <div class="slide">
        <div class="flex items-center justify-center">
          <div class="mr-12">
            <BehaviorChange class="w-48" />
          </div>
          <div class="max-w-lg">
            <h2 class="mb-2 text-3xl font-bold proxima">
              Behavior Change
            </h2>
            <p class="max-w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, voluptatum consequatur fugiat dolores alias perspiciatis tempora adipisci tempore exercitationem labore explicabo aliquid.
            </p>
            <p class="mt-8 mb-4 text-sm uppercase din">
              Related Case Studies
            </p>
            <ul>
              <li class="my-3">
                Carton Council
              </li>
              <li class="my-3">
                VZLA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="flex items-center justify-center">
          <div class="mr-12">
            <ProgramGrowth />
          </div>
          <div class="max-w-lg">
            <h2 class="mb-2 text-3xl font-bold proxima">
              Program Growth + Delivery
            </h2>
            <p class="max-w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, voluptatum consequatur fugiat dolores alias perspiciatis tempora adipisci tempore exercitationem labore explicabo aliquid.
            </p>
            <p class="mt-8 mb-4 text-sm uppercase din">
              Related Case Studies
            </p>
            <ul>
              <li class="my-3">
                AYR
              </li>
              <li class="my-3">
                CZI
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="flex items-center justify-center">
          <div class="mr-12">
            <LeadGeneration />
          </div>
          <div class="max-w-lg">
            <h2 class="mb-2 text-3xl font-bold proxima">
              Lead Generation
            </h2>
            <p class="max-w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, voluptatum consequatur fugiat dolores alias perspiciatis tempora adipisci tempore exercitationem labore explicabo aliquid.
            </p>
            <p class="mt-8 mb-4 text-sm uppercase din">
              Related Case Studies
            </p>
            <ul>
              <li class="my-3">
                Sonoma County
              </li>
              <li class="my-3">
                CRR
              </li>
            </ul>
          </div>
        </div>
      </div>
    </agile>
  </section>
</template>

<script>
import { VueAgile } from 'vue-agile'
import IssueEducation from '~/assets/img/services/issue-education.svg'
import BehaviorChange from '~/assets/img/services/behavior-change.svg'
import ProgramGrowth from '~/assets/img/services/program-growth.svg'
import LeadGeneration from '~/assets/img/services/lead-generation.svg'

export default {
  metaInfo: {
    title: 'Services'
  },
  components: {
    agile: VueAgile,
    IssueEducation,
    BehaviorChange,
    ProgramGrowth,
    LeadGeneration
  }
}
</script>

<style lang="scss">
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
