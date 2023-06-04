<template>

<div class="container-fluid">
    <section class="row">
        <div class="justify-items-center">
    <div class="row mt-2" v-if="profile">
        <div class="col-md-8 m-auto">
            <div>
                <ProfileCard :profileProp="profile"/>
            </div>
        </div>
    </div>
</div>
</section>
    
    
    
<div class="col-10">
    <PostForm/>
</div>
    <div class="col-8" v-for="p in posts" :key="p.id">
        <PostCard :postProp="p" />
    </div>
    </div>
    
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
            posts: computed(()=> AppState.posts)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>