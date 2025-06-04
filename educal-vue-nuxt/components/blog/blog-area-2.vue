<template>
 <section class="blog__area pt-120 pb-120">
    <div class="container">
        <div class="row">
          <div class="col-xxl-8 col-xl-8 col-lg-8">
              <div class="row">
                <div v-for="(blog, i) in blog_items.slice(startIndex, endIndex)" :key="i" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="blog__wrapper">
                      <blog-single :blog="blog"></blog-single>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-12">
                    <div class="basic-pagination wow fadeInUp mt-30" data-wow-delay=".2s">
                      <pagination
                        :items-per-page="4"
                        :data="blog_items"
                        @handle-paginate="handlePagination"
                      />
                    </div>
                </div>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-4">
              <!-- blog sidebar area start -->
              <blog-sidebar />
              <!-- blog sidebar area end -->
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import blogData from "@/data/blog-data";
import { type IBlogData } from "@/types/blog-d-t";

// blog items
const blog_items = [...blogData]
let filteredProductsItems = ref<IBlogData[]>(blog_items);
let startIndex = ref<number>(0);
let endIndex = ref<number>(blog_items.length);

const handlePagination = (data: IBlogData[], start: number, end: number) => {
  filteredProductsItems.value = data;
  startIndex.value = start;
  endIndex.value = end;
};
</script>
