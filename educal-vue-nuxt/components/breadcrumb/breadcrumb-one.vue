<template>
<section class="page__title-area page__title-height page__title-overlay d-flex align-items-center" :style="`background-image: url(/images/page-title/${bgImg})`">
    <div class="container">
        <div class="row">
          <div class="col-xxl-12">
              <div class="page__title-wrapper mt-110">
                <h3 class="page__title">{{title}}</h3>                         
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><nuxt-link href="/">Home</nuxt-link></li>
                      <li class="breadcrumb-item active" aria-current="page">{{subtitle}}</li>
                    </ol>
                </nav>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{title: string;subtitle: string;bgImg?: string}>(),{
  bgImg: 'page-title.jpg'
})
</script>
