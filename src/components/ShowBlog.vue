<template>
    <div id="show-blogs">
        <center>
            <h1>Blogs</h1>
        </center>
        <input type="text" v-model="search" placeholder="search blogs" class="SearchInput">
        <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
            <h3 v-rainbow>{{blog.name | to-uppercase}}</h3>
            <article>
                {{blog.username | snippet}}
            </article>
        </div>
    </div>
</template>

<script>
import API from '../api'

export default {
    data() {
        return {
            blogs :[],
            search :''
        }
    },
    created() {
        API.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data);
            this.blogs = response.data;
        })
    },
    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.name.match(this.search);
            });
        }
    }
}
</script>

<style  >
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
.SearchInput{
    width: 100%;
    padding: 10px;
    background-color: rgba(221, 221, 221, 0.479);
}

</style>
