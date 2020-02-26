<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <Close
            class="modal-default-button"
            @click="$emit('close')"
          />
          <div
            slot="body"
            class="modal-body-content"
          >
            <div class="modal-body-content_img">
              <slot name="photo" />
            </div>
            <div class="modal-body-content_text">
              <h2 class="text-3xl font-bold proxima">
                <slot name="name" />
              </h2>
              <h4 class="mb-4 uppercase text-md din">
                <slot name="title" />
              </h4>
              <p class="pr-8">
                <slot name="content" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Close from '@/assets/img/icons/close.svg'
export default {
  components: {
    Close
  }
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
  background: hsla(0, 0%, 20%,.8);
  display: table;
  transition: opacity 0.2s ease-in;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  max-height: calc(100vh - 0px);
  overflow-y: auto;

  @media (min-width: 1024px) {
      max-width: 1200px;
      max-height: initial;
      overflow-y: initial;
  }
}

.modal-body-content {
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }

  &_img {
    flex: 1;
  }

  &_text {
      text-align: left;
      padding: 24px;
      font-weight: 400;
      flex: 1;

      > p {
          font-size: 16px;
      }
  }
}

.modal-default-button {
  width: 12px;
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
