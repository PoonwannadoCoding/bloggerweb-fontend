<script>
    import 'primeicons/primeicons.css'
</script>

<template>

    <div class="app-bar">
        <nav class="navbar">
            <div class="logo">
                <i class="pi pi-book" ></i>
            </div>

            <div class="app-name">
                BLOGGER
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

<style>

nav {
        background-color: #C8EAD1;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px; 
    }

    .app-bar {
        margin: 0;
        padding: 0;
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
        color: black;
        font-size: 30px;
        margin-right: 10px;
    }

    .logo {
        color: black;
        font-size: 30px;
        margin-left: 10px;
    }

    .app-name{
        font-size: 30px;
        margin-left: 15px;
    }


</style>