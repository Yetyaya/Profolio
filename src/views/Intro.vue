<script>
export default {
  components: {},
  setup() {
    return {}
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  watch: {}
}
</script>

<template lang="pug">
.introPage
  .textBg
    .info
      p # HTML
      p # CSS
      p # JavaScript
  .svgBackground
    SvgIcon.icon.shine1(name='shineLarge')
    SvgIcon.icon.shine2(name='shineSmall')
    SvgIcon.icon.shine3(name='shineLarge')
    SvgIcon.icon.shine4(name='shineSmall')
    SvgIcon.icon.shine5(name='shineLarge')
    SvgIcon.icon.shine6(name='shineSmall')
    SvgIcon.icon(name='email')
    SvgIcon.icon.paper1(name='paper')
    SvgIcon.icon.paper2(name='paper')
    SvgIcon.icon(name='grid')
    SvgIcon.icon(name='fileBack')
    SvgIcon.icon(name='myPhoto')
    SvgIcon.icon(name='fileFront')
    SvgIcon.icon(name='search')
    SvgIcon.icon(name='msgStar')
    SvgIcon.icon(name='pen')
  h1.pageTitle
    span(data-content="關") 關
    span(data-content="於") 於
  .letter
    li
      p.firstLine
        span 嗨，我是
        span.point 翊婷
        span ，
      p 一名擁有 6 年實務經驗的前端工程師。
    li
      p
        span 主要使用
        span.point Vue.js
        span 進行開發與技術應用。同時具備
        span.point Photoshop
        span  和 
        span.point  Illustrator
        span  的網頁設計能力。
    li
      p 在職期間主要負責：
      p 
        span.point 設計網頁版面
        span 、
        span.point 切版
        span 、
        span.point RWD
        span 、
        span.point 動畫製作
        span 、
        span.point 串接API資料
        span 、
        span.point 程式撰寫
        span 等工作事項。
</template>

<style lang="sass" scoped></style>
