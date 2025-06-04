<template>
 <section class="course__area pt-120 pb-120">
    <div class="container">
        <div class="course__tab-inner grey-bg-2 mb-50">
          <div class="row align-items-center">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="course__tab-wrapper d-flex align-items-center">
                    <div class="course__tab-btn">
                      <ul class="nav nav-tabs" id="courseTab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button :class="`nav-link ${list_style?'':'active'}`" id="grid-tab" data-bs-toggle="tab" data-bs-target="#grid" type="button" role="tab" aria-controls="grid" aria-selected="true">
                             <svg-grid></svg-grid>
                            </button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button :class="`nav-link list ${list_style?'active':''}`" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                            <svg-list></svg-list>
                            </button>
                          </li>
                      </ul>
                    </div>
                    <div class="course__view">
                      <h4>
                        Showing 1 - {{courses.slice(startIndex, endIndex).length}} of {{course_data.length}}
                      </h4>
                    </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="course__sort d-flex justify-content-sm-end">
                    <div class="course__sort-inner">
                      <select @change="filterCourse">
                          <option value="">Default</option>
                          <option value="low">Price Low - High</option>
                          <option value="high">Price High - Low</option>
                          <option value="new">New Arrivals</option>
                      </select>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xxl-12">
              <div class="course__tab-conent">
                <div class="tab-content" id="courseTabContent">
                    <div :class="`tab-pane fade ${list_style?'':'show active'}`" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                      <div class="row">
                          <div v-for="(course, i) in courses.slice(startIndex, endIndex)" :key="i" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <course-single :course="course" :index="i"></course-single>
                          </div>
                      </div>
                    </div>
                    <div :class="`tab-pane fade ${list_style?'show active':''}`" id="list" role="tabpanel" aria-labelledby="list-tab">
                      <div class="row">

                          <div v-for="(course, i) in courses.slice(startIndex, endIndex)" :key="i" class="col-xxl-12">
                            <course-list-item :course="course" :index="i"></course-list-item>
                          </div>                                                           
                       
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xxl-12">
              <div class="basic-pagination wow fadeInUp mt-30" data-wow-delay=".2s">
                <pagination
                  :items-per-page="9"
                  :data="courses"
                  @handle-paginate="handlePagination"
                />
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import course_data from '@/data/course-data';
import type { ICourse } from '@/types/course-d-t';
import {formatUrl} from '../../utils/utils';
const props = defineProps<{list_style?:boolean;searchText?:string;searchCategory?:string}>();
let changeValue = ref<string>('');

const courses = computed(() => {
  let filteredCourses = [...course_data];

  if (props.searchText && props.searchCategory) {
    filteredCourses = filteredCourses.filter((c) =>
      c.title.toLowerCase().includes(props.searchText!.toLowerCase()) &&
      formatUrl(c.category) === props.searchCategory
    );
  } else if (props.searchText && !props.searchCategory) {
    filteredCourses = filteredCourses.filter((c) =>
      c.title.toLowerCase().includes(props.searchText!.toLowerCase())
    );
  } else if (!props.searchText && props.searchCategory) {
    filteredCourses = filteredCourses.filter((c) =>
      formatUrl(c.category) === props.searchCategory
    );
  }

  if (changeValue.value === 'low') {
    return filteredCourses.slice().sort((a, b) => Number(a.price) - Number(b.price));
  } else if (changeValue.value === 'high') {
    return filteredCourses.slice().sort((a, b) => Number(b.price) - Number(a.price));
  } else if (changeValue.value === 'new') {
    return filteredCourses.slice().reverse();
  } 

  return filteredCourses;
});


const filterCourse = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  changeValue.value = target.value;
};

let filteredProductsItems = ref<ICourse[]>(courses.value);

let startIndex = ref<number>(0);
let endIndex = ref<number>(courses.value.length);

const handlePagination = (data: ICourse[], start: number, end: number) => {
  filteredProductsItems.value = data;
  startIndex.value = start;
  endIndex.value = end;
};

watch(courses, (newCourses) => {
  filteredProductsItems.value = newCourses;
});
</script>
