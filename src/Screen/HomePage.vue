

<template>
    <NavBar title="BLOGGER"/>

    <VueSidePanel v-model="isOpened" class="side-panel">
  <div class="side-panel-text-container">
    <SideBarText topic="MY BLOG" logo = "pi pi-user"/>
    <SideBarText topic="FRIEND LIST" logo = "pi pi-users"/>
    <SideBarText topic="SAVED" logo = "pi pi-bookmark"/>
    <SideBarText topic="FAVORITE" logo = "pi pi-heart-fill"/>
    
  </div>    
</VueSidePanel>

  </template>



<script>
    import NavBar from "../widgets/navbar.vue";
    import SideBarText from "../widgets/sidepanel_card.vue";
    import { VueSidePanel } from 'vue3-side-panel';
    import 'vue3-side-panel/dist/vue3-side-panel.css';

    export default{
        components:{
            NavBar,
            SideBarText
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
        background-color: #EEEEEE

    }

    .side-panel{
        
        height: 100%;

    }
</style>