<template>
 <header>
    <div id="header-sticky" :class="`header__area ${headerShadow?'header__shadow':'header__transparent'} ${style_2?'header__padding-2':'header__padding'} ${isSticky ? 'sticky' : ''}`">
      <div :class="`${style_2?'container':'container-fluid'}`">
          <div class="row align-items-center">
            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div class="header__left d-flex">
                  <div class="logo">
                      <nuxt-link href="/">
                        <img src="/images/logo/logo.png" alt="logo">
                      </nuxt-link>
                  </div>
                  <div class="header__category d-none d-lg-block">
                      <nav>
                        <ul>
                            <li>
                              <nuxt-link href="/courses" class="cat-menu d-flex align-items-center">
                                  <div class="cat-dot-icon d-inline-block">
                                    <svg-category-dot/>
                                  </div>
                                  <span>Category</span>
                              </nuxt-link>
                              <ul class="cat-submenu">
                                  <li v-for="(c, index) in category_data" :key="index">
                                    <nuxt-link :href="`/search?category=${formatUrl(c.title)}`">
                                      {{c.title}}
                                    </nuxt-link>
                                  </li>
                              </ul>
                            </li>
                        </ul>
                      </nav>
                  </div>
                </div>
            </div>
            <div class="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                <div class="header__right d-flex justify-content-end align-items-center">
                  <div :class="`main-menu d-none d-xl-block ${style_2?'main-menu-2':''}`">
                      <nav id="mobile-menu">
                        <!-- nav menus start -->
                        <header-nav-menus></header-nav-menus>
                        <!-- nav menus end -->
                      </nav>
                  </div>
                  <div v-if="!style_2" class="header__search p-relative ml-50 d-none d-md-block">
                      <form @submit.prevent="handleSearch">
                        <input type="text" placeholder="Search..." v-model="searchValue">
                        <button type="submit"><i class="fad fa-search"></i></button>
                      </form>
                      <div class="header__cart">
                        <a @click.prevent="isCartMiniOpen = !isCartMiniOpen" href="#" class="cart-toggle-btn">
                            <div class="header__cart-icon">
                              <svg-cart/>
                            </div>
                            <span class="cart-item">{{cartStore.totalPriceQuantity.quantity}}</span>
                        </a>
                      </div>
                  </div>
                  <div v-if="!style_2" class="header__btn ml-20 d-none d-sm-block">
                      <nuxt-link href="/contact" class="e-btn">Try for free</nuxt-link>
                  </div>
                  <div v-if="style_2" class="header__btn header__btn-2 ml-50 d-none d-sm-block">
                      <nuxt-link href="/sign-up" class="e-btn">Sign up</nuxt-link>
                  </div>
                  <div class="sidebar__menu d-xl-none">
                      <div @click="isSidebarOpen = !isSidebarOpen" class="sidebar-toggle-btn ml-30" id="sidebar-toggle">
                          <span class="line"></span>
                          <span class="line"></span>
                          <span class="line"></span>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
 </header>

 <!-- cart mini sidebar start -->
 <cart-mini-sidebar :isCartMiniOpen="isCartMiniOpen" @closeMiniCart="closeMiniCart"></cart-mini-sidebar>
 <!-- cart mini sidebar end -->

 <!-- sidebar start -->
 <mobile-offcanvas :isOffcanvasOpen="isSidebarOpen" @closeOffcanvas="closeOffcanvas"></mobile-offcanvas>
 <!-- sidebar end -->
</template>

<script setup lang="ts">
import { useCartStore } from "@/pinia/useCartStore";
import category_data from "@/data/category-data";
import {formatUrl} from '../../utils/utils';
const {isSticky} = useSticky();
withDefaults(defineProps<{style_2?: boolean;headerShadow?: boolean}>(),{
  style_2: false,
})
const router = useRouter();
let searchValue = ref<string>('');
let isCartMiniOpen = ref<boolean>(false);
let isSidebarOpen = ref<boolean>(false);
const cartStore = useCartStore();

function handleSearch() {
  if(searchValue.value) {
    router.push(`/search?searchText=${searchValue.value}`);
  }
}

function closeMiniCart() {
  isCartMiniOpen.value = false;
}

function closeOffcanvas () {
  isSidebarOpen.value = false;
}
</script>
