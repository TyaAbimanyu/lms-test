<template>
  <div class="course__sidebar-widget grey-bg">
    <div class="course__sidebar-info">
      <h3 class="course__sidebar-title">Language</h3>
      <ul>
        <li v-for="(l, i) in uniqueLanguage" :key="i">
          <div class="course__sidebar-check mb-10 d-flex align-items-center">
            <input
              :class="`m-check-input ${activeQuery === l.toLowerCase()? 'active': ''}`"
              type="checkbox"
              :id="l"
            />
            <label
              @click="router.push(`/course-sidebar?language=${l.toLowerCase()}`)"
              class="m-check-label"
              :for="l"
              >
              {{ l }}
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import course_data from "@/data/course-data";

const router = useRouter();
const uniqueLanguage = [...course_data]
  .map((c) => c.language)
  .filter((value, index, self) => self.indexOf(value) === index);

const activeQuery = ref<string>("");
const route = useRoute();

watch(
  () => route.query,
  (newLang) => {activeQuery.value = newLang.language;}
);
onMounted(() => {
  activeQuery.value = route.query.language;
});
</script>
