<template>
 <div class="course__item white-bg mb-30 fix">
    <div class="course__thumb w-img p-relative fix">
        <nuxt-link :href="`/course-details/${course.id}`">
          <img :src="course.img" alt="course-img">
        </nuxt-link>
        <button @click="wishlistStore.add_wishlist_product(course)" :class="`heart_icon ${isItemInWishlist(course) ? 'active' : ''}`">
          <i class="fas fa-heart"></i>
        </button>
        <div class="course__tag">
          <a href="#" :class="`tag-${index}`">{{ course.category }}</a>
        </div>
    </div>
    <div class="course__content">
        <div class="course__meta d-flex align-items-center justify-content-between">
          <div class="course__lesson">
              <span><i class="far fa-book-alt"></i>{{ course.lesson }} Lesson</span>
          </div>
          <div class="course__rating">
              <span v-if="course.reviews?.length"><i class="icon_star"></i>
                {{averageRating(course.reviews)}} ({{course.reviews.length}})
              </span>
          </div>
        </div>
        <h3 class="course__title">
          <nuxt-link :href="`/course-details/${course.id}`">{{ course.title }}</nuxt-link>
        </h3>
        <div class="course__teacher d-flex align-items-center">
          <div class="course__teacher-thumb mr-15">
              <img :src="course.instructor_img" alt="instructor_img">
          </div>
          <h6><a href="#">{{ course.instructor_name }}</a></h6>
        </div>
    </div>
    <div class="course__more d-flex justify-content-between align-items-center">
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
</template>

<script setup lang="ts">
import type { ICourse } from "@/types/course-d-t";
import {averageRating} from '../../utils/utils';
defineProps<{course: ICourse;index:number}>();
import { useWishlistStore } from "@/pinia/useWishlistStore";

const wishlistStore = useWishlistStore();

function isItemInWishlist(item: ICourse) {
  return wishlistStore.wishlists.some((c) => c.id === item.id);
}
</script>

