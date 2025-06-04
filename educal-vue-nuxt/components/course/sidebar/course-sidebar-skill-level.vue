<template>
    <div class="course__sidebar-widget grey-bg">
         <div class="course__sidebar-info">
           <h3 class="course__sidebar-title">Skill level</h3>
           <ul>
               <li v-for="(l, i) in unique_skills" :key="i">
                 <div class="course__sidebar-check mb-10 d-flex align-items-center">
                     <input :class="`m-check-input ${activeQuery === l.toLowerCase().split(' ').join('-') ? 'active' : ''}`" type="checkbox" :id="`m-level-${i}`">
                     <label @click="router.push(`/course-sidebar?label=${l.toLowerCase().split(' ').join('-')}`)" class="m-check-label" :for="`m-level-${i}`">{{l}}  ({{l === 'All Levels'? [...course_data].length: [...course_data].filter(c => c.skill_label.includes(l)).length}})
                    </label>
                 </div>
               </li>
           </ul>
         </div>
     </div>
</template>

<script setup lang="ts">
import course_data from '@/data/course-data';
const all_skills = [...course_data].map((c) => c.skill_label).filter((value, index, self) => self.indexOf(value) === index);
const unique_skills = ['All Levels', ...all_skills];
const router = useRouter();

const activeQuery = ref<string>("");
const route = useRoute();
 watch(
  () => route.query,
  (newValue) => {activeQuery.value = newValue.label;}
);
onMounted(() => {
  activeQuery.value = route.query.label;
});
</script>
