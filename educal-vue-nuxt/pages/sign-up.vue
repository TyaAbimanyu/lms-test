<template>
  <nuxt-layout name="layout-three">

    <!-- sign up area start -->
    <section class="signup__area po-rel-z1 pt-100 pb-145">
      <div class="sign__shape">
          <img class="man-1" src="/images/icon/sign/man-3.png" alt="">
          <img class="man-2 man-22" src="/images/icon/sign/man-2.png" alt="">
          <img class="circle" src="/images/icon/sign/circle.png" alt="">
          <img class="zigzag" src="/images/icon/sign/zigzag.png" alt="">
          <img class="dot" src="/images/icon/sign/dot.png" alt="">
          <img class="bg" src="/images/icon/sign/sign-up.png" alt="">
          <img class="flower" src="/images/icon/sign/flower.png" alt="">
      </div>
      <div class="container">
          <div class="row">
            <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                <div class="section__title-wrapper text-center mb-55">
                  <h2 class="section__title">Create a free <br>  Account</h2>
                  <p>I'm a subhead that goes with a story.</p>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                <div class="sign__wrapper white-bg">
                  <div class="sign__header mb-35">
                      <div class="sign__in text-center">
                        <a href="#" class="sign__social g-plus text-start mb-15"><i class="fab fa-google-plus-g"></i>Sign Up with Google</a>
                        <p> <span>........</span> Or, <nuxt-link href="/sign-up">sign up</nuxt-link> with your email<span> ........</span> </p>
                      </div>
                  </div>
                  <div class="sign__form">
                    <!-- form sign up start -->
                     <form-sign-up></form-sign-up>
                    <!-- form sign up end -->
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
    <!-- sign up area end -->

    <!-- cta area start -->
    <cta-area></cta-area>
    <!-- cta area end -->
  </nuxt-layout>
</template>

<script setup lang="ts">


definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Sign Up - Educal",
});
</script>
