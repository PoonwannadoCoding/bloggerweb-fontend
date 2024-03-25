<template>

    <div class="card" @click="handleClick">

        <div class="card-logo">
            <i :class="logo"></i>
            </div>
        
        <p class="side-panel-text"> {{ topic }} </p>

    </div>

</template>


<script>
    import 'primeicons/primeicons.css'

export default {
        props: ['topic', 'logo'],
        name: 'SideBarText',
        methods: {
        handleClick(topic) {
        console.log("CLICKED");
    }
  }
    }
</script>

<style>

.card{
    display: flex;
    align-items: center;
    justify-content: space-between;


}

.side-panel-text{
        flex: 0 0 auto;
        width: 250px; 
        cursor: pointer;
        font-size: 20px;

}

.card-logo {
        color: black;
        font-size: 25px;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;

    }


</style>