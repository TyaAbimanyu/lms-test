<template>
  <nuxt-layout name="layout-two">
    <!-- hero banner start -->
    <hero-banner-two></hero-banner-two>
    <!-- hero banner end -->

    <!-- service area start -->
    <service-area></service-area>
    <!-- service area end -->

    <!-- about area start -->
    <about-area></about-area>
    <!-- about area end -->

    <!-- course area start -->
    <course-area></course-area>
    <!-- course area end -->

    <!-- what we do area start -->
    <what-area></what-area>
    <!-- what we do area end -->

    <!-- choses-area start -->
    <choses-area></choses-area>
    <!-- choses-area end -->

    <!-- counter area start -->
    <counter-area></counter-area>
    <!-- counter area end -->

    <!-- testimonial area start -->
    <testimonial-one></testimonial-one>
    <!-- testimonial area end -->

    <!-- blog area start -->
    <blog-area></blog-area>
    <!-- blog area end -->

    <!-- cta area start -->
    <cta-area-2></cta-area-2>
    <!-- cta area end -->
  </nuxt-layout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Home Two - Educal",
});
</script>
