<template>
<div id="table">
<button type="button"><router-link to="/form">AddTask</router-link></button>
       <tabledata :tableValue='tableValue'></tabledata> 
</div>
</template>
<script>

import TableValue from '../components/tablevalue.vue' 
export default {
    props:['tableValue'],
    
     components:{'tabledata': TableValue,},
   data(){
    return{
     
    }
   } 
}
</script>
<style scoped>
#table{
    text-align:center;
}
button{
    width: 77px;
    height: 40px;
    text-align: center;
    margin: 30px auto;
    border-radius: 24px; 
    background-color:black;
}
button:hover{
    color:black;
    background-color:gray;
}
a{
    text-decoration:none;
    color:white;
}

</style>