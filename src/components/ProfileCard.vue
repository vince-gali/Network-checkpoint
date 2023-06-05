<template>

    <section class="row">
        <div class="col-8 card   ">
            <div class="card-body">
                <div class="profile-card">
                    
                </div>

                
                <img class="rounded-circle profile-picture" :src="profileProp?.picture" alt="">
                <h4>{{ profileProp.name }}</h4>
                <h5 >Class of {{ profileProp.class }}</h5>
                <p>{{ profileProp.bio }}</p>
                <h5 :disabled="!linkedin"> <i class="mdi mdi-linkedin"></i> </h5>
                <h5 :disabled="!linkedin"> <i class="mdi mdi-github"></i> </h5>
                <p :disabled="graduated"> <i class="mdi mid-graduated">graduated</i></p>
                <p>{{ profileProp.class }}</p>
            </div>

        </div>
        
    </section>


</template>


<script>
import { computed } from '@vue/reactivity';
import { Account } from '../models/Account.js';
import { Profile } from '../models/Profile.js';

export default {

    props: {
        profileProp: {type: Profile, required: true}
    },

    setup(props){
        return {
            coverImg: computed(()=> `url(${props.profileProp?.coverImg})`)
        }
    }
}
</script>


<style lang="scss" scoped>

.profile-card{
    background-image: v-bind(coverImg);
    aspect-ratio: 1/1;
    height: 150px;
    min-width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    place-content: center;
    background-color: white;
}

.profile-picture{
    height: 100px;
    aspect-ratio: 1/1;
    object-fit: cover;
}

</style>