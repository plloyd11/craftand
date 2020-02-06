<template>
  <section class="container py-16 mx-auto logo-box">
    <h3 class="mb-16 text-center uppercase din">
      We're proud to work with:
    </h3>
    <div class="px-24 logos">
      <g-image
        src="~/assets/img/logos/gsusa.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/rockerfeller.png"
        class="w-48"
      />
      <g-image
        src="~/assets/img/logos/autism-speaks.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/cz.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/cuny.png"
        class="w-20"
      />
      <g-image
        src="~/assets/img/logos/sfmta.png"
        class="w-32"
      />
      <g-image
        src="~/assets/img/logos/macarthur.png"
        class="w-32"
      />
      <g-image
        src="~/assets/img/logos/nal.png"
        class="hidden w-24 sm:block"
      />
      <g-image
        src="~/assets/img/logos/mtc.png"
        class="hidden w-24 sm:block"
      />
      <g-image
        src="~/assets/img/logos/united.png"
        class="hidden w-32 sm:block"
      />
      <g-image
        src="~/assets/img/logos/mfp.png"
        class="hidden w-24 sm:block"
      />
      <g-image
        src="~/assets/img/logos/cnycn.png"
        class="hidden w-28 sm:block"
      />
      <g-image
        src="~/assets/img/logos/bahfa.png"
        class="hidden w-24 sm:block"
      />
      <g-image
        src="~/assets/img/logos/nyu.png"
        class="hidden w-48 sm:block"
      />
      <g-image
        src="~/assets/img/logos/johnson-johnson.png"
        class="hidden w-48 sm:block"
      />
      <g-image
        src="~/assets/img/logos/stb.png"
        class="hidden w-16 sm:block"
      />
      <g-image
        src="~/assets/img/logos/bp.png"
        class="hidden w-32 sm:block"
      />
      <g-image
        src="~/assets/img/logos/kellogg.png"
        class="hidden w-32 sm:block"
      />
      <g-image
        src="~/assets/img/logos/crr.png"
        class="hidden w-24 sm:block"
      />
      <g-image
        src="~/assets/img/logos/carton-council.png"
        class="hidden w-32 sm:block"
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
