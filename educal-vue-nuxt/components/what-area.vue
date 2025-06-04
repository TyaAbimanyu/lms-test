<template>
  <section class="what__area pt-115">
    <div class="container">
        <div class="row">
          <div class="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div class="section__title-wrapper mb-60 text-center">
                <h2 class="section__title">What is <span class="yellow-bg-big">Skilline? 
                  <img src="/images/shape/yellow-bg-2.png" alt="">
                 </span>
                </h2>
                <p>Sloshed faff about me old mucker blatant bubble and squeak hanky panky some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered smashing blow off I'm telling up the kyver he legged it bleeder jolly good, </p>
              </div>
          </div>
        </div>
        <div class="row">
  
          <div v-for="(item, index) in what_area_data" :key="index" :class="`col-xxl-5 col-xl-5 col-lg-6 ${item.col ? item.col : ''}`">
            <div class="what__item transition-3 mb-30 p-relative fix">
              <div class="what__thumb w-img">
                <img :src="item.thumb" alt="thumb" />
              </div>
              <div class="what__content p-absolute text-center">
                <h3 class="what__title white-color" v-html="item.title"></h3>
                <nuxt-link to="/contact" class="e-btn e-btn-border-2">Start a class today</nuxt-link>
              </div>
            </div>
          </div>

        </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const what_area_data = [
  {
    col: 'offset-xl-1 offset-xl-1',
    thumb: '/images/what/what-1.jpg',
    title: 'Mostly <br /> Online Learning',
  },
  {
    thumb: '/images/what/what-2.jpg',
    title: 'Become <br /> an Instructor',
  },
]

</script>
