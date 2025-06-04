<template>
 <section class="teacher__area pt-100 pb-110">
    <div class="page__title-shape">
        <img class="page-title-shape-5 d-none d-sm-block" src="/images/page-title/page-title-shape-1.png" alt="">
        <img class="page-title-shape-6" src="/images/page-title/page-title-shape-6.png" alt="">
        <img class="page-title-shape-3" src="/images/page-title/page-title-shape-3.png" alt="">
        <img class="page-title-shape-7" src="/images/page-title/page-title-shape-4.png" alt="">
    </div>
    <div class="container">
        <div class="row">
          <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div class="teacher__details-thumb p-relative w-img pr-30">
                <img :src="instructor.img" alt="instructor-img">
                <div class="teacher__details-shape">
                    <img class="teacher-details-shape-1" src="/images/teacher/details/shape/shape-1.png" alt="">
                    <img class="teacher-details-shape-2" src="/images/teacher/details/shape/shape-2.png" alt="">
                </div>
              </div>
          </div>
          <div class="col-xxl-8 col-xl-8 col-lg-8">
              <div class="teacher__wrapper">
                <div class="teacher__top d-md-flex align-items-end justify-content-between">
                    <div class="teacher__info">
                      <h4>{{instructor.name}}</h4>
                      <span>{{instructor.title}}</span>
                    </div>
                    <div class="teacher__rating">
                      <h5>Review:</h5>
                      <div class="teacher__rating-inner d-flex align-items-center">
                          <ul>
                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                          </ul>
                          <p>4.5</p>
                      </div>
                    </div>
                    <div class="teacher__social-2">
                      <h4>Follow Us:</h4>
                      <ul>
                        <li v-for="(s, i) in instructor.social_links" :key="i">
                          <nuxt-link :href="s.link"><i :class="s.icon"></i></nuxt-link>
                        </li>
                      </ul>
                    </div>
                    <div class="teacher__follow mb-5">
                      <a href="#" class="teacher__follow-btn">follow <i class="icon_plus"></i> </a>
                    </div>
                </div>
                <div class="teacher__bio">
                    <h3>Short Bio</h3>
                    <p>{{instructor.short_bio}}</p>
                </div>
                <div class="teacher__courses pt-55">
                    <div class="section__title-wrapper mb-30">
                      <h2 class="section__title">Teacher <span class="yellow-bg yellow-bg-big">Course<img src="/images/shape/yellow-bg.png" alt=""></span></h2>
                    </div>
                    <div class="teacher__course-wrapper">
                      <div class="row">
                          <div v-for="(course, index) in teacher_courses" :key="index" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                             <course-single :course="course" :index="index"></course-single>
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
import type { ITeacherData } from '@/types/teacher-d-t';

const props = defineProps<{instructor: ITeacherData;}>();

const teacher_courses = [...course_data].filter((item) => item.instructor_name === props.instructor.name);
</script>
