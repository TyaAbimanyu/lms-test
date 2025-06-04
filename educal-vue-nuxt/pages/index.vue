<template>
  <nuxt-layout name="layout-one">
    <!-- hero banner start -->
    <hero-banner-one></hero-banner-one>
    <!-- hero banner end -->

    <!-- category area start -->
    <category-area></category-area>
    <!-- category area end -->

    <!-- banner area start -->
    <banner-area></banner-area>
    <!-- banner area end -->

    <!-- course area start -->
    <course-area></course-area>
    <!-- course area end -->

    <!-- event area start -->
    <event-area></event-area>
    <!-- event area end -->

    <!-- pricing area start -->
    <pricing-area></pricing-area>
    <!-- pricing area end -->

    <!-- cta area start -->
    <cta-area></cta-area>
    <!-- cta area end -->
  </nuxt-layout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Home Main - Educal",
});
</script>
