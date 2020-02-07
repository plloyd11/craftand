<template>
  <div class="slide">
    <div class="flex flex-col items-center justify-around sm:flex-row">
      <div>
        <slot name="slide-image" />
      </div>
      <div class="max-w-lg">
        <h2 class="mb-6 text-2xl font-bold text-center proxima">
          <slot name="slide-header" />
        </h2>
        <p class="max-w-sm mx-auto text-center">
          <slot name="slide-content" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">

.case-study-carousel {
  width: 100%;
  background: url('~@/assets/img/global/gray-decorated-square.png') no-repeat center center;
  background-size: cover;
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
      // TODO: Come back and fix this!
      position: relative;
      bottom: 250px !important;
      left: 50px !important;
      top: inherit !important;
      flex-direction: column !important;
    }
    &__dot {
      margin: 8px 0;
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

}

</style>
