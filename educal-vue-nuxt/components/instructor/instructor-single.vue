<template>
 <div class="teacher__item text-center grey-bg-5 transition-3 mb-30">
    <div class="teacher__thumb w-img fix">
        <nuxt-link :href="`/instructor-details/${teacher.id}`">
          <img :src="teacher.img" alt="teacher-img">
        </nuxt-link>
    </div>
    <div class="teacher__content">
        <h3 class="teacher__title">
          <nuxt-link :href="`/instructor-details/${teacher.id}`">{{teacher.name}},</nuxt-link>
        </h3> 
        <span> {{teacher.title}}</span>

        <div class="teacher__social">
          <ul>
              <li v-for="(s, i) in teacher.social_links" :key="i">
                <nuxt-link :href="s.link"><i :class="s.icon"></i></nuxt-link>
              </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITeacherData } from "@/types/teacher-d-t";

defineProps<{teacher:ITeacherData}>()
</script>
