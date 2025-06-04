<template>
  <nuxt-layout name="layout-three">

    <!-- sign in area start -->
    <section class="signup__area po-rel-z1 pt-100 pb-145">
      <div class="sign__shape">
          <img class="man-1" src="/images/icon/sign/man-1.png" alt="">
          <img class="man-2" src="/images/icon/sign/man-2.png" alt="">
          <img class="circle" src="/images/icon/sign/circle.png" alt="">
          <img class="zigzag" src="/images/icon/sign/zigzag.png" alt="">
          <img class="dot" src="/images/icon/sign/dot.png" alt="">
          <img class="bg" src="/images/icon/sign/sign-up.png" alt="">
      </div>
      <div class="container">
          <div class="row">
            <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                <div class="section__title-wrapper text-center mb-55">
                  <h2 class="section__title">Sign in to <br>  recharge direct.</h2>
                  <p>it you don't have an account you can <a href="#">Register here!</a></p>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                <div class="sign__wrapper white-bg">
                  <div class="sign__header mb-35">
                      <div class="sign__in text-center">
                        <a href="#" class="sign__social text-start mb-15"><i class="fab fa-facebook-f"></i>Sign in with Facebook</a>
                        <p> <span>........</span> Or, <nuxt-link href="/sign-in">sign in</nuxt-link> with your email<span> ........</span> </p>
                      </div>
                  </div>
                  <div class="sign__form">
                     <!-- form sign in start -->
                     <form-sign-in></form-sign-in>
                     <!-- form sign in end -->
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
    <!-- sign in area end -->

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
  title: "Sign In - Educal",
});
</script>
