<template>
  <section class="price__area pt-60 pb-130">
    <div class="container">
      <div class="row">
        <div class="col-xxl-4 offset-xxl-4">
          <div class="section__title-wrapper mb-60 text-center">
            <h2 class="section__title">Simple <br /> All Inclusive  <span class="yellow-bg yellow-bg-big">Pricing<img src="/images/shape/yellow-bg.png" alt="g" /></span>
            </h2>
            <p>No contracts. No surprise fees.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="price__tab-btn text-center mb-50">
            <nav>
              <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-tab-1" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">monthly plan</button>
                <button class="nav-link" id="nav-tab-1" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">Annual Plan</button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
          <div class="price__tab-content">
            <div class="tab-content" id="nav-tabContent">
                <div v-for="(item, i) in pricing_data" :key="i" 
                 :class="`tab-pane fade ${i === 0 ? 'show active' : ''}`"
                  :id="`nav-${item.id}`" role="tabpanel" :aria-labelledby="`nav-tab-${item.id}`">
                  <div class="row">
                      <div v-for="(price, index) in item.pricing_plan" :key="index" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div class="price__item grey-bg mb-30 p-relative">
                          <div v-if="price.tag" class="price__offer">
                            <span>Best Value</span>
                          </div>
                          <div class="price__head">
                            <h3>{{price.price_title}}</h3>
                            <p>{{price.price_subtitle}}</p>
                          </div>
                          <div class="price__tag mb-25">
                            <h4>${{price.price}}<span>.99 / annually</span></h4>
                          </div>
                          <div class="price__features mb-40">
                            <ul>
                              <li v-for="(feature, index) in price.price_features" :key="index">
                                <i class="far fa-check"></i>{{feature}}
                              </li>
                            </ul>
                          </div>
                          <nuxt-link to="/contact" :class="`e-btn ${i === 0 ? 'e-btn-4' : 'e-btn-border'}`">
                            Get Started
                          </nuxt-link>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const pricing_data = [
  {
    id: 1,
    pricing_plan: [
      {
        price_title: 'Gold',
        price_subtitle: 'Perfect for small marketing teams',
        price: '59',
        price_features: ['Course Discussions', 'Content Library', '1-hour Mentorship']
      },
      {
        tag: true,
        price_title: 'Diamond',
        price_subtitle: 'Perfect for small marketing teams',
        price: '99',
        price_features: ['Course Discussions', 'Content Library', '1-hour Mentorship', 'Online Course']
      },
    ],
  },
  {
    id: 2,
    pricing_plan: [
      {
        price_title: 'Gold',
        price_subtitle: 'Perfect for small marketing teams',
        price: '79',
        price_features: ['Course Discussions', 'Content Library', '1-hour Mentorship']
      },
      {
        tag: true,
        price_title: 'Diamond',
        price_subtitle: 'Perfect for small marketing teams',
        price: '120',
        price_features: ['Course Discussions', 'Content Library', '1-hour Mentorship', 'Online Course']
      },
    ],
  },
]
</script>
