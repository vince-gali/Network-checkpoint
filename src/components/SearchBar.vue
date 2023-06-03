<template>

    <form @submit.prevent="searchPosts()" action="">
        <input type="text" class="w-50" v-model="search" placeholder="Search...">
        <!-- <button type="submit">search</button> -->
    </form>

</template>


<script>
import { ref } from 'vue'
import { postsService } from '../services/PostsService.js'
import { logger } from '../utils/Logger.js'

export default {
    setup(){

        const search = ref('')
        return {
            search,
            async searchPosts(){
                try {
                    const searchTerm = search.value
                    logger.log('searching post', searchTerm)
                    await postsService.searchPosts(searchTerm)
                } catch (error) {
                    
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>