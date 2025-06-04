<template>
  <div v-if="blog">

    <!-- breadcrumb area start -->
    <blog-details-breadcrumb :blog="blog"></blog-details-breadcrumb>
    <!-- breadcrumb area end -->

    <!-- blog details area start -->
    <blog-details-area :blog="blog"></blog-details-area>
    <!-- blog details area end -->
    
  </div>
</template>

<script setup lang="ts">
import blog_data from '@/data/blog-data';
const route = useRoute();
const blog = [...blog_data].find(b => b.id === Number(route.params.id));
useSeoMeta({title: "Blog Details - Educal"});
</script>
