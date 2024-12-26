<script>
import IconMouse from './IconMouse.vue'
import IconHourglass from './IconHourglass.vue'
import IconComputer from './IconComputer.vue'
import IconSticker from './IconSticker.vue'
import IconFiles from './IconFiles.vue'
import IconRange from './IconRange.vue'
import IconInternet from './IconInternet.vue'
import IconEmail from './IconEmail.vue'
import IconSun from './IconSun.vue'
import IconMsgStar from './IconMsgStar.vue'
import IconMsgHeart from './IconMsgHeart.vue'
import IconMsgHello from './IconMsgHello.vue'
import IconShineLarge from './IconShineLarge.vue'
import IconShineSmall from './IconShineSmall.vue'
import IconShineLargeStroke from './IconShineLargeStroke.vue'
import IconShineSmallStroke from './IconShineSmallStroke.vue'
import IconHeart from './IconHeart.vue'
import IconCloudLarge from './IconCloudLarge.vue'
import IconCloudSmall from './IconCloudSmall.vue'
import IconRainbow from './IconRainbow.vue'
import IconCircle from './IconCircle.vue'
import IconGrid from './IconGrid.vue'
import IconPapers from './IconPapers.vue'
import IconPaper from './IconPaper.vue'
import IconPen from './IconPen.vue'
import IconSearch from './IconSearch.vue'
import IconWindow1 from './IconWindow1.vue'
import IconWindow2 from './IconWindow2.vue'
import IconWindow3 from './IconWindow3.vue'
import IconWindow4 from './IconWindow4.vue'
import IconMyPhoto from './IconMyPhoto.vue'
import IconFileBack from './IconFileBack.vue'
import IconFileFront from './IconFileFront.vue'
import IconRainbow2 from './IconRainbow2.vue'

import IconGoToWeb from './IconGoToWeb.vue'
import IconListDot from './IconListDot.vue'

const icons = {
  mouse: IconMouse,
  hourglass: IconHourglass,
  computer: IconComputer,
  sticker: IconSticker,
  files: IconFiles,
  range: IconRange,
  internet: IconInternet,
  email: IconEmail,
  sun: IconSun,
  msgStar: IconMsgStar,
  msgHeart: IconMsgHeart,
  msgHello: IconMsgHello,
  shineLarge: IconShineLarge,
  shineSmall: IconShineSmall,
  shineLargeStroke: IconShineLargeStroke,
  shineSmallStroke: IconShineSmallStroke,
  heart: IconHeart,
  cloudLarge: IconCloudLarge,
  cloudSmall: IconCloudSmall,
  rainbow: IconRainbow,
  circle: IconCircle,
  grid: IconGrid,
  papers: IconPapers,
  paper: IconPaper,
  pen: IconPen,
  search: IconSearch,
  window1: IconWindow1,
  window2: IconWindow2,
  window3: IconWindow3,
  window4: IconWindow4,
  goToWeb: IconGoToWeb,
  listDot: IconListDot,
  myPhoto: IconMyPhoto,
  fileBack: IconFileBack,
  fileFront: IconFileFront,
  rainbow2: IconRainbow2
}

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    iconComponent() {
      return icons[this.name]
    }
  }
}
</script>

<template lang="pug">
	component(:is='iconComponent')
</template>
