<template>
 <section class="blog__area pt-120 pb-120">
    <div class="container">
        <div class="row">
          <div class="col-xxl-8 col-xl-8 col-lg-8">
              <div class="blog__wrapper">
                <div class="blog__text mb-40">
                    <p>Me old mucker argy-bargy  I'm telling pear shaped Jeffrey super brilliant, I excuse my French blatant gormless up the duff, cup of char up the kyver tosser cras happy days. The full monty he nicked it he legged it bum bag burke plastered arse over tit it's your round owt to do with me pardon you, on your bike mate hanky panky mush cuppa only a quid crikey Jeffrey skive off, faff about so I said what a load of rubbish blag David knees up cockup cras. Argy-bargy give us a bell wellies gosh skive off old bodge cheesed off A bit of how's your father off his nut bamboozled, bugger say I'm telling morish bleeding boot up the kyver nice one brilliant, ruddy jolly good fanny around chinwag amongst brown bread arse brolly. Horse play it's all gone to pot codswallop easy peasy mush knees up down the pub jolly good nice one tosser it's your round lurgy, I vagabond barmy off his nut only a quid so I said is gosh Charles blow off, pardon me chip shop Richard spiffing skive off bleeding get stuffed mate porkies amongst the full monty.</p>
                </div>
                <div class="blog__quote grey-bg mb-45 p-relative fix">
                    <img class="quote" src="/images/blog/quote-1.png" alt="">
                    <blockquote>
                      <p>After I started learning design with Quillow, I realized that I had Improved to very advanced levels.</p>
                      <h4>Chris Collins</h4>
                    </blockquote>
                </div>
                <div class="blog__text mb-30">
                  <p>Horse play it's all gone to pot codswallop easy peasy mush knees up down the pub jolly good nice one tosser it's your round lurgy, I vagabond barmy off his nut only a quid so I said is gosh Charles blow off, pardon me chip shop Richard spiffing skive off bleeding get stuffed mate porkies amongst the full monty. Daft burke you</p>
                </div>
                <div class="blog__link mb-35">
                    <p>The little rotter bum bag a blinding shot gosh spifing butty eatonwha load of rubbish bamboozled. <a href="#"> https://educal.com/courses</a> </p>
                </div>
                <div class="blog__img w-img mb-45" >
                    <img src="/images/blog/big/blog-big-1.jpg" alt="">
                </div>
                <div class="blog__text mb-40">
                    <h3>Build a beautiful website with Quillow</h3>
                    <p>Some dodgy chav car boot blower starkers bonnet tickety-boo no biggie cheesed off, Oxford bloke fantastic the wireless bevvy cobblers chancer give us a bell, bleeder jolly good hanky panky do one gormless matie boy. Pear shaped my good sir I cobblers at public school quaint tickety-boo crikey bits and bobs, wellies bugger all mate golly gosh brolly matie boy fanny around chimney pot cracking goal my lady, bodge so I said spiffing posh the full monty don't get shirty with me no biggie.</p>

                    <p>Brolly grub blimey victoria sponge blag nancy boy don't get shirty with me skive off bobby burke in my flat bog-standard, easy peasy golly gosh up the duff show off show off pick your nose and blow off gosh a brilliant that what a load of rubbish.</p>
                </div>
                <div class="blog__line"></div>
                <div class="blog__meta-3 d-sm-flex justify-content-between align-items-center mb-80">
                    <div class="blog__tag-2">
                      <a href="#">Art & Design</a>
                      <a href="#">Education</a>
                      <a href="#">App</a>
                    </div>
                    <div class="blog__social d-flex align-items-center">
                      <h4>Share:</h4>
                      <ul>
                          <li><a href="#" class="fb" ><i class="social_facebook"></i></a></li>
                          <li><a href="#" class="tw" ><i class="social_twitter"></i></a></li>
                          <li><a href="#" class="pin" ><i class="social_pinterest"></i></a></li>
                      </ul>
                    </div>
                </div>
                <div class="blog__author-3 d-sm-flex grey-bg mb-90">
                    <div class="blog__author-thumb-3 mr-20">
                      <img src="/images/blog/author/blog-author-1.jpg" alt="">
                    </div>
                    <div class="blog__author-content">
                      <h4>Justin Case</h4>
                      <span>Author</span>
                      <p>So I said blower wellies a blinding shot jolly good argy-bargy he nicked it, in my flat don't get shirty with me tosser.</p>
                    </div>
                </div>
                <div class="blog__recent mb-65">
                    <div class="section__title-wrapper mb-40">
                      <h2 class="section__title">Related <span class="yellow-bg-sm">Post <img src="/images/shape/yellow-bg-4.png" alt="">  </span></h2>
                      <p>You don't have to struggle alone, you've got our assistance and help.</p>
                    </div>
                    <div class="row">
                      <div v-for="item in related_blogs" :key="item.id" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                         <blog-single :blog="item"></blog-single>
                      </div>
                    </div>
                </div>
                <div class="latest-comments mb-95">
                    <h3>3 Comments</h3>
                    <ul>
                      <li>
                          <div class="comments-box grey-bg">
                            <div class="comments-info d-flex">
                                  <div class="comments-avatar mr-20">
                                        <img src="/images/blog/comments/comment-1.jpg" alt="">
                                  </div>
                                  <div class="avatar-name">
                                      <h5>Eleanor Fant</h5>
                                      <span class="post-meta"> July 14, 2022</span>
                                  </div>
                            </div>
                            <div class="comments-text ml-65">
                                <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.</p>
                                <div class="comments-replay">
                                  <a href="#">Reply</a>
                                </div>
                            </div>
                          </div>
                      </li>
                      <li class="children">
                          <div class="comments-box grey-bg">
                            <div class="comments-info d-flex">
                                  <div class="comments-avatar mr-20">
                                        <img src="/images/blog/comments/comment-1.jpg" alt="">
                                  </div>
                                  <div class="avatar-name">
                                      <h5>Dominic</h5>
                                      <span class="post-meta">April 16, 2022 </span>
                                  </div>
                            </div>
                            <div class="comments-text ml-65">
                                <p>David blatant have it, standard A bit of how's your father my lady absolutely.</p>
                                <div class="comments-replay">
                                  <a href="#">Reply</a>
                                </div>
                            </div>
                          </div>
                          <ul>
                            <li class="children-2">
                                <div class="comments-box grey-bg">
                                  <div class="comments-info d-flex">
                                        <div class="comments-avatar mr-20">
                                              <img src="/images/blog/comments/comment-3.jpg" alt="">
                                        </div>
                                        <div class="avatar-name">
                                            <h5>Von Rails</h5>
                                            <span class="post-meta">April 18, 2022 </span>
                                        </div>
                                  </div>
                                  <div class="comments-text ml-65">
                                      <p>He nicked it get stuffed mate spend a penny plastered.!</p>
                                      <div class="comments-replay">
                                        <a href="#">Reply</a>
                                      </div>
                                  </div>
                                </div>
                            </li>
                          </ul>
                      </li>
                    </ul>
                </div>
                <div class="blog__comment">
                    <h3>Write a Review</h3>
                    <!-- form start -->
                    <form-blog-review></form-blog-review>
                    <!-- form end -->
                </div>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-4">
              <!-- blog sidebar area start -->
              <blog-sidebar />
             <!-- blog sidebar area end -->
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import blog_data from "@/data/blog-data";
import type { IBlogData } from '@/types/blog-d-t';

defineProps<{blog:IBlogData}>();
const related_blogs = [...blog_data].slice(0, 2);
</script>
