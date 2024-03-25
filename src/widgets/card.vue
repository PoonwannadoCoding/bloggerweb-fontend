<template>

    <div class="blog_card">

        <h2 class = "title">
            {{ title }} by {{ author }}

        </h2>
        <div class="context">
            <p >
            {{ context }}
        </p>
        </div>
       
        <div class="detail">
            <p> Like: {{ like }}</p>
            <p> Created on: {{ created }}</p>
        </div>


    </div>

</template>


<script>


export default {
        props: ['title', 'context', 'like', 'created', 'author'],
        name: 'BlogCard',
        
    }
</script>

<style>
.title{
    color: white;
}

.context{
    font-size: 16px;
    color:white;
}

.detail{
    display: flex;
    color:white;
    align-items: center;
    justify-content: space-between;
}

.blog_card{
    width: 100%;
    border-radius: 20px;
    background-color: hsl(219, 15%, 37%);
    padding: 2px 16px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin-bottom: 12.5%;

}
</style>