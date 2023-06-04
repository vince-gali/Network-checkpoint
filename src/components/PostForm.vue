<template>

    <form  @submit="submitPostForm()" action="">
        <div class="mb-3">
            <div class="mb-3">
        
                <input type="text" v-model="editable.body" required class="form-control" id="body" placeholder="Share What's Happening..">
            </div>
                <button class="text-end" type="submit">Create Post</button>
        </div>
    </form>

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

</style>