<template>
  <section class="testimonial__area testimonial__overlay pt-175 pb-170" style="background-image: url(/images/testimonial/testimonial-bg.jpg);">
    <div class="container">
        <div class="col-xxl-12">
          <div class="testimonial__slider">
            <swiper v-bind="slider_setting" :modules="[Navigation]" class="testimonial__slider-inner">
                  <swiper-slide v-for="(item, index) in testimonial_data" :key="index" class="testimonial__item text-center">
                      <div class="testimonial__thumb">
                        <img :src="item.img" alt="">
                      </div>
                      <div class="testimonial__content">
                        <p>{{ item.content }}</p>
  
                        <div class="testimonial__info">
                            <h4>{{ item.name }}</h4>
                            <span>{{ item.title }}</span>
                        </div>
                      </div>
                  </swiper-slide>
                <div class="swiper-button-next swiper-nav"><i class="far fa-arrow-right"></i></div>
                <div class="swiper-button-prev swiper-nav"><i class="far fa-arrow-left"></i></div>
            </swiper>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

// slider setting 
const slider_setting = {
  spaceBetween: 0,
  slidesPerView:1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
// testimonial data
const testimonial_data = [
  {
    id:1,
    img:'/images/testimonial/testi-1.jpg',
    content:'“ Barmy loo sloshed porkiesdo with me down the pub say bubble and squeak. ”',
    name:'Jason Response',
    title:'UX Designer'
  },
  {
    id:2,
    img:'/images/testimonial/testi-1.jpg',
    content:'“ Barmy loo sloshed porkiesdo with me down the pub say bubble and squeak. ”',
    name:'Naim Ahmed',
    title:'Web developer'
  },
  {
    id:3,
    img:'/images/testimonial/testi-1.jpg',
    content:'“ Barmy loo sloshed porkiesdo with me down the pub say bubble and squeak. ”',
    name:'Jason Response',
    title:'Accountant'
  }
]

</script>
