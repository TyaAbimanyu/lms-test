<template>
 <section class="course__area pt-115 pb-120 grey-bg">
    <div class="container">
        <div class="row align-items-end">
          <div class="col-xxl-5 col-xl-6 col-lg-6">
              <div class="section__title-wrapper mb-60">
                <h2 class="section__title">Find the Right<br>Online <span class="yellow-bg yellow-bg-big">Course<img src="/images/shape/yellow-bg.png" alt=""></span> for you</h2>
                <p>You don't have to struggle alone, you've got our assistance and help.</p>
              </div>
          </div>
          <div class="col-xxl-7 col-xl-6 col-lg-6">
              <div class="course__menu d-flex justify-content-lg-end mb-60">
                <div class="masonary-menu filter-button-group">
                    <button v-for="(category,i) in categories" :key="i" :class="`${category === active_tab ? 'active' : ''}`" @click="active_tab = category">
                      {{ category }} <span v-if="category === 'See All'" class="tag">new</span>
                    </button>
                </div>
              </div>
          </div>
        </div>
        <div class="row grid">
          <div v-for="(course, index) in filteredProducts" :key="index" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat2 cat4">
              <course-single :course="course" :index="index"></course-single>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import course_data from '@/data/course-data';
import category_data from "@/data/category-data";
const all_category = category_data.map((c) => c.title);
const uniqueCategory = new Set(all_category);
const categories = ["See All", ...uniqueCategory].slice(0,5);
let active_tab = ref<string>(categories[0]);

// filteredProducts
const filteredProducts = computed(() => {
  if (active_tab.value === "See All") {
    return [...course_data].slice(0, 6);
  } else {
    return [...course_data].filter((p) => p.category.toLowerCase() === active_tab.value.toLowerCase());
  }
});
</script>
