<template>
  <nuxt-layout name="layout-three">
    
    <!-- event details area start -->
    <event-details-area :event="event"></event-details-area>
    <!-- event details area end -->

    <!-- cta area start -->
    <cta-area></cta-area>
    <!-- cta area end -->
  </nuxt-layout>
</template>

<script setup lang="ts">
import event_data from "@/data/event-data";
const event = [...event_data][0];

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Event Details - Educal",
});
</script>
