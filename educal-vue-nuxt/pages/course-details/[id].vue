<template>
  <nuxt-layout name="layout-three">

    <template v-if="course">
    <!-- course details area start -->
    <course-details-area :course="course"></course-details-area>
    <!-- course details area end -->
    </template>

    <!-- cta area start -->
    <cta-area></cta-area>
    <!-- cta area end -->
  </nuxt-layout>
</template>

<script setup lang="ts">
import course_data from '@/data/course-data';
const route = useRoute();
const course = [...course_data].find((c) => c.id === Number(route.params.id));

definePageMeta({layout: false});
useSeoMeta({title: "Course Details - Educal"});
</script>
