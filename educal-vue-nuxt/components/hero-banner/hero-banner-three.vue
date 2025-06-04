<template>
  <section class="slider__area p-relative">
    <swiper
      :spaceBetween="0"
      :navigation="false"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="slider__wrapper swiper-container"
    >
      <swiper-slide v-for="(item, i) in hero_slider_data" :key="i"
        class="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center"
        :style="{ backgroundImage: 'url(' + item.bg_img + ')' }"
      >
        <div class="container">
          <div class="row">
            <div class="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
              <div class="slider__content">
                <span>{{ item.sm_title }}</span>
                <h3 class="slider__title">
                  {{ item.title_b_s }}
                  <span class="yellow-bg">{{item.shape_text}} <img src="/images/shape/yellow-bg.png" alt="" />
                  </span>
                  {{ item.title_a_s }}
                </h3>
                <p>{{ item.text }}</p>
                <nuxt-link href="/about" class="e-btn slider__btn">Ready to get Started?</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="0"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="swiper-container slider__nav d-none d-md-block"
    >
      <swiper-slide
        v-for="(item, index) in hero_slider_nav"
        :key="index"
        :class="`slider__nav-item ${item.bgColor}`"
        :style="{ backgroundImage: 'url(' + item.img + ')' }"
      >
        <div class="slider__nav-content">
          <span>{{ item.title }}</span>
          <h4>{{ item.subtitle }}</h4>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { SwiperInstance } from "@/types/swiper-instance";

const thumbsSwiper = ref<SwiperInstance>(null);

const setThumbsSwiper = (swiper: SwiperInstance) => {
  thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];
const hero_slider_data = [
  {
    bg_img: "/images/slider/slider-4.jpg",
    sm_title: "Learn & Achieve",
    title_b_s: "Find the right Online",
    shape_text: "tutor",
    title_a_s: "for you.",
    text: "Meet university,and cultural institutions, who'll share their experience."
  },
  {
    bg_img: "/images/slider/slider-1.jpg",
    sm_title: "Learn & Achieve",
    title_b_s: "Fundamentals of music",
    shape_text: "theory",
    title_a_s: "Learn",
    text: "Meet university,and cultural institutions, who'll share their experience."
  },
  {
    bg_img: "/images/slider/slider-2.jpg",
    sm_title: "Learn & Achieve",
    title_b_s: "Become a product",
    shape_text: "Manager",
    title_a_s: "& Learn.",
    text: "Meet university,and cultural institutions, who'll share their experience."
  },
  {
    bg_img: "/images/slider/slider-3.jpg",
    sm_title: "Learn & Achieve",
    title_b_s: "Launch your",
    shape_text: "Online",
    title_a_s: "Learning Platform.",
    text: "Meet university,and cultural institutions, who'll share their experience."
  },
];

const hero_slider_nav = [
  {
    id: 1,
    img: "/images/slider/nav/slider-nav-4.jpg",
    title: "6 Courses",
    subtitle: "Programming Languages",
    bgColor: "orange-bg",
  },
  {
    id: 2,
    img: "/images/slider/nav/slider-nav-1.jpg",
    title: "4 Courses",
    subtitle: "Idea Discussion",
    bgColor: "blue-bg",
  },
  {
    id: 3,
    img: "/images/slider/nav/slider-nav-2.jpg",
    title: "8 Courses",
    subtitle: "Web Development",
    bgColor: "pink-bg",
  },
  {
    id: 4,
    img: "/images/slider/nav/slider-nav-3.jpg",
    title: "9 Courses",
    subtitle: "System Administration",
    bgColor: "green-bg",
  },
];
</script>
