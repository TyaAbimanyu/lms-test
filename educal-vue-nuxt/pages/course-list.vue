<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one
      title="Courses"
      subtitle="Courses"
      bgImg="page-title-2.jpg"
    ></breadcrumb-one>
    <!-- breadcrumb area end -->

    <!-- courses area start -->
    <course-page-area :list_style="true"></course-page-area>
    <!-- courses area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Course List - Educal" });
</script>
