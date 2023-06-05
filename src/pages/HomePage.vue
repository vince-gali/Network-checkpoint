<template>

  <!-- <section class="row "> -->
    <div class="ps-">
      
      <div class="col-11 py-3">
        <PostForm v-if="account.id"/>
      </div>
    </div>
  <!-- </section> -->

   <!-- <section class="row"> -->
    <div class="">
    <div class="col-11 py-2 ps-4 " v-for="p in posts" key="p.id" >
      <PostCard :postProp="p" />
    </div>
  </div>

  <section class="row justify-content-center ">
    <div class="col-6 justify-content-between ">
    <div class="py-4 px-5">
      <button class="" :disabled="!newerPost" @click="changePage(newerPost)">Newer</button>
      <button :disabled="!olderPost" @click= "changePage(olderPost)">Older</button>
    </div>
  </div>
  </section>
   <!-- </section> -->

</template>

<script>
import Pop from '../utils/Pop.js';
import {postsService} from '../services/PostsService.js'
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
// import { url } from 'inspector';

export default {
  setup() {

    async function getPosts(){
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.error(error)
      }
    }

    async function createPost(){
      try {
        await postsService.createPost()
      } catch (error) {
        Pop.error(error)
      }
    }

    

    onMounted(()=> {
      getPosts()
      // createPost()
      // getBanner()
    })


    return {
      posts: computed(()=> AppState.posts),
      newerPost: computed(()=> AppState.newer),
      olderPost: computed(()=> AppState.older),
      user: computed(()=> AppState.user),
      account: computed(()=> AppState.account),

      async changePage(url){
      try {
        await postsService.changePage(url)
      } catch (error) {
        Pop.error(error)
      }
    }

        // async loadNew(newer){
        //   try {
        //     await postsService.loadNew(newer)
        //   } catch (error) {
        //     Pop.error(error)
        //   }
        // }
    }


  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .buttons{
    justify-content: space-between;
    color: white;
  }
}
</style>
