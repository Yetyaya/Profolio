<script>
export default {
  components: {},
  setup() {
    return {}
  },
  data() {
    return {
      showShine: false
    }
  },
  mounted() {},
  methods: {
    shineAnimate() {
      this.showShine = true
      setTimeout(() => {
        this.showShine = false
      }, 1200)
    }
  },
  watch: {}
}
</script>

<template lang="pug">
.homePage
  .svgBackground
    SvgIcon.icon.shine1(name='shineLarge')
    SvgIcon.icon.shine2(name='shineSmall')
    SvgIcon.icon.shine3(name='shineLarge')
    SvgIcon.icon.shine4(name='shineSmall')
    SvgIcon.icon.shine5(name='shineLarge')
    SvgIcon.icon.shine6(name='shineSmall')
    SvgIcon.icon(name='grid')
    SvgIcon.icon(name='sticker')
    SvgIcon.icon(name='range')
    SvgIcon.icon(name='sun')
    //- SvgIcon.icon(name='hourglass')
    SvgIcon.icon(name='msgHeart')
    //- SvgIcon.icon(name='paper')
    SvgIcon.icon(name='window3')
    SvgIcon.icon(name='window1' :class='{ animate: showShine }')
    SvgIcon.icon(name='rainbow')
    SvgIcon.icon(name='cloudLarge')
    SvgIcon.icon(name='cloudSmall')
    //- SvgIcon.icon(name='shineLargeStroke')
    //- SvgIcon.icon(name='shineSmallStroke')
    SvgIcon.icon(name='msgHello')
    SvgIcon.icon(name='window4' :class='{ animate: showShine }' @click='shineAnimate()')
  h2 I AM
  h1 YI-TING
  //- h2 前端作品集
</template>

<style lang="sass" scoped></style>
