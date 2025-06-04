<template>
  <form @submit="onSubmit">
    <div class="sign__input-wrapper mb-25">
        <h5>Full Name</h5>
        <div class="sign__input">
          <Field name="name" v-slot="{ field }">
            <input v-bind="field" id="name" type="text" placeholder="Full name">
          </Field>
          <i class="fal fa-user"></i>
        </div>
        <err-message :msg="errors.name" />
    </div>
    <div class="sign__input-wrapper mb-25">
        <h5>Work email</h5>
        <div class="sign__input">
          <Field name="email" v-slot="{ field }">
            <input v-bind="field" id="email" type="text" placeholder="e-mail address">
          </Field>
          <i class="fal fa-envelope"></i>
        </div>
        <err-message :msg="errors.email" />
    </div>
    <div class="sign__input-wrapper mb-25">
        <h5>Password</h5>
        <div class="sign__input">
          <Field name="password" v-slot="{ field }">
            <input v-bind="field" type="password" id="password" placeholder="Password">
          </Field>
          <i class="fal fa-lock"></i>
        </div>
        <err-message :msg="errors.password" />
    </div>
    <div class="sign__input-wrapper mb-10">
        <h5>Re-Password</h5>
        <div class="sign__input">
          <Field name="passwordConfirmation" v-slot="{ field }">
            <input v-bind="field" type="password" id="passwordConfirmation" placeholder="Re-Password">
          </Field>
          <i class="fal fa-lock"></i>
        </div>
        <err-message :msg="errors.passwordConfirmation" />
    </div>
    <div class="sign__action d-flex justify-content-between mb-30">
        <div class="sign__agree d-flex align-items-center">
          <input class="m-check-input" type="checkbox" id="m-agree">
          <label class="m-check-label" for="m-agree">I agree to the <a href="#">Terms & Conditions</a>
              </label>
        </div>
    </div>
    <button class="e-btn w-100"> <span></span> Sign Up</button>
    <div class="sign__new text-center mt-20">
        <p>Already in Markit ? <nuxt-link href="/sign-in"> Sign In</nuxt-link></p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm,Field } from 'vee-validate';
import * as yup from 'yup';

interface IFormValues {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  passwordConfirmation?: string | null;
}
const { errors, handleSubmit,resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),
    passwordConfirmation: yup.string().required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.')
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
  resetForm()
});
</script>
