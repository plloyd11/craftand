<template>
  <section class="container py-16 mx-auto mb-12 logo-box lg:mb-24">
    <h3 class="mb-12 text-sm tracking-wider text-center uppercase din">
      We're proud to work with:
    </h3>
    <div class="px-6 md:px-24 logos">
      <g-image
        src="~/assets/img/logos/gsusa.png"
        class="w-16 md:w-20"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/johnson-johnson.png"
        class="w-48 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/cmoa.png"
        class="w-24 md:w-48"
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
        class="w-32"
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/sff.png"
        class="w-48 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/mtc.png"
        class="w-48 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/autism-speaks.png"
        class="w-32 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/verizon.png"
        class="w-32 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/bahfa.png"
        class="w-24 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/ncb.png"
        class="w-48 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/macarthur.png"
        class="w-32 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/nyu.png"
        class="w-48 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/rubicon.png"
        class="w-32 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/nflpa.png"
        class="w-32 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/united.png"
        class="w-32 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/world-bank.png"
        class="w-48 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/carton-council.png"
        class="w-32 "
        immediate="true"
      />
      <g-image
        src="~/assets/img/logos/cuny.png"
        class="w-10 md:w-16"
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
    row-gap: 24px;
    column-gap: 64px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    @media (min-width: 768px) {
        row-gap: 48px;
        column-gap: 72px;
        grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
    }
  }
</style>
