<template>
  <nuxt-layout name="layout-three">

    <!-- course details area start -->
    <course-details-area :course="course"></course-details-area>
    <!-- course details area end -->

    <!-- cta area start -->
    <cta-area></cta-area>
    <!-- cta area end -->
  </nuxt-layout>
</template>

<script setup lang="ts">
import course_data from '@/data/course-data';
const course = [...course_data][1];

definePageMeta({layout: false});
useSeoMeta({title: "Course Details - Educal"});
</script>
