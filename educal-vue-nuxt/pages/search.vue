<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one
      title="Search Courses"
      subtitle="Search Courses"
      bgImg="page-title-2.jpg"
    ></breadcrumb-one>
    <!-- breadcrumb area end -->

    <!-- courses area start -->
    <course-page-area
      :searchText="route.query.searchText"
      :searchCategory="route.query.category"
    ></course-page-area>
    <!-- courses area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Search - Educal" });
const route = useRoute();
</script>
