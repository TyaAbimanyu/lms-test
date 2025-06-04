<template>
  <section class="blog__area pt-115 pb-130">
    <div class="container">
        <div class="row">
          <div class="col-xxl-6 offset-xxl-3">
              <div class="section__title-wrapper text-center mb-60">
                <h2 class="section__title">We share <br>
                    Our <span class="yellow-bg yellow-bg-big">thoughts 
                      <img src="/images/shape/yellow-bg.png" alt="">
                    </span>on design
                  </h2>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
              </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(blog, i) in blog_items" :key="i" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <blog-single :blog="blog"></blog-single>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import blog_data from '@/data/blog-data';
const blog_items = [...blog_data].slice(0,3)
</script>
