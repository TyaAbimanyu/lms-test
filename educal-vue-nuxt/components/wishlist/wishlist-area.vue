<template>
 <section class="cart-area pt-100 pb-100">
    <div class="container">
      <div v-if="wishlistStore.wishlists.length === 0" class='text-center pt-50'>
        <h3>No Wishlist Items Found</h3>
        <nuxt-link href="/courses" class="e-btn e-btn-7">Continue Shipping</nuxt-link>
      </div>
        <div v-else class="row">
          <div class="col-12">
                <form action="#">
                    <div class="table-content table-responsive">
                      <table class="table">
                            <thead>
                                <tr>
                                  <th class="product-thumbnail">Images</th>
                                  <th class="cart-product-name">Product</th>
                                  <th class="product-quantity">Quantity</th>
                                  <th class="product-subtotal">Price</th>
                                  <th class="product-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in wishlistStore.wishlists" :key="item.id">
                                  <td class="product-thumbnail">
                                    <nuxt-link :href="`/course-details/${item.id}`">
                                      <img :src="item.img" alt="">
                                    </nuxt-link>
                                  </td>
                                  <td class="product-name">
                                    <nuxt-link :href="`/course-details/${item.id}`">{{item.title}}</nuxt-link>
                                  </td>
                                  <td class="product-quantity"> 
                                    <button class="e-btn e-btn-border" v-if="!isItemInCart(item)" @click="cartStore.addCartProduct(item)">Add TO Cart</button>
                                    <nuxt-link to="/cart" class="e-btn e-btn-border" v-if="isItemInCart(item)">View Cart</nuxt-link>
                                  </td>

                                  <td class="product-subtotal">
                                    <span class="amount" v-if="item.price === 'free'">{{ item.price }}</span>
                                    <span v-if="item.price !== 'free' && typeof item.price === 'number'" class="amount">
                                      ${{ item.price.toFixed(2) }}
                                    </span>
                                  </td>
                                  <td class="product-remove">
                                    <a href="#" @click.prevent="wishlistStore.removeWishlist(item)">
                                      <i class="fa fa-times"></i>
                                    </a>
                                  </td>
                                </tr>
                            </tbody>
                      </table>
                    </div>
                </form>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useWishlistStore } from "@/pinia/useWishlistStore";
import { useCartStore } from "@/pinia/useCartStore";
import type { ICourse } from "@/types/course-d-t";
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

function isItemInCart(product: ICourse) {
  return cartStore.cart_products.some((prd) => prd.id === product.id);
}
</script>
