<template>
  <nuxt-layout name="layout-three">

    <!-- 404 area start -->
    <section class="error__area pt-200 pb-200">
        <div class="container">
            <div class="row">
              <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                  <div class="error__item text-center">
                    <div class="error__thumb mb-45">
                        <img src="/images/error/error.png" alt="">
                    </div>
                    <div class="error__content">
                        <h3 class="error__title">{{error.message}}</h3>
                        <p>Please try searching for some other page.</p>
                        <nuxt-link href="/" class="e-btn e-btn-3 e-btn-4">Back To Home</nuxt-link>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
    <!-- 404 area end -->

    <!-- cta area start -->
    <cta-area></cta-area>
    <!-- cta area end -->
  </nuxt-layout>
</template>

<script setup lang="ts">
definePageMeta({layout: false});
useSeoMeta({title: "Error Page - Educal"});
defineProps(["error"]);
</script>
