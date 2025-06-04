<template>
  <section :class="`teacher__area pt-115 ${instPage?'pb-110':'pb-100'}`">
    <div class="container">
        <div class="row">
          <div class="col-xxl-6 offset-xxl-3">
              <div class="section__title-wrapper text-center mb-60">
                <h2 class="section__title">Our Most <br>
                    Popular <span class="yellow-bg"> Teachers <img src="/images/shape/yellow-bg-2.png" alt="yellow-bg"> </span> <br>
                </h2>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
              </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(teacher, index) in instructors" :key="index" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <instructor-single :teacher="teacher"></instructor-single>
          </div>
        </div>
        <div class="row">
          <div class="col-xxl-12">
              <div class="teacher__more text-center mt-30">
                <nuxt-link href="/contact" class="e-btn e-btn-border e-btn-5">Become an Instructor</nuxt-link>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import teacher_data from '@/data/teacher-data';
const props = defineProps<{instPage?: boolean}>();
const instructors = props.instPage ? [...teacher_data] : [...teacher_data].slice(0,3);
</script>
