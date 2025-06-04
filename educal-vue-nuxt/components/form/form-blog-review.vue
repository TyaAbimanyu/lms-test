<template>
 <form @submit="onSubmit">
    <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="blog__comment-input">
            <Field name="name" v-slot="{ field }">
              <input v-bind="field" type="text" placeholder="Your Name">
            </Field>
            <err-message :msg="errors.name" />
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="blog__comment-input">
            <Field name="email" v-slot="{ field }">
              <input v-bind="field" type="email" placeholder="Your Email">
            </Field>
            <err-message :msg="errors.email" />
          </div>
        </div>
        <div class="col-xxl-12">
          <div class="blog__comment-input">
            <Field name="subject" v-slot="{ field }">
              <input v-bind="field" type="text" placeholder="Subject">
            </Field>
            <err-message :msg="errors.subject" />
          </div>
        </div>
        <div class="col-xxl-12">
          <div class="blog__comment-input">
            <Field name="message" v-slot="{ field }">
              <textarea v-bind="field" placeholder="Enter Your Message"></textarea>
            </Field>
            <err-message :msg="errors.message" />
          </div>
        </div>
        <div class="col-xxl-12">
          <div class="blog__comment-agree d-flex align-items-center mb-20">
              <input class="e-check-input" type="checkbox" id="e-agree">
              <label class="e-check-label" for="e-agree">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
        </div>
        <div class="col-xxl-12">
          <div class="blog__comment-btn">
              <button type="submit" class="e-btn">Post Comment</button>
          </div>
        </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm,Field } from 'vee-validate';
import * as yup from 'yup';

interface IFormValues {
  name?: string | null;
  email?: string | null;
  subject?: string | null;
  message?: string | null;
}
const { errors, handleSubmit,resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    subject: yup.string().required().label("Subject"),
    message: yup.string().required().label("Message"),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
  resetForm()
});
</script>

