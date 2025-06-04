<template>
  <nuxt-layout name="layout-three">

    <!-- instructor area start -->
    <template v-if="teacher">
      <instructor-details-area :instructor="teacher"></instructor-details-area>
    </template>
    <!-- instructor area end -->

    <!-- cta area start -->
    <cta-area></cta-area>
    <!-- cta area end -->
  </nuxt-layout>
</template>

<script setup lang="ts">
const route = useRoute();
import teacher_data from '@/data/teacher-data';
const teacher = [...teacher_data].find(teacher => teacher.id === Number(route.params.id));
definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Instructor Details - Educal",
});
</script>
