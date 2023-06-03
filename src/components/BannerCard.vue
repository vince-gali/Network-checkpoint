<template>
<section class="row">

    
    <div class="my-2 ">
        <img :src="bannerProp.banner" alt="">
        <!-- <p>{{ bannerProp.title }}</p> -->
    
</div>
</section>

</template>


<script>
import { Banner } from '../models/Banner.js';

export default {

    props: {
        bannerProp: {type: Banner, required:true}
    },
    setup(){
        return {
            
        }
    }
}
</script>


<style lang="scss" scoped>

</style>