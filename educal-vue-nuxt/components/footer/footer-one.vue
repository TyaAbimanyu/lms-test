<template>
 <footer>
    <div :class="`footer__area ${style_2 ? 'grey-bg-2' : 'footer-bg'}`">
        <div :class="`footer__top ${spacing?spacing:'pt-190 pb-40'}`">
          <div class="container">
              <div class="row">
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div class="footer__widget mb-50">
                      <div class="footer__widget-head mb-22">
                          <div class="footer__logo">
                            <nuxt-link href="/">
                                <img v-if="!style_2" src="/images/logo/logo-2.png" alt="logo">
                                <img v-if="style_2" src="/images/logo/logo.png" alt="logo">
                            </nuxt-link>
                          </div>
                      </div>
                      <div :class="`footer__widget-body ${style_2?'footer__widget-body-2':''}`">
                          <p>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>

                          <div class="footer__social">
                            <ul>
                                <li><a href="#"><i class="social_facebook"></i></a></li>
                                <li><a href="#" class="tw"><i class="social_twitter"></i></a></li>
                                <li><a href="#" class="pin"><i class="social_pinterest"></i></a></li>
                            </ul>
                          </div>
                      </div>
                    </div>
                </div>
                <div class="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                    <div class="footer__widget mb-50">
                      <div class="footer__widget-head mb-22">
                          <h3 :class="`footer__widget-title ${style_2?'footer__widget-title-2':''}`">Company</h3>
                      </div>
                      <div :class="`footer__widget-body ${style_2?'footer__widget-body-2':''}`">
                          <div :class="`footer__link ${style_2 ? 'footer__link-2' : ''}`">
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Courses</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Instructor</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Become a Teacher</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                          </div>
                      </div>
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                    <div class="footer__widget mb-50">
                      <div class="footer__widget-head mb-22">
                          <h3 :class="`footer__widget-title ${style_2?'footer__widget-title-2':''}`">Platform</h3>
                      </div>
                      <div :class="`footer__widget-body ${style_2?'footer__widget-body-2':''}`">
                          <div :class="`footer__link ${style_2 ? 'footer__link-2' : ''}`">
                            <ul>
                                <li><a href="#">Browse Library</a></li>
                                <li><a href="#">Library</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">News & Blogs</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Tutorials</a></li>
                            </ul>
                          </div>
                      </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                    <div class="footer__widget footer__pl-70 mb-50">
                      <div class="footer__widget-head mb-22">
                          <h3 :class="`footer__widget-title ${style_2?'footer__widget-title-2':''}`">Subscribe</h3>
                      </div>
                      <div :class="`footer__widget-body ${style_2?'footer__widget-body-2':''}`">
                          <div :class="`footer__subscribe ${style_2 ? 'footer__subscribe-2' : ''}`">
                            <form action="#">
                                <div class="footer__subscribe-input mb-15">
                                  <input type="email" placeholder="Your email address">
                                  <button type="submit">
                                      <i class="far fa-arrow-right"></i>
                                      <i class="far fa-arrow-right"></i>
                                  </button>
                                </div>
                            </form>
                            <p>Get the latest news and updates right at your inbox.</p>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div :class="`footer__bottom ${style_2 ? 'footer__bottom-2' : ''}`">
          <div class="container">
              <div class="row">
                <div class="col-xxl-12">
                    <div :class="`footer__copyright ${style_2 ? 'footer__copyright-2' : ''} text-center`">
                      <p>© {{ new Date().getFullYear() }} Educal, All Rights Reserved. Design By 
                        <nuxt-link href="/">Theme Pure</nuxt-link>
                      </p>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{style_2?: boolean;spacing?: string}>()
</script>
