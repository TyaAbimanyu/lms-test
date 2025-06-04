<template>
  <section class="brand__area pb-110">
    <div class="container">
        <div class="row">
          <div class="col-xxl-12">
              <div class="brand__content text-center">
                <h3 class="brand__title">Trusted by 100 world's best companies</h3>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xxl-12">
              <swiper v-bind="slider_setting" class="brand__slider swiper-container">
                  <swiper-slide v-for="(brand, index) in brand_data" :key="index">
                      <div class="brand__item">
                          <img :src="brand" alt="brand">
                      </div>
                  </swiper-slide>
              </swiper>
          </div>
        </div>
        <div class="row">
          <div class="col-xxl-12">
              <div class="brand__more text-center">
                <nuxt-link href="/about" class="link-btn">
                    View all partners
                    <i class="far fa-arrow-right"></i>
                    <i class="far fa-arrow-right"></i>
                </nuxt-link>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

const brand_data = [
  '/images/brand/brand-1.png',
  '/images/brand/brand-2.png',
  '/images/brand/brand-3.png',
  '/images/brand/brand-4.png',
  '/images/brand/brand-5.png',
  '/images/brand/brand-1.png',
  '/images/brand/brand-4.png',
]

const slider_setting = {
    slidesPerView: 6,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
}
</script>

