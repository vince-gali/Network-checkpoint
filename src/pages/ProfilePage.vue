<template>
    <ProfileCard :profileProp="profile"/>
    <div class="col-10" v-for="p in posts" :key="p.id">
        <PostCard :postProp="p" />
        <!-- <p>test</p> -->
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