<template>
 <section class="events__area pt-115 pb-120 p-relative">
    <div class="events__shape">
        <img class="events-1-shape" src="/images/events/events-shape.png" alt="shape">
    </div>
    <div class="container">
        <div class="row">
          <div class="col-xxl-4 offset-xxl-4">
              <div class="section__title-wrapper mb-60 text-center">
                <h2 class="section__title">Current <span class="yellow-bg yellow-bg-big">
                  Events <img src="/images/shape/yellow-bg.png" alt="bg"></span>
                </h2>
                <p>We found 13 events available for you.</p>
              </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(event, index) in [...event_data]" :key="index" class="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
              <div class="events__item mb-10 hover__active">
                <div class="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                    <div class="events__content">
                      <div class="events__meta">
                          <span>{{event.date}}</span>
                          <span>{{event.time}}</span>
                          <span>{{event.city}}</span>
                      </div>
                      <h3 class="events__title">
                        <nuxt-link href="/event-details">{{event.title}}</nuxt-link>
                      </h3>
                    </div>
                    <div class="events__more">
                      <nuxt-link href="/event-details" class="link-btn">
                          View More
                          <i class="far fa-arrow-right"></i>
                          <i class="far fa-arrow-right"></i>
                      </nuxt-link>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import event_data from '@/data/event-data';
</script>
