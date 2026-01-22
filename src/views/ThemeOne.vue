<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Mousewheel, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import img11 from '@/assets/theme1/section3/1-1.webp'
import img13 from '@/assets/theme1/section3/1-3.webp'
import img14 from '@/assets/theme1/section3/1-4.webp'
import img21 from '@/assets/theme1/section3/2-1.webp'
import img23 from '@/assets/theme1/section3/2-3.webp'
import img24 from '@/assets/theme1/section3/2-4.webp'
import img31 from '@/assets/theme1/section3/3-1.webp'
import img32 from '@/assets/theme1/section3/3-2.webp'
import img41 from '@/assets/theme1/section3/4-1.webp'
import img42 from '@/assets/theme1/section3/4-2.webp'
import img44 from '@/assets/theme1/section3/4-4.webp'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [FreeMode, Mousewheel, Pagination, Navigation, Autoplay]
    }
  },
  data() {
    return {
      swiper: null,
      solveArr: [
        {
          title: "流程與系統邏輯",
          desc:
            "將複雜的臨床需求與系統流程，轉化為直覺、清楚的操作路徑，確保使用者能快速理解並正確操作。",
        },
        {
          title: "數據視覺化",
          desc:
            "將複雜資料整理為具邏輯層次的資訊架構，協助使用者快速掌握重點，降低理解與操作成本。",
        },
        {
          title: "互動原型開發",
          desc:
            "透過 Figma 建立高互動原型，在開發前驗證流程與需求可行性，有效降低返工與溝通成本。",
        },
      ],
      projectArr: [
        {
          title: "醫點家",
          tag: "醫療內部系統",
          difficult: "臨床需求複雜，但既有系統流程混亂、操作成本高。",
          howToSolve: [
            "前端架構重構，以 Vue 重新拆解元件與狀態流程。",
            "釐清臨床需求，搭配 Figma 原型設計降低臨床與工程溝通落差，降低前端實作的返工率。"
          ],
          result: "醫護人員可在無額外教學的情況下使用功能，大幅提升工作效率，改善原本需耗時較多，步驟繁瑣的工作流程。",
          link: "https://aic.csh.org.tw/cshGPT/",
          images: [img11, img13, img14]
        },
        {
          title: "清腸辨識",
          tag: "臨床應用工具",
          difficult: "住院病患的排泄狀況需透過呼叫臨床人員進行人工判斷與狀態回報，在人手不足的情況下，無法及時查看並對病人隱私較不友善。",
          howToSolve: [
            "獨立承接需求，撰寫功能規格計劃並進行前端架構與互動設計，實作 QR Code 掃描與資料上傳流程。",
            "使用 BarcodeDetector 處理掃描流程，與後端人員搭配 session 與單元測試確保流程穩定。"
          ],
          result: "病患可自行拍攝照片上傳並獲得分析結果，醫護人員可遠端即時取得資料，成功取代人工查看流程，大幅提升作業效率。",
          link: "https://aic.csh.org.tw/poolens/verify",
          images: [img21, img23, img24]
        },
        {
          title: "臺灣熱傷害指數",
          tag: "資料視覺化",
          difficult: "夏季時，室外溫度變化劇烈，市面上已有許多氣象 APP，卻很少看到單獨顯示器溫趨勢的 APP。",
          howToSolve: [
            "獨立完成資料串接、前端資料處理與互動式視覺化設計。",
            "使用 Axios 串接政府提供的即時資料，搭配 D3.js 將數據轉為地圖與動態圖表。"
          ],
          result: "使用者能快速判斷各地熱傷害風險，提升資料可讀性與理解速度。",
          link: "https://yetyaya.github.io/WBGT-of-Taiwan/",
          images: [img31, img32]
        },
        {
          title: "芸蒔刻｜鮮果製茶園",
          tag: "品牌官網",
          difficult: "品牌缺乏一致的視覺與內容更新方式。",
          howToSolve: [
            "建立品牌定位，獨立完成品牌網站規劃、UI 設計與前端實作。",
            "採用 Vue + Hexo 混合架構，平衡效能與店家消息動態管理需求。"
          ],
          result: "社會大眾能透過網站色系、風格感受品牌故事理念，店家最新資訊可即時更新查看。",
          link: "https://yetyaya.github.io/Rinskings/",
          images: [img41, img42, img44]
        },
      ],
      skillArr: [
        {
          enTitle: "Frontend Architecture",
          title: "前端架構",
          skills: [
            {
              title: "HTML5 / CSS3",
              desc: "建立可維護的版型結構，透過 Pug 提升模板可讀性與開發效率，使用 SCSS / Sass 管理樣式變數，避免樣式重複。"
            },{
              title: "Vue 2 / Vue 3（Vuex / Pinia）",
              desc: "大型專案的元件拆分、狀態管理與前端架構重構及維護。"
            },{
              title: "TypeScript",
              desc: "關鍵資料結構與多狀態流程定義，在編譯階段即能預判錯誤，降低跨模組協作時的型別誤用與長期維護風險。"
            },{
              title: "Vite / Webpack / Gulp",
              desc: "簡化專案結構與建置流程，提升整體開發效率。"
            },
          ],
        },{
          enTitle: "Data & Integration",
          title: "資料與系統整合",
          skills: [
            {
              title: "RESTful API / Axios",
              desc: "與後端合作串接系統資料，處理非同步流程、錯誤狀態與資料轉換，確保流程穩定。"
            },{
              title: "D3.js",
              desc: "資料視覺化，將抽象數據轉為互動式圖表與地圖呈現。"
            },{
              title: "BarcodeDetector API",
              desc: "實作實際流程中的 QR Code 掃描與驗證機制，針對不同手機品牌進行偵測細節調整。"
            },
          ],
        },{
          enTitle: "UI / UX Implementation",
          title: "UI / UX 工程實作",
          skills: [
            {
              title: "UI Framework",
              desc: "依專案需求選擇合適的 UI Framework （如：Bootstrap / Tailwind / Vuetify / Quasar / Ant Design），維持開發效率與設計一致性。"
            },{
              title: "Figma 原型設計",
              desc: "將需求轉為畫面，建立可重用元件，避免設計與實作分離、重複開發。並透過實際畫面操作，降低跨部門認知落差。"
            },{
              title: "Photoshop / Illustrator",
              desc: "簡化專案結構與建置流程，提升整體開發效率。製作網頁所需素材，當素材品質不良，運用 AI 進行優化，確保畫面品質不影響使用體驗。"
            },
          ],
        },{
          enTitle: "Tooling & Workflow",
          title: "工程工具與開發流程",
          skills: [
            {
              title: "Git / TortoiseSVN",
              desc: "支援多人開發、版本控管與穩定交付。"
            },{
              title: "Docker",
              desc: "使用 Docker 建立一致的開發與部署環境，降低環境差異導致的問題。"
            },{
              title: "Jira / Trello",
              desc: "專案與流程管理工具，協助團隊建立可追蹤的開發節奏與任務紀錄。"
            },
          ],
        },
      ]
    };
  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<template lang="pug">
  section#about-block(aria-labelledby="about-title")
    .about-bg
      .bg-left
      .bg-right
    .about-container.d-grid.container-80
      .about-msg
        .about-txt
          .main-title
            h2 你好，
            h2#about-title 我是翊婷
          .sub-title
            h3 A Frontend Engineer
          .description
            p 喜歡製作符合人性的程式功能
            P 並將設計落實為穩定、可維護的系統
        .btn-group
          a.btn.sub-btn(href="https://drive.google.com/file/d/1205H9ry16_GAADsyWthdzyWj2R6b6Ytm/view?usp=sharing" target="_blank") 下載履歷
      img.about-img(src="@/assets/theme1/section1/banner.webp" alt="" aria-hidden="true")

  section#solve-block.section-spacing(aria-labelledby="solve-title")
    .container-70
      .section-title.section-title-bottom
        .en-title WHAT I SOLVE
        #solve-title.main-title 問題處理經驗
        .sub-title 在實際專案中處理過的問題類型
      .solve-content.d-flex
        .card.d-flex(v-for="(item, id) in solveArr" :key="id")
          .card-img.img-radius(:class="`card-img-${id+1}`")
          .card-txt
            .card-title {{ item.title }}
            .description {{ item.desc }}

  section#project-block.section-spacing(aria-labelledby="project-title")
    .container-70
      .section-title.section-title-bottom
        .en-title Projects
        #project-title.main-title 專案作品
        .sub-title 工作 / 案件 / 個人研究
      .project-content
        .card.d-grid.img-radius(v-for="(item, id) in projectArr" :key="id")
          .card-img
            Swiper(
              :direction="'horizontal'"
              :pagination="{ clickable: true }"
              :slidesPerView="1"
              :spaceBetween="0"
              :speed="600"
              :rewind="true"
              :mousewheel="false"
              :autoplay="{ delay: 5000, disableOnInteraction: true }"
              :modules="modules"
              :keyboard="{ enabled: true }"
              role="region"
              :aria-label="`${item.title} 專案圖片輪播`"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            )
              SwiperSlide(v-for="(image, imgId) in item.images" :key="imgId")
                img(:src="image" :alt="`${item.title} 專案畫面，第 ${imgId + 1} 張`")
          .card-txt
            .card-header
              .card-id 
                span Project
                span.num 0{{ id + 1}}
              .card-title.d-flex
                .title {{ item.title }}
                .tag {{ item.tag }}
            .card-content
              .item
                .item-title 面臨困境
                .item-txt
                  div {{ item.difficult }}
              .item
                .item-title 如何處理
                .item-txt 
                  div(v-for="s in item.howToSolve") {{ s }}
            .card-footer
              .item.result
                .item-title 最終成效
                .item-txt {{ item.result }}
              .btn-group
                a.btn(:href="item.link" target="_blank" :aria-label="`前往 ${item.title} 專案網站`")
                  span 前往網站
                  .icon

  section#skill-block.section-spacing(aria-labelledby="skill-title")
    .container-65
      .section-title.section-title-bottom
        .en-title Technology Stack
        #skill-title.main-title 技術堆疊
        .sub-title 工程能力與技術實作
      .skill-content
        .card.img-radius(v-for="(item, id) in skillArr" :key="id")
          .card-header
            .card-en-title {{ item.enTitle }}
            .card-title {{ item.title }}
          .card-content.d-grid
            .item(v-for="s in item.skills")
              .item-title.d-flex
                .icon
                span {{ s.title }}
              .item-txt {{ s.desc }}

  footer.section-spacing(role="contentinfo")
    .container-80
      .footer-content.d-grid
        .contact-info.d-grid
          .my-photo
            img(src="@/assets/theme1/footer/yi-ting.jpg" alt="顏翊婷，前端工程師，個人形象照片")
          .section-title
            .en-title Contact Info
            .main-title 聯絡資訊
            .info-list.d-flex
              .item.d-flex
                .icon
                a.info(href="mailto:c2514161@gmail.com") c2514161@gmail.com
              .sns-group.d-flex
                a.icon.github(href="https://github.com/Yetyaya/About-Me" target="_blank")
                a.icon.linkedin(href="https://www.linkedin.com/in/yiting1012/" target="_blank")
                a.icon.cakeresume(href="https://www.cake.me/me/i-ting-yen" target="_blank")
          
      .copyrights
        p Copyright © 2026 Yi-Ting Yen All Rights Reserved
</template>

<style lang="sass" scoped>

</style>

