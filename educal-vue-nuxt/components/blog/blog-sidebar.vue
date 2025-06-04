<template>
 <div class="blog__sidebar pl-70">
    <div class="sidebar__widget mb-60">
        <div class="sidebar__widget-content">
          <div class="sidebar__search p-relative">
              <form action="#">
                <input type="text" placeholder="Search for courses...">
                <button type="submit">
                    <svg-search-2></svg-search-2>
                </button>
              </form>
          </div>
        </div>
    </div>
    <div class="sidebar__widget mb-55">
        <div class="sidebar__widget-head mb-35">
          <h3 class="sidebar__widget-title">Recent posts</h3>
        </div>
        <div class="sidebar__widget-content">
          <div class="rc__post-wrapper">
              <div v-for="item in recent_blogs" :key="item.id" class="rc__post d-flex align-items-center">
                <div class="rc__thumb mr-20">
                    <nuxt-link :href="`/blog-details/${item.id}`">
                      <img :src="item.img" alt="blog-img">
                    </nuxt-link>
                </div>
                <div class="rc__content">
                    <div class="rc__meta">
                      <span>{{item.date}}</span>
                    </div>
                    <h6 class="rc__title">
                      <nuxt-link :href="`/blog-details/${item.id}`">{{item.title}}</nuxt-link>
                    </h6>
                </div>
              </div>
          </div>
        </div>
    </div>
    <div class="sidebar__widget mb-55">
        <div class="sidebar__widget-head mb-35">
          <h3 class="sidebar__widget-title">Category</h3>
        </div>
        <div class="sidebar__widget-content">
          <div class="sidebar__category">
              <ul>
                <li><nuxt-link href="/blog">Category</nuxt-link></li>
                <li><nuxt-link href="/blog">Video & Tips  (4)</nuxt-link></li>
                <li><nuxt-link href="/blog">Education  (8)</nuxt-link></li>
                <li><nuxt-link href="/blog">Business  (5)</nuxt-link></li>
              </ul>
          </div>
        </div>
    </div>
    <div class="sidebar__widget mb-55">
        <div class="sidebar__widget-head mb-35">
          <h3 class="sidebar__widget-title">Tags</h3>
        </div>
        <div class="sidebar__widget-content">
          <div class="sidebar__tag">
              <a href="#">Art & Design</a>
              <a href="#">Course</a>
              <a href="#">Videos</a>
              <a href="#">App</a>
              <a href="#">Education</a>
              <a href="#">Data Science</a>
          </div>
        </div>
    </div>
    <div class="sidebar__widget mb-55">
        <div class="sidebar__banner w-img">
          <img src="/images/blog/banner/banner-1.jpg" alt="">
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import blog_data from '@/data/blog-data';
const recent_blogs = [...blog_data].slice(-2);
</script>
