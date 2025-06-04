<template>
  <div class="course__sidebar pl-70">
     <div class="course__sidebar-search mb-50">
         <form @submit.prevent="store.handleSearchText">
           <input type="text" placeholder="Search for courses..." v-model="store.searchTextValue">
           <button type="submit">
               <svg-search></svg-search>
           </button>
         </form>
     </div>
     <!-- course category start -->
     <course-sidebar-category></course-sidebar-category>
     <!-- course category end -->

     <!-- course language start -->
     <course-sidebar-language></course-sidebar-language>
     <!-- course language end -->

     <!-- course sidebar price filter start -->
     <course-sidebar-price></course-sidebar-price>
     <!-- course sidebar price filter end -->

     <!-- course sidebar skill level start -->
     <course-sidebar-skill-level></course-sidebar-skill-level>
     <!-- course sidebar skill level end -->
 
     <!-- recent courses start -->
     <div class="course__sidebar-widget grey-bg">
         <div class="course__sidebar-course">
           <h3 class="course__sidebar-title">Recent courses</h3>
           <ul>
               <li v-for="(c, i) in recent_courses" :key="i">
                 <div class="course__sm d-flex align-items-center mb-30">
                     <div class="course__sm-thumb mr-20">
                       <a href="#">
                           <img :src="c.img" alt="">
                       </a>
                     </div>
                     <div class="course__sm-content">
                       <div class="course__sm-rating">
                           <ul>
                             <li><a href="#"> <i class="icon_star"></i> </a></li>
                             <li><a href="#"> <i class="icon_star"></i> </a></li>
                             <li><a href="#"> <i class="icon_star"></i> </a></li>
                             <li><a href="#"> <i class="icon_star"></i> </a></li>
                             <li><a href="#"> <i class="icon_star"></i> </a></li>
                           </ul>
                       </div>
                       <h5><nuxt-link :href="`/course-details/${c.id}`">{{c.category}}</nuxt-link></h5>
                       <div class="course__sm-price">
                           <span>${{c.price}}</span>
                       </div>
                     </div>
                 </div>
               </li>
           </ul>
         </div>
     </div>
     <!-- recent courses end -->

     <!-- reset filter start -->
     <div class="course__sidebar-widget grey-bg">
         <div class="course__sidebar-course">
           <h3 class="course__sidebar-title">Reset Filter</h3>
           <button @click="router.push('/course-sidebar')" class="e-btn w-100">Reset</button>
         </div>
     </div>
     <!-- reset filter end -->
   </div>
 </template>
 
 <script setup lang="ts">
 import { useCourseFilterStore } from '@/pinia/useCourseFilterStore';
 import course_data from '@/data/course-data';
 
 const store = useCourseFilterStore();
 const recent_courses = [...course_data].slice(-3);
 const router = useRouter();
 </script>
 