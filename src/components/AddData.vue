<template>
  <div id="Ind_2">
    <div class="task_box">
        <h2>Task</h2>

<!-- create form for add data in array -->

        <form>
        <div class="data_input">
            <label>Task Name:-</label>
            <input type="text" placeholder="enter name" v-model="blog.title" required/>
        </div>
        <div class="R_buttons">
            <label> priority:-</label><br>
            <input type="radio" id="high" name="priority" value="high" />
            <label for="high">High</label><br />
            <input type="radio" id="medium" name="priority" value="medium" />
            <label for="medium">Medium</label><br />
            <input type="radio" id="low" name="priority" value="low" />
            <label for="low">Low</label>
        </div>    
        </form>
             <button type="button">add task</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        blog:{
            title:'',
            priority:''
        }
    };
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
  font-size: 12px;
  padding: 0 0 0 8px;
}
.data_input{
    margin:10px;
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
  margin: 0px 0px 28px 11em;
}
</style>
