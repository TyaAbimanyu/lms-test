<template>
 <section class="coupon-area pt-100 pb-30">
    <div class="container">
      <div class="row">
          <div class="col-md-6">
            <div class="coupon-accordion">
                  <!-- ACCORDION START -->
                  <h3>Returning customer? <span id="showlogin" @click="openLogin = !openLogin">Click here to login</span></h3>
                  <div id="checkout-login" class="coupon-content" v-if="openLogin">
                      <div class="coupon-info">
                        <p class="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
                        <form @submit="onSubmit">
                              <p class="form-row-first">
                                  <label>Username or email <span class="required">*</span></label>
                                  <Field name="email" v-slot="{ field }"> 
                                   <input type="text" v-bind="field" id="email" />
                                  </Field>
                                  <err-message :msg="errors.email" />
                              </p>
                              <p class="form-row-last">
                                  <label>Password <span class="required">*</span></label>
                                  <Field name="password" v-slot="{ field }">
                                  <input type="text" id="password" v-bind="field" />
                                  </Field>
                                  <err-message :msg="errors.password" />
                              </p>
                              <p class="form-row">
                                  <button class="e-btn e-btn-border" type="submit">Login</button>
                                  <label>
                                    <input type="checkbox" />
                                    Remember me
                                  </label>
                              </p>
                              <p class="lost-password">
                                  <a href="#">Lost your password?</a>
                              </p>
                        </form>
                      </div>
                  </div>
                  <!-- ACCORDION END -->
            </div>
          </div>
          <div class="col-md-6">
            <div class="coupon-accordion">
                  <!-- ACCORDION START -->
                  <h3>Have a coupon? <span id="showcoupon" @click="openCoupon = !openCoupon">Click here to enter your code</span></h3>
                  <div id="checkout_coupon" class="coupon-checkout-content" v-if="openCoupon">
                      <div class="coupon-info">
                        <form-coupon></form-coupon>
                      </div>
                  </div>
                  <!-- ACCORDION END -->
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openLogin = ref<boolean>(false);
const openCoupon = ref<boolean>(false);

import { useForm,Field } from 'vee-validate';
import * as yup from 'yup';

interface IFormValues {
  email?: string | null;
  password?: string | null;
}
const { errors, handleSubmit,resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
  resetForm()
});
</script>
