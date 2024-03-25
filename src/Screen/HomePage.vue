

<template>
    <NavBar title="POON POST"/>

    <div class="app">

    <aside>
        <VueSidePanel v-model="isOpened" class="side-panel">
        <div class="side-panel-text-container">
          <SideBarText topic="MY POST" logo = "pi pi-user"/>
          <SideBarText topic="FRIEND LIST" logo = "pi pi-users"/>
          <SideBarText topic="SAVED" logo = "pi pi-bookmark"/>
          <SideBarText topic="FAVORITE" logo = "pi pi-heart-fill"/>
          <SideBarText topic="POST" logo = "pi pi-plus"/>

        
        </div>    
    </VueSidePanel>
    </aside>

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
                console.log("GET")
                axios.get("http://127.0.0.1:8000").then((res) => (this.data = res.data));
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

    

    .side-panel-text-container{
        
        height: 100%;
        width: 250px;
        border-bottom-right-radius: 20px; 
        background-color: white

    }

    .side-panel{
        
        height: 100%;

    }
    .display_card{
        position: absolute;
        left: 50%;
        top: 10%;
        display: block;
        justify-content: center; /* Horizontally center the cards */
        align-items: center;
    }


    .app{
        display: flex;

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