<template>

  <section.row>
    <div class="col-6">
      <SearchBar/>
    </div>
  </section.row>

 <section class="row">
  <div class="col-10" v-for="p in posts" key="p.id" >
    <PostCard :postProp="p" />
    <!-- <div class="card row">
      <div class="card-body">
        <p>profile</p>
        <p>post</p>
      </div>
    </div> -->
  </div>
  <div class="">
    <button :disabled="!newerPost" @click="changePage(newerPost)">Newer</button>
    <button :disabled="!olderPost" @click= "changePage(olderPost)">Older</button>
    
  </div>
 </section>

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

    

    onMounted(()=> {
      getPosts()
      // getBanner()
    })


    return {
      posts: computed(()=> AppState.posts),
      newerPost: computed(()=> AppState.newer),
      olderPost: computed(()=> AppState.older),

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
}
</style>
