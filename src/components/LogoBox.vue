<template>
  <section class="container py-16 mx-auto logo-box">
    <h3 class="mb-16 text-center uppercase din">
      We're proud to work with:
    </h3>
    <div class="logos">
      <div class="flex flex-wrap items-center mb-8 justify-evenly">
        <GirlScouts class="w-24" />
        <Rockefeller class="w-24" />
        <AutismSpeaks class="w-24" />
        <ChanZuckerberg class="w-24" />
        <Cuny class="w-24" />
      </div>
      <div class="flex flex-wrap items-center mb-8 justify-evenly">
        <SFMTA class="w-24" />
        <Macarthur class="w-24" />
        <NAL class="w-24" />
        <MTC class="w-24" />
        <UnitedWay class="w-24" />
      </div>
      <div class="flex flex-wrap items-center mb-8 justify-evenly">
        <MFP class="w-24" />
        <CNYCN class="w-24" />
        <BAHFA class="w-24" />
        <NYU class="w-24" />
        <JohnsonJohnson class="w-24" />
      </div>
      <div class="flex flex-wrap items-center justify-evenly">
        <STB class="w-24" />
        <BrightPink class="w-24" />
        <Kellogg class="w-24" />
        <CRR class="w-24" />
        <Carton class="w-24" />
      </div>
    </div>
  </section>
</template>

<script>
import GirlScouts from '@/assets/img/logos/girl-scouts.svg'
import Rockefeller from '@/assets/img/logos/rockefeller.svg'
import AutismSpeaks from '@/assets/img/logos/autism-speaks.svg'
import ChanZuckerberg from '@/assets/img/logos/chan-zuckerberg.svg'
import Cuny from '@/assets/img/logos/cuny.svg'
import SFMTA from '@/assets/img/logos/sfmta.svg'
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
import Kellogg from '@/assets/img/logos/kellogg.svg'
import CRR from '@/assets/img/logos/crr.svg'
import Carton from '@/assets/img/logos/carton.svg'

export default {
  components: {
    GirlScouts,
    Rockefeller,
    AutismSpeaks,
    ChanZuckerberg,
    Cuny,
    SFMTA,
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
    Kellogg,
    CRR,
    Carton
  }
}
</script>

<style scoped>
  .logo-box {
    width: 100%;
    background: url('~@/img/global/gray-decorated-square.png') no-repeat center center;
    background-size: cover;
  }
</style>
