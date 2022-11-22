<template>
<div class="t_d">
    <table>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
        </tr>
        <tr v-for="tableval in tableValue" v-bind:key="tableval">
       
        <td>{{tableval.id}}</td>
        <td>{{tableval.title}}</td>
        <td>{{tableval.body}}</td>
        </tr>
    </table>
</div>
</template>
<script>
export default {
    props:['tableValue'],
   data(){
    return{

    }
   } 
}
</script>
<style scoped>
.t_d{
       background-color: rgb(229 229 229);
    font-family: sans-serif;
}
table{
    border:1px solid black;
    text-align:left;
    
}
th{
    border:1px solid black;
    padding:10px;
 
}
td{
     border-right:1px solid black;
     border-bottom:1px solid black;
     padding:10px;
}
</style>