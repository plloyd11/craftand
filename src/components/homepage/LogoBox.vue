<template>
  <section class="container py-16 mx-auto mb-12 logo-box lg:mb-24">
    <h3 class="mb-12 text-sm tracking-wider text-center uppercase din">
      We're proud to work with:
    </h3>
    <div class="px-24 logos">
      <g-image
        src="~/assets/img/logos/gsusa.png"
        class="w-24"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/sfmta.png"
        class="w-32"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/ilrc.png"
        class="w-24"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/rockerfeller.png"
        class="w-48"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/cz.png"
        class="w-24"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/bp.png"
        class="hidden w-32 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/sff.png"
        class="hidden w-48 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/mtc.png"
        class="hidden w-48 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/autism-speaks.png"
        class="hidden w-32 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/johnson-johnson.png"
        class="hidden w-48 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/bahfa.png"
        class="hidden w-24 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/ncb.png"
        class="hidden w-48 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/macarthur.png"
        class="hidden w-32 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/nyu.png"
        class="hidden w-48 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/kellogg.png"
        class="hidden w-32 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/crr.png"
        class="hidden w-24 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/united.png"
        class="hidden w-32 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/world-bank.png"
        class="hidden w-48 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/carton-council.png"
        class="hidden w-32 sm:block"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/cuny.png"
        class="hidden w-20 sm:block"
        immediate="true"
      />
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
  .logo-box {
    width: 100%;
    background: url('~@/assets/img/global/gray-decorated-square.png') no-repeat center center;
    background-size: cover;
  }

  .logos {
    display: grid;
    row-gap: 48px;
    column-gap: 72px;
    grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
    align-items: center;
    justify-items: center;
  }
</style>
