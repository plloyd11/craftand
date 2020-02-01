<template>
  <section class="container py-16 mx-auto logo-box">
    <h3 class="mb-16 text-center uppercase din">
      We're proud to work with:
    </h3>
    <div class="px-24 logos">
      <GirlScouts class="w-24" />
      <Rockefeller class="w-24" />
      <g-image
        src="~/assets/img/logos/autism-speaks.png"
      />
      <ChanZuckerberg class="w-24" />
      <Cuny class="w-24" />
      <g-image
        src="~/assets/img/logos/sfmta.png"
      />
      <Macarthur class="w-24" />
      <NAL class="w-24" />
      <MTC class="w-24" />
      <UnitedWay class="w-24" />
      <MFP class="w-24" />
      <CNYCN class="w-24" />
      <BAHFA class="w-24" />
      <NYU class="w-24" />
      <JohnsonJohnson class="w-24" />
      <STB class="w-24" />
      <BrightPink class="w-24" />
      <g-image
        src="~/assets/img/logos/kellogg.png"
      />
      <CRR class="w-24" />
      <g-image
        src="~/assets/img/logos/carton-council.png"
      />
    </div>
  </section>
</template>

<script>
import GirlScouts from '@/assets/img/logos/girl-scouts.svg'
import Rockefeller from '@/assets/img/logos/rockefeller.svg'
import ChanZuckerberg from '@/assets/img/logos/chan-zuckerberg.svg'
import Cuny from '@/assets/img/logos/cuny.svg'
import Macarthur from '@/assets/img/logos/macarthur.svg'
import NAL from '@/assets/img/logos/nal.svg'
import MTC from '@/assets/img/logos/mtc.svg'
import UnitedWay from '@/assets/img/logos/united-way.svg'
import MFP from '@/assets/img/logos/mfp.svg'
import CNYCN from '@/assets/img/logos/cnycn.svg'
import BAHFA from '@/assets/img/logos/bahfa.svg'
import NYU from '@/assets/img/logos/nyu.svg'
import JohnsonJohnson from '@/assets/img/logos/johnson-johnson.svg'
import STB from '@/assets/img/logos/stb.svg'
import BrightPink from '@/assets/img/logos/bright-pink.svg'
import CRR from '@/assets/img/logos/crr.svg'

export default {
  components: {
    GirlScouts,
    Rockefeller,
    ChanZuckerberg,
    Cuny,
    Macarthur,
    NAL,
    MTC,
    UnitedWay,
    MFP,
    CNYCN,
    BAHFA,
    NYU,
    JohnsonJohnson,
    STB,
    BrightPink,
    CRR
  }
}
</script>

<style lang="scss" scoped>
  .logo-box {
    width: 100%;
    background: url('~@/assets/img/global/gray-decorated-square.png') no-repeat center center;
    background-size: cover;
  }

  .logos {
    display: grid;
    row-gap: 32px;
    column-gap: 72px;
    grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
    align-items: center;
    justify-items: center;
  }
</style>
