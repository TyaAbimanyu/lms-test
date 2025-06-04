import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import course_data from "@/data/course-data";
import {formatUrl} from '../utils/utils';

export const useCourseFilterStore = defineStore("course_filter", () => {
  const route = useRoute();
  const router = useRouter();
  let selectVal = ref<string>("");
  let searchTextValue = ref<string>("");

  function handleSelectFilter(e: Event) {
    const target = e.target as HTMLSelectElement;
    selectVal.value = target.value;
  }

  function handleSearchText(e: Event) {}

  // filtered Products
  const filteredProducts = computed(() => {
    if (route.query.category) {
      return [...course_data].filter(
        (c) => formatUrl(c.category) === route.query.category
      );
    } else if (route.query.label) {
      const label = route.query.label;
      if (label === "all-levels") {
        return [...course_data];
      } else {
        return [...course_data].filter( (c) => formatUrl(c.skill_label) === route.query.label);
      }
    } else if (route.query.language) {
      return [...course_data].filter(
        (c) => c.language.toLowerCase() === route.query.language
      );
    } else if (route.query.price) {
      const price = route.query.price;
      if (price === "all") {
        return [...course_data];
      } else if (price === "free-courses") {
        return [...course_data].filter((c) => c.price === "free");
      } else if (price !== "free-courses") {
        return [...course_data].filter((c) => c.price !== "free");
      } else {
        return [...course_data];
      }
    } else if (searchTextValue.value) {
      return [...course_data].filter((c) =>
        c.title.toLowerCase().includes(searchTextValue.value.toLowerCase())
      );
    } else if (selectVal.value) {
      if (selectVal.value === "low") {
        return [...course_data]
          .slice()
          .sort((a, b) => Number(a.price) - Number(b.price));
      } else if (selectVal.value === "high") {
        return [...course_data]
          .slice()
          .sort((a, b) => Number(b.price) - Number(a.price));
      } else if (selectVal.value === "new") {
        return [...course_data].slice(-8);
      } else {
        return [...course_data];
      }
    } else {
      return [...course_data];
    }
  });

  watch(
    () => route.query || route.path,
    () => {}
  );
  return {
    handleSelectFilter,
    filteredProducts,
    selectVal,
    handleSearchText,
    searchTextValue,
  };
});
