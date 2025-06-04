<template>
  <section class="testimonial__area pt-145 pb-150" style="background-image: url(/images/testimonial/home-3/testimonial-bg-3.jpg);">
    <div class="container">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
              <div class="testimonial__slider-3">
                <h3 class="testimonial__title">Student <br> Community Feedback</h3>

                 <swiper :spaceBetween="0" :navigation="false" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="testimonial__slider-wrapper swiper-container testimonial-text mb-35">
                      <swiper-slide v-for="(item, i) in testimonial_data" :key="i">
                        <div class="testimonial__item-3">
                            <p>{{ item.desc }}</p>

                            <div class="testimonial__info-2">
                                <h4>{{ item.name }},</h4>
                                <span>{{ item.subtitle }}</span>
                            </div>
                        </div>
                      </swiper-slide>
                  </swiper>

                  <swiper @swiper="setThumbsSwiper" :spaceBetween="0" :slidesPerView="3" :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="swiper-container testimonial-nav">
                      <swiper-slide v-for="(nav, index) in testimonial_nav" :key="index">
                        <div class="testimonial__nav-thumb">
                            <img :src="nav" alt="nav-img">
                        </div>
                      </swiper-slide>
                  </swiper>

              </div>
          </div>

          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
              <div class="testimonial__video ml-70 fix">
                <div class="testimonial__thumb-3">
                    <iframe src="https://www.youtube.com/embed/Rr0uFzAOQus" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div class="testimonial__video-content d-sm-flex">
                    <div class="testimonial__video-icon mr-20 mb-20">
                      <span>
                          <svg version="1.1" id="educal-youtube" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                            <path class="st0" d="M22,11.1V12c0,5.5-4.5,10-10,10C6.5,22,2,17.5,2,12C2,6.5,6.5,2,12,2c1.4,0,2.8,0.3,4.1,0.9"/>
                            <polyline class="st0" points="22,4 12,14 9,11 "/>
                          </svg>
                      </span>
                    </div>
                    <div class="testimonial__video-text">
                      <h4>Course Outcome</h4>
                      <p>Faff about A bit of how's your father getmate cack codswallop crikey argy-bargy cobblers  lost his bottle.</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
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

 const testimonial_data = [
  {
    id:1,
    desc:"“After I started learning design with Quillow, I realized that I had improved to very advanced levels. While I am studying at my university, I design as an additional income and I am sure that I will do this professionally.”",
    name:'James Lee',
    subtitle:'Student @Educal University'
  },
  {
    id:2,
    desc:"“After I started learning design with Quillow, I realized that I had improved to very advanced levels. While I am studying at my university, I design as an additional income and I am sure that I will do this professionally.”",
    name:'Mary Smith',
    subtitle:'Student @Educal University'
  },
  {
    id:3,
    desc:"“After I started learning design with Quillow, I realized that I had improved to very advanced levels. While I am studying at my university, I design as an additional income and I am sure that I will do this professionally.”",
    name:'Bob Smith',
    subtitle:'Student @Educal University'
  },
  {
    id:4,
    desc:"“After I started learning design with Quillow, I realized that I had improved to very advanced levels. While I am studying at my university, I design as an additional income and I am sure that I will do this professionally.”",
    name:'Will Smith',
    subtitle:'Student @Educal University'
  },
]

const testimonial_nav = [
 '/images/testimonial/home-3/testi-1.jpg',
 '/images/testimonial/home-3/testi-2.jpg',
 '/images/testimonial/home-3/testi-3.jpg',
 '/images/testimonial/home-3/testi-2.jpg',
]
</script>
 