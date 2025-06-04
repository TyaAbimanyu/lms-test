<template>
  <nuxt-layout name="layout-three">
    <!-- instructor area start -->
    <instructor-details-area :instructor="teacher"></instructor-details-area>
    <!-- instructor area end -->

    <!-- banner area start -->
    <banner-area spacing="pb-80"></banner-area>
    <!-- banner area end -->

    <!-- cta area start -->
    <cta-area></cta-area>
    <!-- cta area end -->
  </nuxt-layout>
</template>

<script setup lang="ts">
import teacher_data from '@/data/teacher-data';
const teacher = [...teacher_data][0];

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Instructor Details - Educal",
});
</script>
