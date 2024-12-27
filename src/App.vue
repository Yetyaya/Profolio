<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Mousewheel, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Home from './views/Home.vue'
import Intro from './views/Intro.vue'
import Skill from './views/Skill.vue'
import WorkExperience from './views/WorkExperience.vue'
import Projects from './views/Projects.vue'
import SlidePage from './components/SlidePage.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Home,
    Intro,
    Skill,
    WorkExperience,
    Projects,
    SlidePage
  },
  setup() {
    return {
      modules: [FreeMode, Mousewheel, Pagination, Navigation]
    }
  },
  data() {
    return {
      swiper: null,
      currentPage: 1,
      tempCurrentPage: null,
      totalPage: 1,
      animateChange: true,
      showHamburgerMenu: false,
      hamburgerMenu: ['Home', 'About', 'Skill', 'Projects'],
      projectArr: [
        {
          img: 'rinskings',
          url: 'https://yetyaya.github.io/Rinskings/',
          website: {
            year: 2024,
            workTime: ['2024/6', '2024/8'],
            title: 'Rinskings',
            classify: '飲料品牌網站',
            name: '芸蒔刻｜鮮果製茶園'
          },
          pointArr: [
            { title: 'Google Map API', text: '客製化符合店家色調的地圖風格' },
            { title: 'EmailJS API', text: '沒有後端的情況下也能發送電子信件' },
            { title: 'RWD 響應式介面', text: '兼顧電腦端與移動裝置端的畫面體驗' }
          ],
          tagArr: ['Hexo', 'Vue.js', 'EJS', 'Sass']
        },
        {
          img: 'wbgt',
          url: 'https://yetyaya.github.io/WBGT-of-Taiwan/',
          website: {
            year: 2024,
            workTime: ['2024/8', '2024/10'],
            title: 'WBGT',
            classify: '氣候資訊網站',
            name: '臺灣｜熱傷害指數'
          },
          pointArr: [
            { title: 'API 串接', text: 'axios 串接政府開放平台資料' },
            { title: '資料視覺化', text: 'D3.js 繪製地圖、製作圖表動畫' },
            { title: 'RWD 響應式介面', text: '兼顧電腦端與移動裝置端的畫面體驗' }
          ],
          tagArr: ['D3.js', 'Vue.js', 'axios', 'Pug', 'Sass']
        },
        {
          img: 'northstar',
          url: 'https://www.northstar5237.com/static/index/#/',
          website: {
            year: 2022,
            workTime: ['2022/3', '2022/4'],
            title: 'northstar',
            classify: '購物網站',
            name: '北極星香氛'
          },
          pointArr: [
            { title: '前後端分離', text: 'axios + RESTful API 設計' },
            { title: '綠界物流串接', text: '讓消費者選擇宅配或超商門市，並傳送對應資料予後端' },
            { title: 'RWD 響應式介面', text: '兼顧電腦端與移動裝置端的畫面體驗' }
          ],
          tagArr: ['Vue.js', 'axios', 'Pug', 'Sass', 'Ant Design']
        },
        {
          img: 'fusheng',
          url: 'https://www.fusheng2015.com/index.html',
          website: {
            year: 2021,
            workTime: ['2021/3', '2021/8'],
            title: 'FUSHENG',
            classify: '商品詢價網站',
            name: '富盛國際實業'
          },
          pointArr: [
            {
              title: '製作產品示意圖',
              text: '產品照片進行後製，並依使用情境去背製作產品介紹圖片'
            },
            { title: 'RWD 響應式介面', text: '兼顧電腦端與移動裝置端的畫面體驗' }
          ],
          tagArr: ['JavaScript', 'jQuery', 'Pug', 'Sass']
        }
      ]
    }
  },
  mounted() {},
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper
      this.totalPage = swiper.pagination.bullets.length
    },
    onSlideChange(e) {
      this.tempCurrentPage = e.activeIndex + 1
      this.animateChange = false
    },
    slideTo(id) {
      this.swiper.slideTo(id)
      this.showHamburgerMenu = false
    }
  },
  watch: {
    animateChange: {
      handler(newVal, oldVal) {
        if (!newVal) {
          setTimeout(() => {
            this.animateChange = true
          }, 500)
          setTimeout(() => {
            this.currentPage = this.tempCurrentPage
          }, 600)
        }
      },
      immediate: true
    }
  }
}
</script>

<template lang="pug">
  .hamburger(:class="{ active: showHamburgerMenu }" @click="showHamburgerMenu = !showHamburgerMenu")
    .hamburgerBox
      .hamburgerInner
  .brandGroup
    a.fa-brands.fa-github(href="https://github.com/Yetyaya" target="_blank")
    a.fa-solid.fa-paperclip(href="https://github.com/Yetyaya/About-Me" target="_blank")
  .hintText
    span SCROLL
    .line
  transition(name="slide-fade-right")
    .hamburgerMenu(v-show="showHamburgerMenu")
      template(v-for="(item, id) in hamburgerMenu")
        p.stroke.halftone(:name="item" @click="slideTo(id)") {{ item }}
  //- div
  //-   a(href="https://vitejs.dev" target="_blank")
  //-     img.logo(src="/vite.svg" alt="Vite logo")
  //-   a(href="https://vuejs.org/" target="_blank")
  //-     img.logo.vue(src="./assets/vue.svg" alt="Vue logo")
  Swiper(
    :direction="'vertical'"
    :pagination="{ clickable: true }"
    :slidesPerView="1"
    :spaceBetween="0"
    :speed="600"
    :rewind="true"
    :mousewheel="true"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  )
    SwiperSlide
      Home
    SwiperSlide
      Intro
    SwiperSlide
      Skill
    SwiperSlide(v-for="project in projectArr")
      Projects(:projectData="project")
  SlidePage(:aaa="animateChange" :class="{ active: animateChange }" :currentPage="currentPage" :totalPage="totalPage")
</template>

<style lang="sass" scoped>
.logo
  height: 6em
  padding: 1.5em
  will-change: filter
  transition: filter 300ms

.logo:hover
  filter: drop-shadow(0 0 2em #646cffaa)

.logo.vue:hover
  filter: drop-shadow(0 0 2em #42b883aa)
</style>
