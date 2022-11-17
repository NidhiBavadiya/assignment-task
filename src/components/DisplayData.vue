<template>
<div>
<!-- title component display for  title and task button -->
<div id="Ind_1">
    <h1>{{title}}</h1>
    <button type="button"><router-link to="/add">Add Task</router-link></button> 
   <router-view v-bind:details="details"></router-view>
</div>
</div>
</template>

<script>



export default {

    data() {
        return {
            title:'Todo List',
            details:[{id:1,title :'learn java',priority:'low',status:'done'},
                {id:2,title:'vuejs',priority:'high',status:'Undone'},
                {id:3,title:'gift',priority:'medium',status:'done'},
                {id:4,title:'practical',priority:'medium',status:'Undone'}], 
    }
   },
}
</script>

<style scoped>

#Ind_1{
    width:100% ;
    text-align: center;
}
.data_table{ 
    margin: 100px 0 0 0;
}
ul{
    list-style: none;
}
h1{
    text-align: center;
}
button{
    width: 100px;
    height: 40px;
    border: 1px solid black;
    background-color: lightgray;
    border-radius: 22px;
}
a{
    text-decoration:none;
    color: black;
}

</style>
