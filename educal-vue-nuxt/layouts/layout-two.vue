<template>
  <div>
    <header-one :style_2="true"></header-one>
    <main>
      <slot />
    </main>
    <footer-one :style_2="true"></footer-one>
    <back-to-top></back-to-top>
  </div>
</template>