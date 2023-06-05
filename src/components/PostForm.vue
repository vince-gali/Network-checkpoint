<template>

<div class="ps-5">
<div class="card  pt-4 postCard-body p-2 elevation-5">

<div>
    <img :src="profileProp?.picture" alt="">
</div>
    <form  @submit="submitPostForm()" action="">
        <div class="mb-">
            <div class="mb-1">
        
                <input type="text" v-model="editable.body" required class="form-control " id="body" placeholder="Share What's Happening..">
            </div>
            <div class="">
                <p class="text-end pt-2 pe-3" type="submit"> <i class="mdi mdi-send"></i> Create Post</p>
            </div>
        </div>
    </form>
</div>
</div>

</template>


<script>
import { ref } from 'vue'
import { postsService } from '../services/PostsService.js'
// import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
// import { logger } from '../utils/Logger.js'

export default {
    setup(){

        const editable = ref({})
        
        // const create = ref('')
        

        return {
            // create,

            editable,


            async submitPostForm(){
            try {
              
                const formData = editable.value
                // logger.log('creating post')
                window.event.preventDefault()
                await postsService.createPost(formData)
                editable.value={}

            } catch (error) {
                Pop.error(error)
            }
        }
        }
    }
}
</script>


<style lang="scss" scoped>

.postCard-body{
    background-color: white;
    
}

</style>