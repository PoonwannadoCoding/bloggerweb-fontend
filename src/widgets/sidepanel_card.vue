<template>

    <div class="card" @click="handleClick">

        <div class="card-logo">
            <i :class="logo"></i>
            </div>
            <router-link class="side-panel-text" :to="path"> {{ topic }} </router-link>

    </div>

</template>


<script>
    import 'primeicons/primeicons.css'

export default {
        props: ['topic', 'logo', 'path'],
        name: 'SideBarText',
        
    }
</script>

<style>

.card{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15%;
    padding-top: 5%;



}

.side-panel-text{
        color: black;
        flex: 0 0 auto;
        width: 250px; 
        cursor: pointer;
        font-size: 20px;
        text-decoration: none;

}

.card-logo {
        color: black;
        font-size: 25px;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;

    }


</style>