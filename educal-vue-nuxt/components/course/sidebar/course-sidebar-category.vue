<template>
  <div class="course__sidebar-widget grey-bg">
    <div class="course__sidebar-info">
      <h3 class="course__sidebar-title">Categories</h3>
      <ul>
          <li v-for="(c, i) in [...category_data]" :key="i">
            <div class="course__sidebar-check mb-10 d-flex align-items-center">
                <input :class="`m-check-input ${activeQuery === c.slug ? 'active' : ''}`" type="checkbox" :id="c.title.split(' ').join('-')">
                <label @click="router.push(`/course-sidebar?category=${c.slug}`)" class="m-check-label" :for="c.title.split(' ').join('-')">
                  {{c.title}}  ({{c.courses.length}})
                </label>
            </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import category_data from "@/data/category-data";
const activeQuery = ref<string>("");

const router = useRouter();
const route = useRoute();

watch(
  () => route.query,
  (newCategory) => {activeQuery.value = newCategory.category;}
);
onMounted(() => {
  activeQuery.value = route.query.category;
});
</script>

