<template>
 <section :class="`about__area ${spacing}`">
  <div class="container">
      <div class="row">
        <div class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
            <div class="about__thumb-wrapper">
              <div class="about__review">
                  <h5> <span>8,200+</span> five ster reviews</h5>
              </div>
              <div class="about__thumb ml-100">
                  <img src="/images/about/about.jpg" alt="">
              </div>
              <div class="about__banner mt--210">
                  <img src="/images/about/about-banner.jpg" alt="">
              </div>
              <div class="about__student ml-270 mt--80">
                  <a href="#">
                    <img src="/images/about/student-4.jpg" alt="">
                    <img src="/images/about/student-3.jpg" alt="">
                    <img src="/images/about/student-2.jpg" alt="">
                    <img src="/images/about/student-1.jpg" alt="">
                  </a>
                  <p>Join over <span>4,000+</span> students</p>
              </div>
            </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
            <div class="about__content pl-70 pr-60 pt-25">
              <div class="section__title-wrapper mb-25">
                  <h2 class="section__title">Achieve your <br><span class="yellow-bg-big">
                    Goals 
                    <img src="/images/shape/yellow-bg-2.png" alt="">
                  </span>  
                  with Educal 
                  </h2>
                <p>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
              </div>
              <div class="about__list mb-35">
                  <ul>
                    <li class="d-flex align-items-center"> <i class="icon_check"></i> Upskill your organization.</li>
                    <li class="d-flex align-items-center"> <i class="icon_check"></i> Access more then 100K online courses</li>
                    <li class="d-flex align-items-center"> <i class="icon_check"></i> Learn the latest skills</li>
                  </ul>
              </div>
              <nuxt-link href="/contact" class="e-btn e-btn-border">apply now</nuxt-link>
            </div>
        </div>
      </div>
  </div>
</section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{spacing?: string}>(),{
  spacing: 'pt-90 pb-150'
})
</script>
