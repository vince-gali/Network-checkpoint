<template>



<div class="card row">
      <div class="card-body">
        <router-link :to = "{name: 'Profile', params: {id:postProp.creatorId}}">
            <img @click="setActiveProfile()" class="img-fluid rounded-circle post-creator" :src="postProp.creator.picture" alt="">
        </router-link>

        <p>{{postProp?.creator.name}}</p>
        <p>{{ postProp?.createdAt }}</p>
        <p>{{postProp?.body}}</p>
        <p class="text-end"> <i class="mdi mdi-heart" ></i> {{ postProp?.likeIds.length }}</p>
      </div>
    </div>


</template>


<script>
import { AppState } from '../AppState.js';
import { Post } from '../models/Post.js';

export default {

    props: {
        postProp: {type: Post, required:true}

    },


    setup(props){
        return {
            setActiveProfile(){
                AppState.activeProfile = props.Post
            }
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

</style>