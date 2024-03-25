

<template>
    <div class="app-bar">
        <nav class="navbar">
            <div class="logo">
                <i class="pi pi-book" ></i>
            </div>

            <div class="app-name">
                {{ title }}
            </div>
            
            <div class="search-bar-container">
                <input class="search-bar" v-model="text">
            </div>

            <div class="user-icon">
                <i class="pi pi-user" ></i>
            </div>
        </nav>
    </div>
</template>


<script>
    import 'primeicons/primeicons.css'
    export default {
        props: ['title'],
        name: 'NavBar',
    }
</script>

<style>

nav {
        background-color: #222831;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        min-width: 20vw; 
    }

    @layer outer{
        .app-bar {
        position: fixed;
        margin: 0;
        padding: 0;
        width: 100%;
        z-index: 1;
    }

    }
    

    .search-bar-container {
        flex: 1;
        display: flex;
        justify-content: center; 
    }

    .search-bar {
        width: 100%;
        max-width: 500px;
        height: 25px;
        border-radius: 50px;

    }

    .user-icon {
        color: white;
        font-size: 30px;
        margin-right: 10px;
    }

    .logo {
        color: white;
        font-size: 30px;
        margin-left: 10px;
    }

    .app-name{
        color:white;
        font-size: 30px;
        margin-left: 15px;
    }

</style>
