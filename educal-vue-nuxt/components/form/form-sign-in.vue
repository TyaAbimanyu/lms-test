<template>
 <form @submit="onSubmit">
    <div class="sign__input-wrapper mb-25">
       <div class="sign__input">
          <Field name="email" v-slot="{ field }">
            <input v-bind="field" id="email" type="text" placeholder="e-mail address">
          </Field>
          <i class="fal fa-envelope"></i>
        </div>
        <err-message :msg="errors.email" />
    </div>
    <div class="sign__input-wrapper mb-10">
      <h5>Password</h5>
        <div class="sign__input">
          <Field name="password" v-slot="{ field }">
            <input v-bind="field" type="password" id="password" placeholder="Password">
          </Field>
          <i class="fal fa-lock"></i>
        </div>
        <err-message :msg="errors.password" />
    </div>
    <div class="sign__action d-sm-flex justify-content-between mb-30">
        <div class="sign__agree d-flex align-items-center">
          <input class="m-check-input" type="checkbox" id="m-agree">
          <label class="m-check-label" for="m-agree">Keep me signed in</label>
        </div>
        <div class="sign__forgot">
          <a href="#">Forgot your password?</a>
        </div>
    </div>
    <button class="e-btn  w-100"> <span></span> Sign In</button>
    <div class="sign__new text-center mt-20">
        <p>New to Markit? <nuxt-link href="/sign-up">Sign Up</nuxt-link></p>
    </div>
  </form>
</template>

<script setup lang="ts">
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