<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Mousewheel, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { useThemeStore } from './stores/themeStore'

import ThemeOne from './views/ThemeOne.vue'
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
    ThemeOne,
    Home,
    Intro,
    Skill,
    WorkExperience,
    Projects,
    SlidePage
  },
  setup() {
    const themeStore = useThemeStore()
    return {
      modules: [FreeMode, Mousewheel, Pagination, Navigation],
      themeStore
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
      lastScrollTop: 0,
      isScrollingUp: false,
      projectArr: [
        {
          img: 'poolens',
          url: 'https://aic.csh.org.tw/poolens/verify',
          website: {
            year: 2025,
            workTime: ['2025/8', '2025/10'],
            title: 'Poolens',
            classify: '醫院臨床需求',
            name: '清腸辨識 '
          },
          pointArr: [
            { title: 'Figma 製作互動式原型', text: '促進同仁與臨床人員的溝通與協作' },
            { title: '導入 QR Code 掃描功能', text: '建立該院住院病患才能使用該系統的門檻條件' },
            { title: '提升醫護工作效率', text: '醫護人員能遠端獲取相關資料，有效取代人工查看流程' }
          ],
          tagArr: ['Vue.js', 'Sass', 'BarcodeDetector', ' Docker']
        },
        {
          img: 'cshGPT',
          url: 'https://aic.csh.org.tw/cshGPT/',
          website: {
            year: 2025,
            workTime: ['2025/2', '2025/10'],
            title: 'cshGPT',
            classify: '醫院內部系統',
            name: '醫點家'
          },
          pointArr: [
            { title: '系統架構重構', text: '導入 Vue.js 進行專案架構調整' },
            { title: '介面優化', text: '對 UI 風格進行統一規範及設計' },
            { title: 'Figma 製作互動式原型', text: '將複雜的臨床需求視覺化，確保功能與需求一致' }
          ],
          tagArr: ['Vue.js', 'Sass', 'axios', ' Docker']
        },
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
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      this.isScrollingUp = scrollTop < 50
    },
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
    },
    toggleThemeIfNeeded(themeNum) {
      const targetTheme = themeNum === 1 ? 'theme1' : 'theme2'
      if (this.themeStore.currentTheme !== targetTheme) {
        this.themeStore.toggleTheme()
      }
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
  .app(:class="`${themeStore.currentTheme}`")
    //- 主题1
    template(v-if="themeStore.currentTheme === 'theme1'")
      .theme1-container
        .theme-header(:class="{ 'scroll-up': !isScrollingUp }")
          .theme-container.d-grid.container-80
            a.header-logo(href="#about-block")
              img(src="@/assets/theme1/header/logo.webp" alt="hi, i'm yi ting")
            .header-nav.d-flex
              .theme-nav.d-flex
                a(href="#solve-block") 經驗
                a(href="#project-block") 作品
                a(href="#skill-block") 技術
              .theme-toggle
                template(v-for="num in 2")
                  button.theme-btn(:class="{ 'active': num === 1 }" @click="toggleThemeIfNeeded(num)")
                    | {{ num === 1 ? '杏黃' : '靛青' }}
        ThemeOne

    //- 主题2
    template(v-else-if="themeStore.currentTheme === 'theme2'")
      .theme2-container
        .theme-header(:class="{ 'scroll-up': !isScrollingUp }")
          .brandGroup
            a.fa-brands.fa-github(href="https://github.com/Yetyaya/About-Me" target="_blank")
            a.fa-solid.fa-paperclip(href="https://drive.google.com/file/d/1205H9ry16_GAADsyWthdzyWj2R6b6Ytm/view?usp=sharing" target="_blank")
          .theme-toggle
            template(v-for="num in 2")
              button.theme-btn(:class="{ 'active': num === 2 }" @click="toggleThemeIfNeeded(num)")
                | {{ num === 1 ? '杏黃' : '靛青' }}
        .hamburger(:class="{ active: showHamburgerMenu }" @click="showHamburgerMenu = !showHamburgerMenu")
          .hamburgerBox
            .hamburgerInner
        .hintText
          span SCROLL
          .line
        transition(name="slide-fade-right")
          .hamburgerMenu(v-show="showHamburgerMenu")
            template(v-for="(item, id) in hamburgerMenu")
              p.stroke.halftone(:name="item" @click="slideTo(id)") {{ item }}
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

.app
  width: 100%
  &.theme2
    height: 100vh

.theme-header
  position: fixed
  top: 0
  left: 0
  right: 0
  display: flex
  justify-content: end
  z-index: 100
  pointer-events: none

.brandGroup
  pointer-events: auto

.theme-toggle
  display: flex
  align-items: center
  pointer-events: auto
  overflow: hidden

.theme1-container,
.theme2-container
  width: 100%
  height: 100%
  display: flex
  flex-direction: column

.theme2
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
