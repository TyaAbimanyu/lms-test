<template>
  <form @submit="onSubmit">
    <p class="checkout-coupon">
      <Field name="coupon" v-slot="{ field }">
        <input type="text" v-bind="field" id="coupon" placeholder="Coupon Code" />
      </Field>
      <err-message :msg="errors.coupon" />
      <button class="e-btn e-btn-border" type="submit">Apply Coupon</button>
    </p>
  </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

interface ICouponValue {
  coupon?: string | null;
}
const { errors, handleSubmit, resetForm } = useForm<ICouponValue>({
  validationSchema: yup.object({
    coupon: yup.string().required().label("Coupon"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});
</script>
