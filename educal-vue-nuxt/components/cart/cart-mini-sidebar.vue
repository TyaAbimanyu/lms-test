<template>
 <div class="cartmini__area">
      <div :class="`cartmini__wrapper ${isCartMiniOpen?'opened':''}`">
        <div class="cartmini__title">
            <h4>Shopping cart</h4>
        </div>
        <div class="cartmini__close" @click="closeMiniCart">
            <button type="button" class="cartmini__close-btn"><i class="fal fa-times"></i></button>
        </div>
        <div v-if="cartStore.cart_products.length === 0" class='text-center mt-50'>
              <h3>Your cart is empty</h3>
              <nuxt-link to="/course-sidebar" class="e-btn e-btn-7 mt-15">Return to shop</nuxt-link>
            </div>
        <div v-else class="cartmini__widget">
            <div class="cartmini__inner">
              <ul>
                  <li v-for="item in cartStore.cart_products" :key="item.id">
                    <div class="cartmini__thumb">
                        <a href="#">
                          <img :src="item.img" alt="cart-img">
                        </a>
                    </div>
                    <div class="cartmini__content">
                        <h5><a href="#">{{item.title}}</a></h5>
                        <div class="product-quantity mt-10 mb-10">
                          <span @click="cartStore.quantityDecrement(item)" class="cart-minus">-</span>
                          <input class="cart-input" type="text" :value="item.orderQuantity" :v-model="item.orderQuantity"/>
                          <span @click="cartStore.addCartProduct(item)" class="cart-plus">+</span>
                        </div>
                        <div class="product__sm-price-wrapper">
                          <span v-if="item.price !== 'free' && typeof item.price === 'number' && item.orderQuantity" class="product__sm-price">
                            ${{(item.price * item.orderQuantity).toFixed(2)}}
                          </span>
                        </div>
                    </div>
                    <a @click.prevent="cartStore.removeCartProduct(item)" href="#" class="cartmini__del">
                      <i class="fal fa-times"></i>
                    </a>
                  </li>
              </ul>
            </div>
            <div class="cartmini__checkout">
              <div class="cartmini__checkout-title mb-30">
                  <h4>Subtotal:</h4>
                  <span>${{cartStore.totalPriceQuantity.total.toFixed(2)}}</span>
              </div>
              <div class="cartmini__checkout-btn">
                  <nuxt-link href="/cart" class="e-btn e-btn-border mb-10 w-100"> <span></span> view cart</nuxt-link>
                  <nuxt-link href="/checkout" class="e-btn w-100"> <span></span> checkout</nuxt-link>
              </div>
            </div>
        </div>
      </div>
  </div>

  <div @click="closeMiniCart" :class="`body-overlay ${isCartMiniOpen?'opened':''}`"></div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/pinia/useCartStore";
const cartStore = useCartStore();

defineProps<{isCartMiniOpen:boolean}>();
const emit = defineEmits(['closeMiniCart']);

const closeMiniCart = () => {
  emit('closeMiniCart');
};
</script>
