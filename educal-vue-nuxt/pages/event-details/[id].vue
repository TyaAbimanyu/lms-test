<template>
  <nuxt-layout name="layout-three">
    
    <!-- event details area start -->
    <template v-if="event">
      <event-details-area :event="event"></event-details-area>
    </template>
    <!-- event details area end -->

    <!-- cta area start -->
    <cta-area></cta-area>
    <!-- cta area end -->
  </nuxt-layout>
</template>

<script setup lang="ts">
import event_data from "@/data/event-data";
const route = useRoute();
const event = [...event_data].find(e => e.id === Number(route.params.id));

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Event Details - Educal",
});
</script>
