import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import type { ICourse } from "@/types/course-d-t";

export const useCompareStore = defineStore("compare_product", () => {
  let compare_items = ref<ICourse[]>([]);

  // add_compare_product
  const add_compare_product = (payload: ICourse) => {
    const isAdded = compare_items.value.findIndex((p) => p.id === payload.id);
    if (isAdded !== -1) {
      compare_items.value = compare_items.value.filter(
        (p) => p.id !== payload.id
      );
      toast.error(`${payload.title} remove to compare`);
    } else {
      compare_items.value.push(payload);
      toast.success(`${payload.title} added to compare`);
    }
    localStorage.setItem(
      "compare_products",
      JSON.stringify(compare_items.value)
    );
  };
  // removeCompare
  const removeCompare = (payload: ICourse) => {
    compare_items.value = compare_items.value.filter(
      (p) => p.id !== payload.id
    );
    toast.error(`${payload.title} remove to compare`);
    localStorage.setItem(
      "compare_products",
      JSON.stringify(compare_items.value)
    );
  };

  // cart product initialize
  const initializeCompareProducts = () => {
    const compareData = localStorage.getItem("compare_products");
    if (compareData) {
      compare_items.value = JSON.parse(compareData);
    }
  };

  // mounted to update cart products
  onMounted(() => {
    initializeCompareProducts();
  });
  return {
    add_compare_product,
    removeCompare,
    compare_items,
  };
});
