<template>
 <section class="page__title-area pt-120 pb-90">
    <div class="page__title-shape">
        <img class="page-title-shape-5 d-none d-sm-block" src="/images/page-title/page-title-shape-1.png" alt="">
        <img class="page-title-shape-6" src="/images/page-title/page-title-shape-6.png" alt="">
        <img class="page-title-shape-7" src="/images/page-title/page-title-shape-4.png" alt="">
    </div>
    <div class="container">
        <div class="row">
          <div class="col-xxl-8 col-xl-8 col-lg-8">
              <div class="course__wrapper">
                <div class="page__title-content mb-25">
                    <div class="page__title-breadcrumb">                            
                        <nav aria-label="breadcrumb">
                          <ol class="breadcrumb">
                            <li class="breadcrumb-item"><nuxt-link href="/">Home</nuxt-link></li>
                            <li class="breadcrumb-item"><nuxt-link href="/courses">Courses</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">{{course.title}}</li>
                          </ol>
                        </nav>
                    </div>
                    <span class="page__title-pre">{{course.category}}</span>
                    <h5 class="page__title-3">{{course.title}}</h5>
                </div>
                <div class="course__meta-2 d-sm-flex mb-30">
                    <div class="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                      <div class="course__teacher-thumb-3 mr-15">
                          <img :src="course.instructor_img" alt="">
                      </div>
                      <div class="course__teacher-info-3">
                          <h5>Teacher</h5>
                          <p><a href="#">{{course.instructor_name}}</a></p>
                      </div>
                    </div>
                    <div class="course__update mr-80 mb-30">
                      <h5>Last Update:</h5>
                      <p>{{course.updated_at}}</p>
                    </div>
                    <div class="course__rating-2 mb-30">
                      <h5>Review:</h5>
                      <div class="course__rating-inner d-flex align-items-center">
                          <ul>
                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                          </ul>
                          <p v-if="course.reviews?.length">{{averageRating(course.reviews)}}</p>
                      </div>
                    </div>
                </div>
                <div class="course__img w-img mb-30">
                    <img :src="course.img" alt="">
                </div>
                <div class="course__tab-2 mb-45">
                    <ul class="nav nav-tabs" id="courseTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true"> <i class="icon_ribbon_alt"></i> <span>Discription</span> </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link " id="curriculum-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="curriculum" aria-selected="false"> <i class="icon_book_alt"></i> <span>Curriculum</span> </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false"> <i class="icon_star_alt"></i> <span>Reviews</span> </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="false"> <i class="fal fa-user"></i> <span>Members</span> </button>
                      </li>
                    </ul>
                </div>
                <div class="course__tab-content mb-95">
                    <div class="tab-content" id="courseTabContent">
                      <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                          <div class="course__description">
                            <h3>Course Overview</h3>
                            <p>{{course.overview}}</p>

                            <div class="course__tag-2 mb-35 mt-35">
                                <i class="fal fa-tag"></i>
                                <a href="#">{{course.tags.join(', ')}}</a>
                            </div>
                            <div class="course__description-list mb-45">
                                <h4>What is the Target Audience?</h4>
                                <ul>
                                  <li v-for="(item,i) in course.target_audience" :key="i"> 
                                    <i class="icon_check"></i> {{item}}
                                  </li>
                                </ul>
                            </div>
                            <div class="course__instructor mb-45">
                                <h3>Other Instructors</h3>
                                <div class="course__instructor-wrapper d-md-flex align-items-center">
                                  <div v-for="(item,i) in course.other_instructor" :key="i" class="course__instructor-item d-flex align-items-center mr-70">
                                      <div class="course__instructor-thumb mr-20">
                                        <img :src="item.teacher_img" alt="teacher_img">
                                      </div>
                                      <div class="course__instructor-content">
                                        <h3>{{item.teacher_name}}</h3>
                                        <p>{{item.teacher_title}}</p>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                      <div class="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                          <div class="course__curriculum">

                            <div v-for="(curr, i) in course.curriculum" :key="i" class="accordion" :id="curr.id">
                            <div class="accordion-item mb-50">
                              <h2 class="accordion-header" :id="`week-0${i}`">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#week-0${i}-content`" aria-expanded="true"
                                  :aria-controls="`week-0${i}-content`">
                                  {{curr.course_c_title}}
                                </button>
                              </h2>
                              <div :id="`week-0${i}-content`" class="accordion-collapse collapse show" :aria-labelledby="`week-0${i}`" :data-bs-parent="`#${curr.id}`">
                                <div class="accordion-body">
                                    <div v-for="(info, i) in curr.course_info" :key="i" class="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                                      <div class="course__curriculum-info">
                                        <svg-video v-if="info.video"/> <svg-audio v-else-if="info.audio"/> <svg-reading v-else/>
                                        <h3> <span>{{info.course_c_text}}</span>{{info.course_c_text_2}}</h3>
                                      </div>
                                      <div class="course__curriculum-meta">
                                        <span class="time"> <i class="icon_clock_alt"></i>{{info.minute}}</span>
                                         <span v-if="info.questions" class="question">{{info.questions}}</span>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          </div>
                      </div>
                      <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                          <div class="course__review">
                            <h3>Reviews</h3>
                            <p>Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do</p>

                            <div class="course__review-rating mb-50">
                                <div class="row g-0">
                                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                      <div class="course__review-rating-info grey-bg text-center">
                                        <h5>5</h5>
                                        <ul>
                                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                                            <li><a href="#"> <i class="icon_star"></i> </a></li>
                                        </ul>
                                        <p>{{course.reviews?.length}} Ratings</p>
                                      </div>
                                  </div>
                                  <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                      <div class="course__review-details grey-bg">
                                        <h5>Detailed Rating</h5>
                                        <div class="course__review-content mb-20">
                                          <course-details-review-item :stars="5" :percentage="100" width="100%"/>
                                          <course-details-review-item :stars="4" :percentage="30" width="30%"/>
                                          <course-details-review-item :stars="3" :percentage="0" width="0%"/>
                                          <course-details-review-item :stars="2" :percentage="0" width="0%"/>
                                          <course-details-review-item :stars="1" :percentage="0" width="0%"/>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                            <div class="course__comment mb-75">
                                <h3>2 Reviews</h3>

                                <ul>
                                  <li v-for="(review, i) in course.reviews" :key="i">
                                      <div class="course__comment-box ">
                                        <div class="course__comment-thumb float-start">
                                            <img :src="review.user" alt="">
                                        </div>
                                        <div class="course__comment-content">
                                            <div class="course__comment-wrapper ml-70 fix">
                                              <div class="course__comment-info float-start">
                                                  <h4>{{review.name}}</h4>
                                                  <span>{{review.date}}</span>
                                              </div>
                                              <div class="course__comment-rating float-start float-sm-end">
                                                  <ul>
                                                    <li><a href="#"> <i class="icon_star"></i> </a></li>
                                                    <li><a href="#"> <i class="icon_star"></i> </a></li>
                                                    <li><a href="#"> <i class="icon_star"></i> </a></li>
                                                    <li><a href="#"> <i class="icon_star"></i> </a></li>
                                                    <li><a href="#" > <i class="icon_star"></i> </a></li>
                                                  </ul>
                                              </div>
                                            </div>
                                            <div class="course__comment-text ml-70">
                                              <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.</p>
                                            </div>
                                        </div>
                                      </div>
                                  </li>
                                </ul>
                            </div>
                            <div class="course__form">
                                <h3>Write a Review</h3>
                                <div class="course__form-inner">
                                  <!-- form course review -->
                                  <form-course-review />
                                  <!-- form course review end -->
                                </div>
                            </div>
                          </div>
                      </div>
                      <div class="tab-pane fade" id="member" role="tabpanel" aria-labelledby="member-tab">
                          <div class="course__member mb-45">
                            
                            <div class="course__member-item">
                                <div class="row align-items-center">
                                  <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
                                      <div class="course__member-thumb d-flex align-items-center">
                                        <img src="/images/course/instructor/course-instructor-1.jpg" alt="">
                                        <div class="course__member-name ml-20">
                                            <h5>Shahnewaz Sakil</h5>
                                            <span>Engineer</span>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                      <div class="course__member-info pl-45">
                                        <h5>07</h5>
                                        <span>Courses</span>
                                      </div>
                                  </div>
                                  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                      <div class="course__member-info pl-70">
                                        <h5>05</h5>
                                        <span>Reviw</span>
                                      </div>
                                  </div>
                                  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
                                      <div class="course__member-info pl-85">
                                        <h5>3.00</h5>
                                        <span>Rating</span>
                                      </div>
                                  </div>
                                </div>
                            </div>

                          </div>
                      </div>
                      <div class="course__share">
                          <h3>Share :</h3>
                          <ul>
                            <li><a href="#" class="fb" ><i class="social_facebook"></i></a></li>
                            <li><a href="#" class="tw" ><i class="social_twitter"></i></a></li>
                            <li><a href="#" class="pin" ><i class="social_pinterest"></i></a></li>
                          </ul>
                      </div>
                    </div>
                </div>


                <div class="course__related">
                    <div class="row">
                      <div class="col-xxl-12">
                          <div class="section__title-wrapper mb-40">
                            <h2 class="section__title">Related <span class="yellow-bg yellow-bg-big">Course<img src="/images/shape/yellow-bg.png" alt=""></span></h2>
                            <p>You don't have to struggle alone, you've got our assistance and help.</p>
                          </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xxl-12">
                          <swiper v-bind="slider_setting" :modules="[Pagination]" class="course__slider swiper-container pb-60">
                            <swiper-slide v-for="(course,i) in relates_course" :key="course.id">
                              <course-single :course="course" :index="i"></course-single>
                            </swiper-slide>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination"></div>
                          </swiper>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-4">
              <div class="course__sidebar pl-70 p-relative">
                <div class="course__shape">
                    <img class="course-dot" src="/images/course/course-dot.png" alt="">
                </div>
                <div class="course__sidebar-widget-2 white-bg mb-20">
                    <div class="course__video">
                      <div class="course__video-thumb w-img mb-25">
                          <img src="/images/course/video/course-video.jpg" alt="">
                          <div class="course__video-play"> 
                            <a @click="playVideo(course.y_video_id)" class="play-btn pointer"> 
                              <i class="fas fa-play"></i> 
                            </a>
                          </div>
                      </div>
                      <div class="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                          <div class="course__video-price">
                            <h5>
                              {{ typeof course.price === 'number' ? '$' + course.price.toFixed(2) : course.price}}
                            </h5>
                            <h5 v-if="course.oldPrice" class="old-price">${{course.oldPrice}}</h5>
                          </div>
                          <div v-if="course.oldPrice && typeof course.price === 'number'" class="course__video-discount">
                            <span>{{discountPercentage(course.price,Number(course.oldPrice)).toFixed(2)}}% OFF</span>
                          </div>
                      </div>
                      <div class="course__video-content mb-35">
                          <ul>
                            <li class="d-flex align-items-center">
                                <div class="course__video-icon">
                                  <svg-instructor/>
                                </div>
                                <div class="course__video-info">
                                  <h5><span>Instructor :</span> {{course.instructor_name}}</h5>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="course__video-icon">
                                  <svg-lesson/>
                                </div>
                                <div class="course__video-info">
                                  <h5><span>Lessons :</span>{{course.lesson}}</h5>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="course__video-icon">
                                  <svg-duration/>
                                </div>
                                <div class="course__video-info">
                                  <h5><span>Duration :</span>{{course.duration}}</h5>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="course__video-icon">
                                  <svg-student/>
                                </div>
                                <div class="course__video-info">
                                  <h5><span>Enrolled :</span>{{course.enrollment}} students</h5>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="course__video-icon">
                                  <svg-language/>
                                </div>
                                <div class="course__video-info">
                                  <h5><span>Language :</span>{{course.language}}</h5>
                                </div>
                            </li>
                          </ul>
                      </div>
                      <div class="course__payment mb-35">
                          <h3>Payment:</h3>
                          <a href="#">
                            <img src="/images/course/payment/payment-1.png" alt="">
                          </a>
                      </div>
                      <div class="course__enroll-btn">
                          <button v-if="!isItemInCart(course)" @click="cartStore.addCartProduct(course)" class="e-btn e-btn-7 w-100">
                            Add to cart <i class="far fa-arrow-right"></i>
                          </button>
                          <nuxt-link to="/cart" v-if="isItemInCart(course)" class="e-btn e-btn-7 w-100">
                            View cart <i class="far fa-arrow-right"></i>
                          </nuxt-link>
                      </div>
                    </div>
                </div>
                <div class="course__sidebar-widget-2 white-bg mb-20">
                    <div class="course__sidebar-course">
                      <h3 class="course__sidebar-title">Related courses</h3>
                      <ul>
                          <li v-for="course in relates_course" :key="course.id">
                            <div class="course__sm d-flex align-items-center mb-30">
                                <div class="course__sm-thumb mr-20">
                                  <a href="#">
                                      <img :src="course.img" alt="">
                                  </a>
                                </div>
                                <div class="course__sm-content">
                                  <div class="course__sm-rating">
                                      <ul>
                                        <li><a href="#"> <i class="icon_star"></i> </a></li>
                                        <li><a href="#"> <i class="icon_star"></i> </a></li>
                                        <li><a href="#"> <i class="icon_star"></i> </a></li>
                                        <li><a href="#"> <i class="icon_star"></i> </a></li>
                                        <li><a href="#"> <i class="icon_star"></i> </a></li>
                                      </ul>
                                  </div>
                                  <h5><a href="#">{{course.category}}</a></h5>
                                  <div class="course__sm-price">
                                      <span>{{ typeof course.price === 'number' ? '$' + course.price.toFixed(2) : course.price}}
                                      </span>
                                  </div>
                                </div>
                            </div>
                          </li>
                      </ul>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>

  <!-- video popup start -->
  <modal-video></modal-video>
  <!-- video popup end -->
</template>

<script setup lang="ts">
import {Swiper,SwiperSlide} from 'swiper/vue';
import {Pagination} from 'swiper/modules';
import type { ICourse } from "@/types/course-d-t";
import course_data from '@/data/course-data';
const {playVideo} = useVideoPopup();
import { useCartStore } from "@/pinia/useCartStore";
import {averageRating,discountPercentage} from '../../../utils/utils';
defineProps<{course: ICourse}>();
const cartStore = useCartStore(); 

const relates_course = computed(() => {
  return [...course_data].slice(0, 3);
});

function isItemInCart(product: ICourse) {
  return cartStore.cart_products.some((prd) => prd.id === product.id);
}

const slider_setting = {
  spaceBetween: 30,
	slidesPerView: 2,
	breakpoints: {  
		'768': {
			slidesPerView: 2,
		},
		'576': {
			slidesPerView: 1,
		},
		'0': {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
}
</script>

