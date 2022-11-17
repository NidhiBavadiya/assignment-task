<template>
<div id="tabledata">
<!-- create table for enter list data -->
    <table>
        <tr>
            <th>Task</th>
            <th>priority</th>
            <th>status</th>
            <th>Action</th>
        </tr>
        <tr v-for="(detail,index) in details" v-bind:key="detail.id">
            <td><input type="checkbox" name="" value="">{{detail.title}}</td>
            <td>{{detail.priority}}</td>
            <td>{{detail.status}}</td>
            <td><button v-on:click.prevent="deleteData(index)" class="btn_1">Delete</button>
            <button type="button" v-on:click.prevent="editData()"  class="btn_2">Edit</button></td>
        </tr>
    </table>
</div>
</template>
<script>
export default {
      props:['details'],
    data() {
        return {
                result:'',
            blog:{
                id:'',
                title:'',
                priority:'',
                result:''
            }
    }
   },
   // delete data function
   methods: {

    deleteData:function(index){
        this.details.splice(index,1)
        console.log(index)
    },

    editData:function(index){
        console.log(index)
    }
   },
}

</script>

<style scoped>
#Ind_1{  
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
table{
    font-family: sans-serif;
    width: 90%;
    margin: 100px auto;
    font-size:12px;
    box-shadow:  0px 1px 30px 5px #888888;
}

th{
    padding: 15px 10px;
    text-align: left;
    border-bottom: 1px solid;
}
td{
    padding: 15px 0 0px 10px;
}
.btn_1{
    width: 60px;
    height: 30px;
    border: 1px solid black;
    background-color: #ff0000bf;
    border-radius: 22px;
    margin: 0px 0px 0px 5px;
    font-size:12px;
}
.btn_2{
    width: 60px;
    height: 30px;
    border: 1px solid black;
    background-color: #1ba31bc7;
    border-radius: 22px;
    margin: 0px 0px 0px 5px;
    font-size:12px;
}
a{
    text-decoration:none;
    color: black;
}
</style>