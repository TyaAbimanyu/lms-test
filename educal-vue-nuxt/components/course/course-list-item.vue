<template>
  <div class="course__item white-bg mb-30 fix">
      <div class="row gx-0">
        <div class="col-xxl-4 col-xl-4 col-lg-4">
            <div class="course__thumb course__thumb-list w-img p-relative fix">
              <nuxt-link :href="`/course-details/${course.id}`">
                  <img :src="course.img" alt="course-thumb" :style="`height: ${style_2?252:382}px;object-fit: cover`">
              </nuxt-link>
              <div @click="wishlistStore.add_wishlist_product(course)" :class="`heart_icon ${isItemInWishlist(course) ? 'active' : ''}`">
                <i class="fas fa-heart"></i>
              </div>
              <div class="course__tag">
                  <a href="#" :class="`tag-${index}`">{{course.category}}</a>
              </div>
            </div>
        </div>
        <div class="col-xxl-8 col-xl-8 col-lg-8">
            <div class="course__right">
              <div class="course__content course__content-3">
                  <div class="course__meta d-flex align-items-center">
                    <div class="course__lesson mr-20">
                        <span><i class="far fa-book-alt"></i>{{course.lesson}} Lesson</span>
                    </div>
                    <div class="course__rating">
                        <span v-if="course.reviews?.length"><i class="icon_star"></i>
                          {{averageRating(course.reviews)}} ({{course.reviews.length}})
                        </span>
                    </div>
                  </div>
                  <h3 :class="`course__title ${style_2?'':'course__title-3'}`">
                    <nuxt-link :href="`/course-details/${course.id}`">{{course.title}}</nuxt-link>
                  </h3>
                  <div v-if="!style_2" class="course__summary">
                    <p>{{course.course_summary}}</p>
                  </div>
                  <div class="course__teacher d-flex align-items-center">
                    <div class="course__teacher-thumb mr-15">
                        <img :src="course.instructor_img" alt="instructor_img">
                    </div>
                    <h6>
                      <nuxt-link href="/instructor-details">{{course.instructor_name}}</nuxt-link>
                    </h6>
                  </div>
              </div>
              <div class="course__more course__more-2 d-flex justify-content-between align-items-center">
                  <div class="course__status">
                    <span v-if="course.price === 'free'">{{ course.price }}</span>
                    <span v-if="course.price !== 'free' && typeof course.price === 'number'" class="sky-blue">
                      ${{ course.price.toFixed(2) }}
                    </span>
                    <span v-if="course.oldPrice && typeof course.oldPrice === 'number'" class="old-price">
                      ${{ course.oldPrice.toFixed(2) }}
                    </span>
                  </div>
                  <div class="course__btn">
                    <nuxt-link :href="`/course-details/${course.id}`" class="link-btn">
                        Know Details
                        <i class="far fa-arrow-right"></i>
                        <i class="far fa-arrow-right"></i>
                    </nuxt-link>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { ICourse } from "@/types/course-d-t";
import {averageRating} from '../../utils/utils';
defineProps<{course: ICourse;index:number;style_2?:boolean}>();
import { useWishlistStore } from "@/pinia/useWishlistStore";

const wishlistStore = useWishlistStore();

function isItemInWishlist(item: ICourse) {
  return wishlistStore.wishlists.some((c) => c.id === item.id);
}
</script>
