<template>
 <section class="category__area pt-120 pb-70">
    <div class="container">
        <div class="row align-items-end">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
              <div class="section__title-wrapper mb-45">
                <h2 class="section__title">Explore <br>Our <span class="yellow-bg">Popular 
                  <img src="/images/shape/yellow-bg-2.png" alt="yellow-bg">  </span>Courses
                </h2>
              </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
              <div class="category__more mb-50 float-md-end fix">
                <nuxt-link href="/courses" class="link-btn">
                    View all Courses
                    <i class="far fa-arrow-right"></i>
                    <i class="far fa-arrow-right"></i>
                </nuxt-link>
              </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(category, index) in [...category_data]" :key="index" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div class="category__item mb-30 transition-3 d-flex align-items-center">
                <div class="category__icon mr-30" v-html="category.icon"></div>
                <div class="category__content">
                    <h4 class="category__title">
                      <nuxt-link href="/courses">{{ category.title }}</nuxt-link>
                    </h4>
                    <p>{{ category.subtitle }}</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import category_data from '@/data/category-data';
</script>

