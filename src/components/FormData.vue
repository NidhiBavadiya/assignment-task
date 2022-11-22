<template>
<div id="form">
<div class="container">
<div class="row">
<div class=" col-lg-6 col-md-6 col-sm-6 col-6">
      <form>
        <label for="id"> id :-</label><br>
        <input type="number" name="id" value="" v-model.lazy="textvalue.id"><br>

        <label class="lable d-flex" for="title">title :-</label>
        <textarea rows="" cols="" v-model="textvalue.title"></textarea><br>

        <label for="body" >body :-</label>
        <textarea rows="" cols="" v-model="textvalue.body"></textarea><br>

        <button type="button" v-on:click.prevent="adddata()">Add data</button>
    </form>  
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props:['tableValue'],
    data(){
    return{
    textvalue:{ 
         id:"5",
         title:"",
         body:""
        }
    }
     
    }, 
methods:{
    adddata:function(){
        var addtask={
            id:this.textvalue.id,
            title:this.textvalue.title,
            body:this.textvalue.body,
        };
        console.log(addtask);
        this.tableValue.push(addtask);
        this.$router.push('/table')
        this.id++;   
    },
}
    
}
</script>
<style scoped>
form{

}
button{
    width: 77px;
    height: 40px;
    text-align: center;
    margin: 30px auto;
    border-radius: 24px;
    color:white;
    background-color:black;
}
button:hover{
    
    background-color:gray;
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