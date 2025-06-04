<template>
 <section class="page__title-area page__title-height-2 page__title-overlay d-flex align-items-center" style="background-image: url(/images/page-title/page-title-3.jpg);">
    <div class="page__title-shape">
        <img class="page-title-shape-1" src="/images/page-title/page-title-shape-1.png" alt="">
        <img class="page-title-shape-2" src="/images/page-title/page-title-shape-2.png" alt="">
        <img class="page-title-shape-3" src="/images/page-title/page-title-shape-3.png" alt="">
        <img class="page-title-shape-4" src="/images/page-title/page-title-shape-4.png" alt="">
    </div>
    <div class="container">
        <div class="row">
          <div class="col-xxl-10 col-xl-10 col-lg-10 ">
              <div class="page__title-wrapper mt-110">
                <span class="page__title-pre">{{blog.category}}</span>
                <h3 class="page__title-2">{{blog.title}}</h3> 
                <div class="blog__meta d-flex align-items-center">
                    <div class="blog__author d-flex align-items-center mr-40">
                      <div class="blog__author-thumb mr-10">
                          <img :src="blog.author" alt="author">
                      </div>
                      <div class="blog__author-info blog__author-info-2">
                          <h5>{{blog.authorName}}</h5>
                      </div>
                    </div>
                    <div class="blog__date blog__date-2 d-flex align-items-center">
                      <i class="fal fa-clock"></i>
                      <span>{{blog.date}}</span>
                    </div>
                </div>                      
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IBlogData } from '@/types/blog-d-t';

defineProps<{blog:IBlogData}>();
</script>
