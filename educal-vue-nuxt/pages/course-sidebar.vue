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
    <course-sidebar-page></course-sidebar-page>
    <!-- courses area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Course Sidebar - Educal" });
</script>
