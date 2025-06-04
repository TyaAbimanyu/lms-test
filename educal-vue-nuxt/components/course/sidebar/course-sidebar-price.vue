<template>
  <div class="course__sidebar-widget grey-bg">
    <div class="course__sidebar-info">
      <h3 class="course__sidebar-title">Price Filter</h3>
      <ul>
          <li v-for="(p, i) in price_filter" :key="i">
            <div class="course__sidebar-check mb-10 d-flex align-items-center">
                <input :class="`m-check-input ${activeQuery === p.toLowerCase().split(' ').join('-') ? 'active' : ''}`" type="checkbox" :id="p">
                <label  @click="router.push(`/course-sidebar?price=${p.toLowerCase().split(' ').join('-')}`)" class="m-check-label" :for="p">
                  {{p}} ({{p === 'All' ? [...course_data].length : p === 'Free Courses' ? [...course_data].filter(c => c.price === 'free').length : [...course_data].filter(c => c.price !== 'free').length}})
                </label>
            </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import course_data from '@/data/course-data';
const router = useRouter();
const route = useRoute();
const price_filter = ['All', 'Free Courses', 'Premium Courses'];
const activeQuery = ref<string>("");

watch(
  () => route.query,
  (newValue) => {activeQuery.value = newValue.price;}
);
onMounted(() => {
  activeQuery.value = route.query.price;
});
</script>
