<template>

<form class="card elevation-1" @submit.prevent="handleSubmit">

<div class="card-body">
  <div class="form-floating mb-3">
    <input name="name" class="form-control" placeholder="Name" type="text" required v-model="editable.name">
    <label for="name">Name:</label>
  </div>
  <div class="form-floating mb-3">
    <input name="picture" class="form-control" placeholder="Profile Picture" type="url" required
      v-model="editable.picture">
    <label for="picture">Picture:</label>
  </div>
  <div class="form-floating mb-3">
    <input name="cover-img" class="form-control" placeholder="cover Image" type="url" required
      v-model="editable.coverImg">
    <label for="cover-img">Cover Image:</label>
  </div>
  <div class="form-floating mb-3">
    <input name="github" class="form-control" placeholder="Github" type="url"  v-model="editable.github">
    <label for="cover-img">Github:</label>
  </div>
  <div class="form-floating mb-3">
    <input name="linkedin" class="form-control" placeholder="LinkedIn" type="url"  v-model="editable.linkedin">
    <label for="linkedin">LinkedIn:</label>
  </div>
  <div class="form-floating mb-3">
    <input name="class" class="form-control" placeholder="Class Year" type="text"  v-model="editable.class">
    <label for="class">Class:</label>
  </div>
</div>
<div class="pb-4 pe-4 text-end">
  <!-- <router-link :to="{name: 'Profile'}"> -->
  <button class="btn btn-outline-primary" type="submit">Save Account</button>
<!-- </router-link> -->
</div>


</form>

</template>


<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { accountService } from '../services/AccountService.js';

export default {
    setup(){
        const editable = ref({})

        watchEffect(()=> {
            editable.value = {...AppState.account}
        })


        return {
            editable,
            async handleSubmit(){
                try {
                    await accountService.editAccount(editable.value)
                } catch (error) {
                    
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>