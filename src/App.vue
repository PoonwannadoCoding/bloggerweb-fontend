<template>
    <NavBar title="POON POST"/>
    
    <div class="app">

<aside>
    <div class="side-panel-text-container">
    <SideBarText topic="HOME" logo = "pi pi-home" path="/"/>
      <SideBarText topic="MY POST" logo = "pi pi-user" path="/user/post"/>
      <SideBarText topic="FRIEND LIST" logo = "pi pi-users" path="/"/>
      <SideBarText topic="SAVED" logo = "pi pi-bookmark" path="/"/>
      <SideBarText topic="FAVORITE" logo = "pi pi-heart-fill" path="/"/>
      <SideBarText topic="POST" logo = "pi pi-plus" path="/post"/>

    
    </div>    
</aside>
<router-view />


</div>    


</template>

<script>
    import NavBar from "./widgets/navbar.vue";
    import SideBarText from "./widgets/sidepanel_card.vue";
    import 'vue3-side-panel/dist/vue3-side-panel.css';


    

    export default{
        components:{
            NavBar,
            SideBarText,
            

        },
    }

</script>

<style>

.side-panel-text-container{
        position: fixed;
        margin-top: 60px;
        height: 100%;
        width: 250px;
        background-color: white

    }


</style>