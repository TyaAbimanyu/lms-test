<template>
  <div class="blog__item white-bg mb-30 transition-3 fix">
      <div class="blog__thumb w-img fix">
          <nuxt-link :href="`/blog-details/${blog.id}`">
            <img :src="blog.img" :alt="blog.title">
          </nuxt-link>
      </div>
      <div class="blog__content">
          <div class="blog__tag">
            <a href="#" :class="blog.color ? blog.color : ''">{{blog.category}}</a>
          </div>
          <h3 class="blog__title">
            <nuxt-link :href="`/blog-details/${blog.id}`">
              {{blog.title}}
            </nuxt-link>
          </h3>

          <div class="blog__meta d-flex align-items-center justify-content-between">
            <div class="blog__author d-flex align-items-center">
                <div class="blog__author-thumb mr-10">
                  <img :src="blog.author" alt="">
                </div>
                <div class="blog__author-info">
                  <h5>{{blog.authorName}}</h5>
                </div>
            </div>
            <div class="blog__date d-flex align-items-center">
                <i class="fal fa-clock"></i>
                <span>{{blog.date}}</span>
            </div>
          </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { IBlogData } from "@/types/blog-d-t";

defineProps<{blog:IBlogData}>();
</script>

