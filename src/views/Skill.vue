<script>
export default {
  components: {},
  setup() {
    return {}
  },
  data() {
    return {
      skillArr: [
        {
          title: '前端開發',
          skillItem: [
            { year: 6, list: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Git'] },
            { year: 1, list: ['TypeScript'] }
          ]
        },
        {
          title: '網頁設計',
          skillItem: [
            { year: 8, list: ['Photoshop', 'Illustrator'] },
            { year: 1, list: ['Figma'] }
          ]
        }
      ]
    }
  },
  mounted() {},
  methods: {},
  watch: {}
}
</script>

<template lang="pug">
.skillPage
  img.mySelfImage(src='@/assets/author4.png' alt="")
  .svgBackground
    SvgIcon.icon(name='grid')
    SvgIcon.icon(name='rainbow2')
    SvgIcon.icon(name='circle')
    SvgIcon.icon(name='computer')
    SvgIcon.icon(name='internet')
    SvgIcon.icon.cloud1(name='cloudLarge')
    SvgIcon.icon.cloud2(name='cloudSmall')
    SvgIcon.icon.cloud3(name='cloudLarge')
    SvgIcon.icon.cloud4(name='cloudSmall')
    SvgIcon.icon.cloud5(name='cloudLarge')
  h1.pageTitle
    span 技
    span 能
  .skillList
    .skillItem(v-for='item in skillArr')
      .title(:data-content='item.title')
        span {{ item.title }}
        .icon 
          .minimize
          .zoom
          .close
      ul
        li(v-for='skill in item.skillItem')
          .year
            span.num {{ skill.year }}
            span years
          .skillLine
            .skill(v-for='s in skill.list') {{ s }}
</template>

<style lang="sass" scoped></style>
