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
      />
      <g-image
        src="~/assets/img/logos/macarthur.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/nal.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/mtc.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/united.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/mfp.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/cnycn.png"
        class="w-28"
      />
      <g-image
        src="~/assets/img/logos/bahfa.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/nyu.png"
        class="w-48"
      />
      <g-image
        src="~/assets/img/logos/johnson-johnson.png"
        class="w-48"
      />
      <g-image
        src="~/assets/img/logos/stb.png"
        class="w-16"
      />
      <g-image
        src="~/assets/img/logos/bp.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/kellogg.png"
      />
      <g-image
        src="~/assets/img/logos/crr.png"
        class="w-24"
      />
      <g-image
        src="~/assets/img/logos/carton-council.png"
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
