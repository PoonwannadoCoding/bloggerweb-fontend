

<template>
    

    <div class="app">


<div class="display_card">
    <div v-for="(post, index) in data" :key="index" >
        <BlogCard :title="post.title" :context="post.context" :like="post.like" :created="post.created" :author="post.user" />
    </div>
</div>    



    </div>
    


  </template>



<script>
    import axios from "axios";
    import NavBar from "../widgets/navbar.vue";
    import SideBarText from "../widgets/sidepanel_card.vue";
    import { VueSidePanel } from 'vue3-side-panel';
    import BlogCard from "../widgets/card.vue";
    import 'vue3-side-panel/dist/vue3-side-panel.css';


    

    export default{
        components:{
            NavBar,
            SideBarText,
            BlogCard,

        },

        methods:{
            getData(){
                axios.get("http://127.0.0.1:8000/user/post").then((res) => (this.data = res.data));
            }
        },
        data(){
            return {
                data: [],
            };
        },
        mounted() {
            this.getData();
        }
    }

</script>

<style>

body {
        background-color: #31363F;
        margin: 0;
        padding: 0;
    }

    


    .side-panel{
        
        height: 100%;

    }
    .display_card{
        position: absolute;
        left: 42.5%;
        top: 10%;

        display: block;
        justify-content: center;
        align-items: center;
    }


    .app{
        display: flex;
        z-index: 0;
        main{
            flex: 1 1 0;
            padding: 2rem;

        }

    }

    aside{
        display: flex;
        overflow: hidden;
        min-height: 100vh;
    }
</style>