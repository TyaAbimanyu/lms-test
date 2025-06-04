<template>
    <ul class="d-flex align-items-center"> 
      <li @click="setPage(currentPage-1)" :class="`prev ${currentPage === 1 ?'disable':''}`">
        <a class="link-btn link-prev pointer">
            Prev
            <i class="arrow_left"></i>
            <i class="arrow_left"></i>
        </a>
      </li>

      <li v-for="n in totalPages" :key="n" @click="setPage(n)" :class="currentPage === n ? 'active' : ''">
        <a class="pointer"><span>{{n}}</span></a>
      </li>

      <li @click="setPage(currentPage+1)" :class="`next ${currentPage === totalPages ?'disable':''}`">
        <a class="link-btn pointer">
            Next
            <i class="arrow_right"></i>
            <i class="arrow_right"></i>
        </a>
      </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, ref, onMounted,watch } from "vue";
const emit = defineEmits(["handlePaginate"]);
const route = useRoute();

type ItemDataType<T> = {
  data: T[];
  itemsPerPage: number;
};
const props = defineProps<ItemDataType<any>>();
const currentPage = ref<number>(1);

const totalPages = computed(() =>
  Math.ceil(props.data.length / props.itemsPerPage)
);
const startIndex = computed(() => (currentPage.value - 1) * props.itemsPerPage);
const endIndex = computed(() => startIndex.value + props.itemsPerPage);

const setPage = (idx: number) => {
  if (idx <= 0 || idx > totalPages.value) {
    return;
  }
  window.scrollTo(0, 0);
  currentPage.value = idx;
  emit("handlePaginate", props.data, startIndex.value, endIndex.value);
};

onMounted(() => {
  emit("handlePaginate", props.data, startIndex.value, endIndex.value);
});
watch(() => route.query || route.params, (newStatus) => {
  currentPage.value = 1;
});
</script>
