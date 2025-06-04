<template>
  <div>
    <header-one :style_2="true" :headerShadow="true"></header-one>
    <main>
      <slot />
    </main>
    <footer-one></footer-one>
    <back-to-top></back-to-top>
  </div>
</template>