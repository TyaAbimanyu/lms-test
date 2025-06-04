<template>
  <div :class="`header__search-3 white-bg transition-3 ${isSearchActive ? 'search-opened' : ''}`">
    <div class="container">
          <div class="row">
            <div class="col-xl-12">
                <div class="header__search-3-inner text-center">
                      <form @submit.prevent="handleSubmit">
                        <div class="header__search-3-btn">
                            <a @click.prevent="closeSearch" href="#" class="header__search-3-btn-close">
                              <i class="fal fa-times"></i>
                            </a>
                        </div>
                        <div class="header__search-3-header">
                            <h3>Search</h3>
                        </div>
                        <div class="header__search-3-categories">
                            <ul class="search-category">
                                <li v-for="(c, i) in categories" :key="i">
                                  <a href="#" :class="`${category === c ? 'active' : ''}`" @click.prevent="handleCategory(c)">
                                    {{c}}
                                   </a>
                                </li>
                            </ul>
                        </div>
                        <div class="header__search-3-input p-relative">
                            <input type="text" placeholder="Search for products... " v-model="searchText">
                            <button type="submit"><i class="far fa-search"></i></button>
                        </div>
                      </form>
                </div>
            </div>
          </div>
    </div>
  </div>

  <div @click="closeSearch" :class="`body-overlay ${isSearchActive ? 'opened' : ''}`"></div>
</template>

<script setup lang="ts">
import category_data from '@/data/category-data';
import {formatUrl} from '../../utils/utils';
defineProps<{isSearchActive:boolean}>();
const emit = defineEmits(['closeSearch']);
const allCategories = [...category_data].map((c) => c.title);
const uniqueCategories = new Set(allCategories);
const categories = [...uniqueCategories].slice(0,6);

const closeSearch = () => {
  emit('closeSearch');
};

const router = useRouter();
let searchText = ref<string>('');
let category = ref<string>('');

const handleCategory = (value:string) => {
  category.value = formatUrl(value);
};

// handleSubmit
const handleSubmit = () => {
  if(!searchText.value && !category.value){
    return
  }
  else if(searchText.value && category.value){
    router.push(`/search?searchText=${searchText.value}&category=${category.value}`)
  }
  else if(searchText.value && !category.value){
    router.push(`/search?searchText=${searchText.value}`)
  }
  else if(!searchText.value && category.value){
    router.push(`/search?category=${category.value}`)
  }
  else{
    router.push(`/search`)
  }
}
</script>
