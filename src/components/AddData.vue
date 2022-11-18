<template>
  <div id="Ind_2">
  <button type="button"><router-link to="/">show Task</router-link></button> 
    <div class="task_box">
        <h2>Task</h2>

<!-- create form for add data in array -->

        <form>
        <div class="data_input">
            <label>Task Name:-</label>
            <input type="text" placeholder="enter name" v-model.lazy="blog.title" required/>
        </div>
        <div class="R_buttons">
            <label> priority:-</label><br>
            <input type="radio" id="high" name="priority" value="high" v-model="blog.priority" />
            <label for="high">High</label><br />
            <input type="radio" id="medium" name="priority" value="medium" v-model="blog.priority" />
            <label for="medium">Medium</label><br />
            <input type="radio" id="low" name="priority" value="low" v-model="blog.priority" />
            <label for="low">Low</label>
        </div>    
        </form>
              <button type="button" v-on:click.prevent="addTask()">Add Task</button>            
    </div>
  </div>
</template>

<script>

// import {bus} from '../main'
export default {
  props:['details'],
  data() {
    return {
      id:'',
        blog:{
           id:this.id,
            title:'',
            priority:'',
            status:'undone' 
        }
    };
  },
  methods:{   //call method in parent
      addTask: function() { 
         this.$router.push('/');
        let newTask={
          id:this.blog.id,
          title:this.blog.title,
          priority:this.blog.priority,
          status:this.blog.status
        }
        console.log(newTask)
        this.details.push(newTask);
        this.id++;
        
          //  console.log(task);
    },
  },
};

</script>

<style scoped>
#Ind_2 {
  margin:0 auto;
}
.task_box {
  font-family: sans-serif;
  width: 40%;
  margin: 50px auto;
  border: 1px solid black;
}
.R_buttons {
  display: flex;
    margin: 31px 1px 27px 15px;
}
h2 {
  text-align: center;
}
label {
  font-size: 15px;
  padding: 0 0 0 8px;
}
.data_input{
    margin:10px;
    text-align: left;
}
input{
  padding: 5px;
    margin: 0px 0 0 20px;
}
button{
    width: 84px;
    height: 33px;
    border: 1px solid black;
    background-color: lightgray;
    border-radius: 22px;
  margin: 0px 0px 28px 7px;
}
a{
    text-decoration:none;
    color: black;
}
</style>
