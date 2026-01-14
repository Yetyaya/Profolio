<script>
export default {
  props: {
    projectData: Object
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
.projectPage
  .bgText {{ projectData.website.title }}
  .bgImg(:class="projectData.img")
  .info
    .projectName
      a.gotoWeb(:href="projectData.url" target="_blank") 
        SvgIcon.icon.gotoWebsite(name='goToWeb')
      .year {{ projectData.website.year }}
      .title(:data-content='projectData.website.title') {{ projectData.website.title }}
    .projectDetail
      .topTitle.mobile
        // .workTime
        //   span {{ projectData.website.workTime[0] }} ~ {{ projectData.website.workTime[1] }}
        .classify {{ projectData.website.classify }}
      .classify {{ projectData.website.classify }}
      .name(:data-content='projectData.website.name') {{ projectData.website.name }}
      ul.points
        li(v-for='item in projectData.pointArr')
          .icon
            SvgIcon.icon(name='listDot')
          .point
            .title(:data-content='item.title') {{ item.title }}
            .text {{ item.text }}
      ul.tags 
        li(v-for='item in projectData.tagArr') {{ item }}
  ul.tags.mobile
    li(v-for='item in projectData.tagArr') {{ item }}
  a.gotoWeb.mobile(:href="projectData.url" target="_blank") 
    SvgIcon.icon.gotoWebsite(name='goToWeb')
</template>

<style lang="sass" scoped></style>
