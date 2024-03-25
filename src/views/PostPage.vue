<template>
    <div class="post-story-page">
        <h1 class="page-header">
            Create Post
        </h1>
        
        <div class="text-field-container">
            <textarea class="topic-field" v-model="topic" placeholder="What is your topic"> </textarea>
            <textarea class="context-field" v-model="context" placeholder="What's on your mind"> </textarea>
            <textarea class="author-field" v-model="author" placeholder="Written By"></textarea>
            
            <button @click="handleClick" class="submit-button">
                Submit
            </button>

        </div>
    </div>
</template>


<script>
import axios from "axios";
import router from '../router'
export default {
    data() {
        return {
            topic: "",
            context: "",
            author: ""
        };
    },
    methods: {
        async handleClick() {
            console.log("CLICK");

            try {
                const response = await axios.post("http://127.0.0.1:8000/add", {
                    user: this.author,
                    title: this.topic,
                    context: this.context
                });
                router.push('/');
                console.log("Post successful:", response.data);

            } catch (error) {
                console.error("Error posting:", error);
            }

   
            
        }
    }
}



</script>

<style>

.submit-button{
    color: black;
}

.post-story-page{
    margin-top: 1.5%;
    padding-bottom: 10%;
}

.page-header{
    margin-left: 15%;
    color: white;
    font-size: 60px;
}

.topic-field{
    width: 50vw;
    height: 50px;
    border-radius: 10px;
    margin-left: 20%;
    background-color: #31363F;
    border-color: white;
    margin-bottom: 20px;
    font-size: 30px;
    color: white;
    padding-top: 1.5%;
    padding-left: 1.25%;
}

.context-field{
    padding-top: 1.5%;
    padding-left: 1.5%;
    width: 1000px;

    height: 400px;
    border-radius: 5px;
    margin-left: 20%;
    margin-bottom: 20px;
    background-color: #31363F;
    border-color: white;
    font-size: 20px;
    color: white;
}

.author-field{
    width: 25vw;
    height: 50px;
    border-radius: 10px;
    margin-left: 20%;
    background-color: #31363F;
    border-color: white;
    margin-bottom: 20px;
    font-size: 30px;
    color: white;
    padding-top: 1.5%;
    padding-left: 1.25%;
}


</style>