<template>

    <div class="container-fluid">
        <section class="row">
            <div class="">
                <div class="row mt-2" v-if="profile">
                    <div class="col-12 ps-5">
                <div class="my-2">
                    <ProfileCard :profileProp="profile"/>
                </div>
            </div>
        </div>
    </div>
    </section>
    
    <div class="col-10" >
        <PostForm v-if="user.id != account.id" />
    </div>
        <div class="col-8 py-2" v-for="p in posts" :key="p.id">
            <PostCard :postProp="p" />
        </div>
        </div>


        <div class="">
      <button :disabled="!newerPost" @click="changePage(newerPost)">Newer</button>
      <button :disabled="!olderPost" @click= "changePage(olderPost)">Older</button>
    </div>

        <!-- <div>
        <div class="">
            <ProfileCard :profileProp="profile"/>
        </div>

        <div class="col-8" v-for="p in posts" :key="p.id">            
            <PostCard :postProp="p" />
        </div>
    </div> -->




        
    
</template>


<script>
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService.js';
import Pop from '../utils/Pop.js';
import { onMounted, popScopeId } from 'vue';
import { postsService } from '../services/PostsService.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
    setup(){

        const route = useRoute()
            async function getProfile(){
                try {
                    await profilesService.getProfileById(route.params.id)
                } catch (error) {
                    Pop.error(error)
                }
            }

            async function getPostsByProfile(){
                try {
                    await postsService.getPostsByProfile(route.params.id)
                } catch (error) {
                    Pop.error(error)
                }
            }


        onMounted(()=>{
            getProfile()
            getPostsByProfile()
        })

        return {
            profile: computed(()=> AppState.activeProfile),
            posts: computed(()=> AppState.posts),
            user: computed(()=> AppState.user),
            account: computed(()=> AppState.account),
            page: computed(()=> AppState.page),
            totalPages: computed(()=> AppState.totalPages),
            newerPost: computed(()=> AppState.newer),
            olderPost: computed(()=> AppState.older),

            async changePage(url){
      try {
        await postsService.changePage(url)
      } catch (error) {
        Pop.error(error)
      }
    }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>