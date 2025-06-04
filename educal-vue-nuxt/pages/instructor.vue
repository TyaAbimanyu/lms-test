<template>
  <div>
    <!-- breadcrumb area start -->
    <breadcrumb-one title="Instructor" subtitle="Instructor"></breadcrumb-one>
    <!-- breadcrumb area end -->

    <!-- instructor area start -->
    <instructor-area :instPage="true"></instructor-area>
    <!-- instructor area end -->

    <!-- banner area start -->
    <banner-area spacing="pb-80"></banner-area>
    <!-- banner area end -->

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Instructor - Educal",
});
</script>
