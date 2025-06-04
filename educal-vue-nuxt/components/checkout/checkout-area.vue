<template>
 <section class="checkout-area pb-70">
    <div class="container">
      <div v-if="cartStore.cart_products.length === 0" class="text-center pt-50">
        <h3 class="py-2">No items found in cart to checkout</h3>
        <nuxt-link href="/courses" class="e-btn e-btn-7">
          Return to shop
        </nuxt-link>
      </div> 
      <form v-else @submit="onSubmit">
          <div class="row">
                <div class="col-lg-6">
                  <div class="checkbox-form">
                      <h3>Billing Details</h3>
                      <div class="row">
                            <div class="col-md-12">
                              <div class="country-select">
                                  <label>Country <span class="required">*</span></label>
                                  <Field name="country" as="select">
                                        <option value="volvo">bangladesh</option>
                                        <option value="saab">Algeria</option>
                                        <option value="mercedes">Afghanistan</option>
                                        <option value="audi">Ghana</option>
                                        <option value="audi2">Albania</option>
                                        <option value="audi3">Bahrain</option>
                                        <option value="audi4">Colombia</option>
                                        <option value="audi5">Dominican Republic</option>
                                  </Field>
                                  <err-message :msg="errors.country" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="checkout-form-list">
                                <label>First Name <span class="required">*</span></label>
                                 <Field name="firstName" v-slot="{ field }">
                                   <input v-bind="field" id="firstName" type="text" placeholder="First Name" />
                                 </Field>
                                 <err-message :msg="errors.firstName" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="checkout-form-list">
                                <label>Last Name <span class="required">*</span></label>
                                <Field name="lastName" v-slot="{ field }">
                                  <input v-bind="field" id="lastName" type="text" placeholder="Last Name" />
                                </Field>
                                <err-message :msg="errors.lastName" />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="checkout-form-list">
                                  <label>Company Name</label>
                                  <Field name="company" v-slot="{ field }">
                                    <input v-bind="field" id="company" type="text" placeholder="Company Name" />
                                  </Field>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="checkout-form-list">
                                  <label>Address <span class="required">*</span></label>
                                  <Field name="address" v-slot="{ field }">
                                    <input v-bind="field" id="address" type="text" placeholder="Street address" />
                                  </Field>
                                  <err-message :msg="errors.address" />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="checkout-form-list">
                                  <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="checkout-form-list">
                                  <label>Town / City <span class="required">*</span></label>
                                  <Field name="city" v-slot="{ field }">
                                    <input v-bind="field" id="city" type="text" placeholder="Town / City" />
                                  </Field>
                                  <err-message :msg="errors.city" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="checkout-form-list">
                                  <label>State / County <span class="required">*</span></label>
                                  <Field name="state" v-slot="{ field }">
                                    <input v-bind="field" id="state" type="text" placeholder="State / County" />
                                  </Field>
                                  <err-message :msg="errors.state" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="checkout-form-list">
                                  <label>Postcode / Zip <span class="required">*</span></label>
                                  <Field name="zipCode" v-slot="{ field }">
                                    <input v-bind="field" id="zipCode" type="text" placeholder="Postcode / Zip" />
                                  </Field>
                                  <err-message :msg="errors.zipCode" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="checkout-form-list">
                                  <label>Email Address <span class="required">*</span></label>
                                  <Field name="email" v-slot="{ field }">
                                    <input v-bind="field" id="email" type="email" placeholder="Email Address" />
                                  </Field>
                                  <err-message :msg="errors.email" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="checkout-form-list">
                                  <label>Phone <span class="required">*</span></label>
                                  <Field name="phone" v-slot="{ field }">
                                    <input v-bind="field" id="phone" type="text" placeholder="Phone" />
                                  </Field>
                                  <err-message :msg="errors.phone" />
                              </div>
                            </div>
                      </div>
                      <div class="different-address">
                            <div class="order-notes">
                              <div class="checkout-form-list">
                                  <label>Order Notes</label>
                                  <Field name="orderNote" v-slot="{ field }">
                                    <textarea v-bind="field" id="orderNote" :cols="30" :rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                  </Field>
                              </div>
                            </div>
                      </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="your-order mb-30 ">
                      <h3>Your order</h3>
                      <div class="your-order-table table-responsive">
                            <table>
                              <thead>
                                  <tr>
                                        <th class="product-name">Product</th>
                                        <th class="product-total">Total</th>
                                  </tr>
                              </thead>
                              <tbody>

                                  <tr v-for="item in cartStore.cart_products" :key="item.id" class="cart_item">
                                        <td class="product-name">
                                          {{item.title}} <strong class="product-quantity"> × {{item.orderQuantity}}</strong>
                                        </td>
                                        <td class="product-total">
                                          <span class="amount" v-if="item.price === 'free'">{{ 0.00 }}</span>
                                          <span class="amount" v-if="item.price !== 'free' && typeof item.price === 'number'">
                                            ${{ item.price.toFixed(2) }}
                                          </span>
                                        </td>
                                  </tr>

                              </tbody>
                              <tfoot>
                                  <tr class="cart-subtotal">
                                        <th>Cart Subtotal</th>
                                        <td><span class="amount">${{ cartStore.totalPriceQuantity.total.toFixed(2)}}</span></td>
                                  </tr>
                                  <tr class="shipping">
                                        <th>Shipping</th>
                                        <td>
                                          <ul>
                                              <li>
                                                    <input type="radio" name="shipping" id="flatRate" />
                                                    <label @click="handleShippingCost(7)" for="flatRate">
                                                      Flat Rate: <span class="amount">$7.00</span>
                                                    </label>
                                              </li>
                                              <li>
                                                    <input type="radio" name="shipping" id="freeShipping" />
                                                    <label @click="handleShippingCost('free')" for="freeShipping">Free Shipping:</label>
                                              </li>
                                          </ul>
                                        </td>
                                  </tr>
                                  <tr class="order-total">
                                        <th>Order Total</th>
                                        <td><strong><span class="amount">
                                          ${{(cartStore.totalPriceQuantity.total + shipCost).toFixed(2)}}
                                        </span></strong>
                                      </td>
                                  </tr>
                              </tfoot>
                            </table>
                      </div>

                      <div class="payment-method">
                        <div class="accordion" id="checkoutAccordion">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="checkoutOne">
                                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
                                  Direct Bank Transfer
                                  </button>
                              </h2>
                              <div id="bankOne" class="accordion-collapse collapse show" aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
                                  <div class="accordion-body">
                                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                  </div>
                              </div>
                            </div>
                            </div>
                            <div class="order-button-payment mt-20">
                              <button type="submit" class="e-btn e-btn-border">Place order</button>
                            </div>
                      </div>
                  </div>
                </div>
          </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useForm,Field } from 'vee-validate';
import * as yup from 'yup';
import {useCartStore} from '@/pinia/useCartStore';
const cartStore = useCartStore();
let shipCost = ref<number>(0);

interface IFormValues {
  firstName?: string | null;
  lastName?: string | null;
  company?: string | null;
  country?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  phone?: string | null;
  orderNote?: string | null;
  email?: string | null;
}
const { errors, handleSubmit,resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  company: yup.string().label("Company"),
  country: yup.string().required().label("Country"),
  address: yup.string().required().label("Address"),
  city: yup.string().required().label("City"),
  state: yup.string().required().label("State"),
  zipCode: yup.string().required().label("zipCode"),
  phone: yup.string().required().label("Phone"),
  orderNote: yup.string().label("Order Note"),
  email: yup.string().required().email().label("Email"),
})
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
  resetForm()
});

// handle shipping cost 
const handleShippingCost = (value:number | string) => {
    if(value === 'free'){
      shipCost.value = 0;
    }
    else {
      shipCost.value = value as number;
    }
}
</script>
