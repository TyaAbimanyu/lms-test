<template>
  <section :class="['banner__area', spacing]">
    <div class="container">
      <div class="row">
        <div v-for="(banner, index) in banner_data" :key="index" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div :style="{ background: `url(${banner.bg_img}) no-repeat center/cover` }" class="banner__item p-relative mb-40">
            <div class="banner__content">
              <span :class="`tag ${banner.tag === 'new' ? 'orange' : ''}`">{{ banner.tag }}</span>
              <h3 class="banner__title">
                <nuxt-link to="/course-details">
                  <span v-html="banner.title"></span>
                </nuxt-link>
              </h3>
              <nuxt-link to="/courses" class="e-btn e-btn-2">{{ banner.btn_text }}</nuxt-link>
            </div>
            <div v-if="banner.img" class="banner__thumb d-none d-sm-block d-md-none d-lg-block">
              <img :src="banner.img" alt="banner-img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{spacing?: string}>(),{
  spacing: 'pb-110'
})
// banner data
const banner_data = [
  {
    bg_img:'/images/banner/banner-bg-1.jpg',
    tag:'Free',
    title:"Germany Foundation <br/> Document",
    btn_text:'View Courses',
    img:'/images/banner/banner-img-1.png',
  },
  {
    bg_img:'/images/banner/banner-bg-2.jpg',
    tag:'new',
    title:"Online Courses <br/>From Eduka University",
    btn_text:'View Courses',
    img:'/images/banner/banner-img-2.png',
  },
]
</script>
