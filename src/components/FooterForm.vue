<template>
  <section
    id="newsletter-signup"
    class="flex flex-col items-center justify-center px-6 py-12 sm:py-0 sm:w-8/12 bg-main-gray"
  >
    <h2
      class="mb-4 text-2xl font-bold leading-tight text-center lg:mb-2 lg:text-3xl text-primary-color proxima"
    >
      The best way forward is together.
    </h2>
    <p class="text-sm text-center text-gray-400">
      Stay in touch on social or via email.
    </p>
    <div class="flex items-center justify-between mt-6 mb-2">
      <a href="https://twitter.com/craftandcom" target="_blank" rel="noopener">
        <TwitterBtn class="w-12 mr-6" />
      </a>
      <a
        href="https://www.linkedin.com/company/craftandcomm/"
        target="_blank"
        rel="noopener"
      >
        <LinkedInBtn class="w-12" />
      </a>
    </div>
    <form
      id="mc-embedded-subscribe-form"
      class="w-full max-w-4xl px-8 mx-auto mt-8 footer-form validate"
      action="https://craftand.us15.list-manage.com/subscribe/post?u=fddf53c8e5bc7f77de77b73d4&amp;id=efe67cf7d9"
      method="post"
      name="mc-embedded-subscribe-form"
      novalidate
    >
      <div class="mx-auto footer-form_row-2">
        <div class="w-full mb-6 sm:mb-0 mc-field-group">
          <!-- <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase din"
            for="mce-EMAIL"
          >
            Email
          </label> -->
          <input
            id="mce-EMAIL"
            class="block w-full px-4 py-3 leading-tight text-gray-700 placeholder-gray-600 bg-transparent border border-white appearance-none focus:outline-none focus:bg-white focus:border-gray-500 email"
            type="email"
            name="EMAIL"
            placeholder="Email"
            required
          />
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input
            type="text"
            name="b_fddf53c8e5bc7f77de77b73d4_efe67cf7d9"
            tabindex="-1"
            value=""
          />
        </div>
        <div class="self-end w-6/12 sm:w-full">
          <div
            class="flex items-center px-12 text-gray-300 border border-white cursor-pointer din form-submit focus:shadow-outline focus:outline-none"
          >
            <input
              id="mc-embedded-subscribe"
              class="leading-none bg-transparent"
              type="submit"
              value="SUBMIT"
              name="subscribe"
            />
            <RightArrowWhite class="inline-block w-3 ml-2" />
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import RightArrowWhite from '@/assets/img/icons/right-arrow-white.svg';
import TwitterBtn from '@/assets/img/icons/twitter-button.svg';
import LinkedInBtn from '@/assets/img/icons/linkedin-button.svg';

export default {
  components: {
    RightArrowWhite,
    TwitterBtn,
    LinkedInBtn
  }
};
</script>

<style lang="scss" scoped>
.footer-form {
  &_row-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      display: grid;
      column-gap: 32px;
      grid-template-columns: 1fr 1fr;
    }
  }
  &_row-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr min-content;
    }
  }
}

.form-submit {
  height: 46px;
}
</style>
