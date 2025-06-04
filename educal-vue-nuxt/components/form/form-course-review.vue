<template>
  <form @submit="onSubmit">
    <div class="row">
      <div class="col-xxl-6">
        <div class="course__form-input">
          <Field name="name" v-slot="{ field }">
           <input type="text" id="name" placeholder="Your Name" v-bind="field" />
          </Field>
          <err-message :msg="errors.name" />
        </div>
      </div>
      <div class="col-xxl-6">
        <div class="course__form-input">
          <Field name="email" v-slot="{ field }">
           <input type="email" id="email" v-bind="field" placeholder="Your Email" />
          </Field>
          <err-message :msg="errors.email" />
        </div>
      </div>
      <div class="col-xxl-12">
        <div class="course__form-input">
          <Field name="review_title" v-slot="{ field }">
           <input type="text" id="review_title" v-bind="field" placeholder="Review Title" />
          </Field>
          <err-message :msg="errors.review_title" />
        </div>
      </div>
      <div class="col-xxl-12">
        <div class="course__form-input">
          <div class="course__form-rating d-flex align-items-center">
            <span>Rating : </span>
            <div class="ml-5">
              <vue3-star-ratings v-model="rating" :star-size="14" inactive-color="#b8b9bf" @change="onRatingClick" @update:model-value="onRatingClick"  />
            </div>
          </div>
          <Field name="review_summery" v-slot="{ field }"> 
            <textarea placeholder="Review Summary" v-bind="field" id="review_summery"></textarea>
          </Field>
          <err-message :msg="errors.review_summery" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-12">
        <div class="course__form-btn mt-10 mb-55">
          <button type="submit" class="e-btn">Submit Review</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm,Field } from 'vee-validate';
import vue3StarRatings from "vue3-star-ratings";
import * as yup from 'yup';
let rating = ref(0);

function onRatingClick() {
  console.log('rating',rating.value)
}

interface IFormValues {
  name?: string | null;
  email?: string | null;
  review_title?: string | null;
  review_summery?: string | null;
}
const { errors, handleSubmit,resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    review_title: yup.string().required().label("Review Title"),
    review_summery: yup.string().required().label("Message"),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
  resetForm()
});
</script>
