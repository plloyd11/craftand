<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button
            class="modal-default-button"
            @click="$emit('close')"
          >
            X
          </button>
          <div class="modal-body">
            <!-- <div class="modal-body-content_img">
              <g-image :src="item.photo" />
            </div>
            <div class="modal-body-content_text">
              <h2 class="text-3xl font-extrabold proxima">
                {{ item.name }}
              </h2>
              <p class="uppercase din">
                {{ item.title }}
              </p>
              <p class="max-w-md mt-8">
                {{ item.fullBio }}
              </p> -->
            <p>Test</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 20%,0.1);
  display: table;
  transition: opacity 0.3s ease;
  overflow-y: scroll;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  overflow-y: scroll;
}

.modal-container {
  margin: 0px auto;
  position: relative;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  max-height: calc(100vh - 0px);
  overflow-y: auto;

  @media (min-width: 1024px) {
      width: 1200px;
      max-height: initial;
      overflow-y: initial;
  }
}

.modal-body-content {
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
  }

  &_text {
      padding: 30px 20px;

      @media (min-width: 1024px) {
          padding: 60px 40px 40px;
      }

      h2 {
          font-weight: 600;
      }

      > p {
          font-size: 16px;
          line-height: 1.4;
      }
  }
}

.modal-default-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 15px;
  cursor: pointer;
  color: #333e48;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

</style>
