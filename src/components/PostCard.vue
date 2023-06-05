<template>



<div class="card row card-body elevation-5">
      <div class="">
        <div class="d-flex">
        <router-link :to = "{name: 'Profile', params: {id:postProp.creatorId}}">
            <img @click="setActiveProfile()" class="img-fluid rounded-circle post-creator" :src="postProp.creator.picture" alt="">
        </router-link>
        <div class="ps-2 align-items-center">
        <p>{{postProp?.creator.name}}</p>
        <p>{{ postProp?.createdAt }}</p>
    </div>
    </div>
        <div class="">
            <p>{{postProp?.body}}</p>
        </div>
        <!-- <div v-for="p in posts" :key="p.id"> -->
            <p @click="addLike(postProp?.id)" class="text-end"> <i class="mdi mdi-heart" ></i> {{ postProp?.likeIds.length }}</p>
        <!-- </div> -->
      </div>
      <button @click="deletePost(postProp?.id) " v-if="postProp?.creatorId == account?.id"> <i class="mdi mdi-pencil"></i>Delete </button>
    </div>


</template>


<script>
import { computed, popScopeId } from 'vue';
import { AppState } from '../AppState.js';
import { Post } from '../models/Post.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';

export default {

    props: {
        postProp: {type: Post, required:true}

    },


    setup(props){

        
        return {
            setActiveProfile(){
                AppState.activeProfile = props.Post
            },

            async deletePost(postId){
                try {
                    logger.log('deleting post')
                    await postsService.deletePost(postId)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            },

            async addLike(postId){
                try {
                    await postsService.addLike(postId)
                    // postProp.likeIds++
                    // logger.log('adding a like')
                } catch (error) {
                    Pop.error(error)
                }
            },

            


            account: computed(()=> AppState.account)
        }


        
    }
}
</script>


<style lang="scss" scoped>

.post-creator{
    height: 60px;
    aspect-ratio: 1/1;
    object-fit: cover;
}

.card-body{
    background-color: white;
    border-radius: 10px;
}

</style>