<template>
<div id="form">
<h2>data adding form</h2>
    <formdata :tableValue='tableValue'></formdata>
</div>
</template>

<script>

import FormData  from '../components/FormData.vue'
export default {
    props:['tableValue'],
    components:{'formdata':FormData},

    data(){
    return{
   
    }
     
    } 
    
}
</script>
<style scoped>

button{
    width: 77px;
    height: 40px;
    text-align: center;
    margin: 30px auto;
    border-radius: 24px;
}
label{ 
    margin: 10px;
}
input {
  padding: 5px;
  margin: 0px 0 0 50px;
} 
textarea{
     padding: 5px;
  margin: 0px 0 0 50px; 
}

</style>