import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PostPage from '../views/PostPage.vue'
import UserPostPage from '../views/MyPostPage.vue'


const routes = [
    {
        path: '/', 
        name: 'Home', 
        component: HomePage
    },
    {
        path:'/post',  
        name: 'CreatePost', 
        component: PostPage
    },
    {
        path:'/user/post',  
        name: 'UserPost', 
        component: UserPostPage
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  export default router