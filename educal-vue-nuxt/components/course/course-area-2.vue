<template>
  <section class="course__area grey-bg pt-115 pb-120">
    <div class="container">
        <div class="row align-items-end">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
              <div class="section__title-wrapper mb-60">
                <h2 class="section__title">Online<span class="yellow-bg"> 
                  Courses <img src="/images/shape/yellow-bg-2.png" alt="">  
                </span> <br> For anyone, anywhere 
                </h2>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
              </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
              <div class="category__more mb-60 float-md-end fix">
                <nuxt-link href="/courses" class="link-btn">
                    View All Courses
                    <i class="far fa-arrow-right"></i>
                    <i class="far fa-arrow-right"></i>
                </nuxt-link>
              </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(course, index) in course_items" :key="index" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="course__item course__item-2 white-bg mb-30 transition-3">
                <div class="course__thumb fix w-img">
                    <nuxt-link :href="`/course-details/${course.id}`">
                      <img :src="course.img" alt="course-img">
                    </nuxt-link>
                </div>
                <div class="course__content-2">
                    <h3 class="course__title-2">
                      <nuxt-link :href="`/course-details/${course.id}`">{{ course.title }}</nuxt-link>
                    </h3>
                    <p>{{ course.course_summary }}</p>
                    <div class="course__bottom d-sm-flex justify-content-between align-items-center">
                      <div class="course__teacher-2 d-flex align-items-center">
                          <div class="course__teacher-thumb-2 mr-20">
                            <img :src="course.instructor_img" alt="instructor_img">
                            <div class="course__teacher-rating">
                                <i class="icon_star"></i>
                            </div>
                          </div>
                          <div class="course__teacher-info">
                            <h6><nuxt-link :href="`/course-details/${course.id}`">{{ course.instructor_name }}</nuxt-link></h6>
                            <span>{{ course.category }}</span>
                          </div>
                      </div>
                      <div class="course__meta">
                          <div class="course__lesson">
                            <span><i class="far fa-book-alt"></i>{{ course.lesson }} Lesson</span>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import course_data from '@/data/course-data';
const course_items = [...course_data].slice(-2);
</script>
