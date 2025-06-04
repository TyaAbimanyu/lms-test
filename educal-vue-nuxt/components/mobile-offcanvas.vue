<template>
  <div :class="`sidebar__area ${isOffcanvasOpen?'sidebar-opened':''}`">
      <div class="sidebar__wrapper">
        <div class="sidebar__close">
            <button @click="closeSidebar" class="sidebar__close-btn" id="sidebar__close-btn">
            <span><i class="fal fa-times"></i></span>
            <span>close</span>
            </button>
        </div>
        <div class="sidebar__content">
            <div class="logo mb-40">
              <nuxt-link href="/">
                <img src="/images/logo/logo.png" alt="logo">
              </nuxt-link>
            </div>

            <div class="mobile-menu fix mean-container">
              <div class="mean-bar">
                <nav class="mean-nav">
                  <ul>
                    <template v-for="(menu, i) in menu_data" :key="i">
                      <li v-if="menu.submenu" class="has-dropdown">
                        <nuxt-link :href="menu.link">{{ menu.title }}</nuxt-link>
                        <ul class="submenu" :style="{ display: navTitle === menu.title ? 'block' : 'none' }">
                          <li v-for="(sub, i) in menu.submenu" :key="i">
                            <nuxt-link :href="sub.link">{{ sub.title }}</nuxt-link>
                          </li>
                        </ul>
                        <a :class="`mean-expand ${navTitle === menu.title ? 'mean-clicked' : ''}`"
                          @click.prevent="openMobileMenu(menu.title)"
                          style="font-size: 18px; cursor: pointer"
                        >
                          <i class="fal fa-plus"></i>
                        </a>
                      </li>
                      <li v-if="!menu.submenu">
                        <nuxt-link :href="menu.link">{{ menu.title }}</nuxt-link>
                      </li>
                    </template>
                  </ul>
                </nav>
              </div>
            </div>

            <div class="sidebar__search p-relative mt-40 ">
              <form @submit.prevent="handleSearch">
                  <input type="text" placeholder="Search..." v-model="searchValue">
                  <button type="submit"><i class="fad fa-search"></i></button>
              </form>
            </div>
            <div class="sidebar__cart mt-30">
              <a href="#">
                  <div class="header__cart-icon">
                    <svg-cart/>
                  </div>
                  <span class="cart-item">{{cartStore.totalPriceQuantity.quantity}}</span>
              </a>
            </div>
        </div>
      </div>
  </div>
  <!-- sidebar area end -->      
  <div @click="closeSidebar" :class="`body-overlay ${isOffcanvasOpen?'opened':''}`"></div>
  <!-- sidebar area end -->
</template>

<script setup lang="ts">
import menu_data from '@/data/menu-data';
import { useCartStore } from "@/pinia/useCartStore";
defineProps<{isOffcanvasOpen:boolean}>();
const emit = defineEmits(['closeOffcanvas']);
const router = useRouter();
let searchValue = ref<string>('');
const cartStore = useCartStore();

const closeSidebar = () => {
  emit('closeOffcanvas');
}

const navTitle = ref<string>("");

const openMobileMenu = (menu:string) => {
  navTitle.value = navTitle.value === menu ? "" : menu;
};

function handleSearch() {
  if(searchValue.value) {
    router.push(`/search?searchText=${searchValue.value}`);
  }
}
</script>
