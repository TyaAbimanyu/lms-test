<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useCourseFilterStore } from './pinia/useCourseFilterStore';
const route = useRoute();
const courseFilterStore = useCourseFilterStore();

watch(() => route.path, () => {
  courseFilterStore.$reset
})
</script>

