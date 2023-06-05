<template>
  <nav class="navbar navbar-expand-lg navbar-sty px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <h5> <i class="mdi mdi-account-multiple"></i> N E T W O R K</h5>
        <!-- <img alt="logo" src="../assets/img/cw-logo.png" height="45" /> -->
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <!-- <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li> -->
        <div class="ps-5">
        <SearchBar/>
      </div>
<!-- <router-link :to="{name:'Profile', params: {id:postProp.creatorId}}">
      <div class="ps-5">
        <h5 @click="setActiveProfile()"><i class="mdi mdi-account-box"></i>My Profile</h5>
      </div>
    </router-link> -->

      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import { computed } from '@vue/reactivity';
import { Post } from '../models/Post.js';
import Login from './Login.vue';
import { AppState } from '../AppState.js';
export default {

  props: {
    postProp: {type: Post, required: true}
  },
  setup(props) {
    return {
      setActiveProfile(){
                AppState.activeProfile = props.Post
            },

          account: computed(()=> AppState.account)
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }

  .navbar-sty{
    background-color: rgb(32, 155, 155);
  }
}
</style>
