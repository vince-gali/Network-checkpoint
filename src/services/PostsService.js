import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {

    async getPosts(){
        // AppState.posts = []
        const res = await api.get('api/posts')
        logger.log('getting posts', res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
        AppState.older = res.data.older
        AppState.newer = res.data.newer

    }

    async getPostsByProfile(id){
        const res = await api.get('api/posts/',{
            params: {
                creatorId:id
            }
        })
        AppState.posts = res.data.posts.map(p=> new Post(p))
    }

    async changePage(url){

        

        logger.log('this is the url',url)
        const res = await api.get(url)
        logger.log(res.data)
        AppState.posts = res.data.posts
        logger.log(AppState.posts)


        //NOTE - do not need below
        AppState.older = res.data.older
        // logger.log('old posts',AppState.older)
        AppState.newer = res.data.newer
        // logger.log('new posts', AppState.newer)
    }

    async searchPosts(searchTerm){
        const res = await api.get('api/posts', {
            params: {
                // creatorId: id
                query: searchTerm
            }
        })

        // const savedQuery = AppState.query
        // if(!savedQuery){
        //     const res = await api.get(`search/posts?page=${AppState.currentPage}`)
        //     AppState.posts = res.data.posts.map(p => new Post(p))
        // } else {
        //     const res = await api.get('search/posts',{
        //         params: {
        //             query: savedQuery
        //         }
        //     })
        //     AppState.posts = res.data.posts.map(p=> new Post(p))
        // }


        AppState.query = searchTerm
        AppState.posts = res.data.posts.map(p=> new Post(p))
        // AppState.currentPage = res.data.page
        // AppState.totalPages = res.data.total_pages
    }

    async createPost(formData){
        const res = await api.post('api/posts', formData)
        logger.log('creating post', res.data)
        AppState.posts = AppState.posts.unshift(new Post(res.data))
    }

    async deletePost(postId){
        logger.log('[DELETING POST]', postId)
        const res = await api.delete(`api/posts/${postId}`)
        logger.log('[DELETING POST]', res.data)
        AppState.posts = AppState.posts.filter(p => p.id !=postId)
    }

    async addLike(postId){
        const likeIds = Post.likeIds
        logger.log('adding a like')
        const res = await api.post(`api/posts/${postId}/like`, likeIds++)
        logger.log('increasing by 1')

    //     // AppState.posts = AppState.posts.filter(p => p.id !=postId)
    }



}

export const postsService = new PostsService()