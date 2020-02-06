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
          <div
            slot="body"
            class="modal-body-content"
          >
            <div class="modal-body-content_img">
              <g-image
                src="~/assets/img/craft/mark-barker.png"
                alt=""
                class="img-responsive"
              />
            </div>
            <div class="modal-body-content_text">
              <h2 class="text-3xl font-bold proxima">
                Mark Barker
              </h2>
              <h4 class="mb-4 uppercase text-md din">
                Co-founder / strategy lead
              </h4>
              <p class="pr-8">
                Mark is a data-driven marketer with deep experience in integrated media strategy and social impact advertising. Prior to founding Craft & Commerce, Mark was General Manager of GOOD’s digital platform and GOOD/Corps agency business, where he crafted innovative, content-based consumer engagements for the likes of Gates Foundation, Google and Starbucks. Working within high-growth corporate divisions such as MTV Networks’ cross-property Generator unit and McCann Erickson’s TAG young adult marketing speciality--and as an independent consultant--Mark has driven measurable, meaningful business and social impact outcomes for leading startups, brands, and non-profit organizations, including Nativo, Verizon, and the NFL. Mark holds an MBA from the Acton School of Business, and a BA from Washington & Lee University. Mark is a frequent author and speaker at the intersection of purpose and performance, and serves as an advisor to several startups and community-based non-profits.
              </p>
            </div>
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
