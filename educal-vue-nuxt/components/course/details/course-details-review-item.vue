<template>
  <div
    class="course__review-item d-flex align-items-center justify-content-between"
  >
    <div class="course__review-text">
      <span>{{stars}} stars</span>
    </div>
    <div class="course__review-progress">
      <div class="single-progress" :style="`width:${width}`"></div>
    </div>
    <div class="course__review-percent">
      <h5>{{percentage}}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{stars:number;width:string;percentage:number;}>();
</script>
