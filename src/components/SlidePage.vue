<script>
export default {
  props: {
    currentPage: Number,
    totalPage: Number
  },
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
  .pageGroup
    .current
      span 0
      span.pageNum {{ currentPage }}
    hr
    .total 0{{ totalPage }}
</template>

<style lang="sass" scoped>
.pageGroup
  position: fixed
  bottom: 40px
  left: 30px
  color: var(--black)
  animation: fadeOutLeft 0.3s 0s 1 both ease
  background-color: var(--white)
  border: 2px solid var(--black)
  border-radius: 5px
  padding: 5px 7px
  box-shadow: var(--box-shadow)
  z-index: 1
  &.active
    animation: fadeInLeft 1s 0s 1 both ease
  .current, .total
    position: relative
    text-align: center
    line-height: 25px
    font-size: 18px
    font-weight: 700
    white-space: nowrap
  .current
    height: 25px
    span
      width: 11.09px
      position: absolute
      top: 0
      left: 0px
    .pageNum
      left: 11px
      animation: fadeInDown 0.7s 0.5s 1 both ease
  hr
    width: 20px
    margin: 3px 0
    border-color: var(--swiper-pagination-color)
  .total
    opacity: 0.5

@keyframes fadeOutLeft
  0%
    opacity: 1
    transform: translate3d(0%, 0, 0)
  30%
    transform: translate3d(-50%, 0, 0)
    opacity: 0.5
  100%
    transform: translate3d(-200%, 0, 0)
    opacity: 0
    display: none

@keyframes fadeInLeft
  0%
    transform: translate3d(-50%, 0, 0)
    opacity: 0
  99.9%
    transform: translate3d(0%, 0, 0)
    opacity: 1
  100%
    opacity: 1

@keyframes fadeInDown
  0%
    transform: translate3d(0, -50%, 0)
    opacity: 0
  99.9%
    transform: translate3d(0, 0%, 0)
    opacity: 1
  100%
    opacity: 1
</style>
