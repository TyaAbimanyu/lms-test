<template>
  <section class="cart-area pt-100 pb-100">
    <div class="container">
      <div v-if="cartStore.cart_products.length === 0" class='text-center pt-50'>
        <h3>No Cart Items Found</h3>
        <nuxt-link href="/courses" class="e-btn e-btn-7">Continue Shipping</nuxt-link>
      </div>
        <div v-else class="row">
          <div class="col-12">
              <div class="table-content table-responsive">
                <table class="table">
                      <thead>
                          <tr>
                            <th class="product-thumbnail">Images</th>
                            <th class="cart-product-name">Product</th>
                            <th class="product-price">Unit Price</th>
                            <th class="product-quantity">Quantity</th>
                            <th class="product-subtotal">Total</th>
                            <th class="product-remove">Remove</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="item in cartStore.cart_products" :key="item.id">
                            <td class="product-thumbnail">
                              <nuxt-link :href="`/course-details/${item.id}`">
                               <img :src="item.img" alt="cart-img">
                              </nuxt-link>
                            </td>
                            <td class="product-name">
                              <nuxt-link :href="`/course-details/${item.id}`">{{item.title}} </nuxt-link>
                            </td>
                            <td class="product-price">
                              <span class="amount" v-if="item.price === 'free'">{{ item.price }}</span>
                              <span class="amount" v-if="item.price !== 'free' && typeof item.price === 'number'">
                                ${{ item.price.toFixed(2) }}
                              </span>
                            </td>
                            <td class="product-quantity text-center">
                                <div class="product-quantity mt-10 mb-10">
                                  <div class="product-quantity-form">
                                      <div>
                                        <button class="cart-minus" @click="cartStore.quantityDecrement(item)">
                                          <i class="far fa-minus"></i>
                                        </button>
                                        <input class="cart-input" type="text" :value="item.orderQuantity" :v-model="item.orderQuantity"/>
                                        <button class="cart-plus" @click="cartStore.addCartProduct(item)">
                                          <i class="far fa-plus"></i>
                                        </button>
                                      </div>
                                  </div>
                                </div>
                            </td>
                            <td class="product-subtotal">
                              <span v-if="item.price !== 'free' && typeof item.price === 'number' && item.orderQuantity" class="amount">
                                ${{(item.price * item.orderQuantity).toFixed(2)}}
                              </span>
                            </td>
                            <td class="product-remove">
                              <a href="#" @click.prevent="cartStore.removeCartProduct(item)">
                                <i class="fa fa-times"></i>
                              </a>
                            </td>
                          </tr>
                      </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-12">
                      <div class="coupon-all">
                          <div class="coupon d-sm-flex align-items-center">
                            <input id="coupon_code" class="input-text" name="coupon_code" value=""
                                  placeholder="Coupon code" type="text">
                            <button class="e-btn" name="apply_coupon" type="submit">
                              Apply coupon
                            </button>
                          </div>
                          <div class="coupon2">
                            <button class="e-btn" @click="cartStore.clear_cart()">Clear cart</button>
                          </div>
                      </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5 ml-auto">
                      <div class="cart-page-total">
                          <h2>Cart totals</h2>
                          <ul class="mb-20">
                            <li>Subtotal <span>${{cartStore.totalPriceQuantity.total.toFixed(2)}}</span></li>
                            <li>Total <span>${{cartStore.totalPriceQuantity.total.toFixed(2)}}</span></li>
                          </ul>
                          <nuxt-link class="e-btn e-btn-border" href="/checkout">
                            Proceed to checkout
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
import { useCartStore } from "@/pinia/useCartStore";
const cartStore = useCartStore();
</script>
