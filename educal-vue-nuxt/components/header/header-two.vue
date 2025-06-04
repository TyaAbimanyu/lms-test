<template>
  <header>
    <div id="header-sticky" :class="`header__area header__transparent header__padding-2 ${isSticky ? 'sticky' : ''}`">
      <div class="container">
          <div class="row align-items-center">
            <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                <div class="header__left d-flex">
                  <div class="logo">
                      <nuxt-link href="/">
                        <img class="logo-white" src="/images/logo/logo-2.png" alt="logo">
                        <img class="logo-black" src="/images/logo/logo.png" alt="logo">
                      </nuxt-link>
                  </div>
                </div>
            </div>
            <div class="col-xxl-5 col-xl-5 d-none d-xl-block">
                <div class="main-menu d-none d-xl-block main-menu-3">
                  <nav id="mobile-menu">
                      <!-- nav menus start -->
                      <header-nav-menus></header-nav-menus>
                      <!-- nav menus end -->
                  </nav>
                </div>
            </div>
            <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                <div class="header__right d-flex justify-content-end align-items-center">
                  <div class="header__search-2" @click="handleOpenSearch">
                      <svg-search></svg-search>
                  </div>
                  <div class="header__btn header__btn-2 ml-30 d-none d-sm-block">
                      <nuxt-link href="/sign-up" class="e-btn">Sign up</nuxt-link>
                  </div>
                  <div class="sidebar__menu d-xl-none">
                      <div @click="isSidebarOpen = !isSidebarOpen" class="sidebar-toggle-btn sidebar-toggle-btn-white ml-30" id="sidebar-toggle">
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

  <!-- search popup start -->
  <popup-search :isSearchActive="isSearchActive" @closeSearch="handleCloseSearch"></popup-search>
  <!-- search popup end -->

 <!-- sidebar start -->
 <mobile-offcanvas :isOffcanvasOpen="isSidebarOpen" @closeOffcanvas="closeOffcanvas"></mobile-offcanvas>
 <!-- sidebar end -->
</template>

<script setup lang="ts">
const {isSticky} = useSticky();

let isSearchActive = ref(false);
let isSidebarOpen = ref<boolean>(false);
const handleOpenSearch = () => {
  isSearchActive.value = !isSearchActive.value;
};

const handleCloseSearch = () => {
  isSearchActive.value = !isSearchActive.value;
};
function closeOffcanvas () {
  isSidebarOpen.value = false;
}
</script>
