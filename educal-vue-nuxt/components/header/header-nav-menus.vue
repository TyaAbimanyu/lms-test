<template>
  <ul>
    <li
      v-for="(menu, index) in menuData"
      :key="index"
      :class="{ 'has-dropdown': menu.submenu }"
    >
      <nuxt-link :to="menu.link">{{ menu.title }}</nuxt-link>
      <ul v-if="menu.submenu" class="submenu">
        <li v-for="(sub_menu, i) in menu.submenu" :key="i">
          <nuxt-link :to="sub_menu.link">{{ sub_menu.title }}</nuxt-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import menuData from "@/data/menu-data";
</script>
