<template>
  <!-- title component display for  title and task button -->
  <div id="Ind_1">
    <h1>{{ title }}</h1>
    <button type="button"><router-link to="/">show Task</router-link></button>
    <addData :details="details"></addData>
  </div>
</template>
<script>
import AddData from "../components/AddDataform.vue";

export default {
  props: ["details", "id"],

  components: { addData: AddData },

  data() {
    return {
      title: "Todo List",
      detail: {},
    };
  },
};
</script>

<style scoped>
#Ind_1 {
  width: 100%;
  text-align: center;
}
.data_table {
  margin: 100px 0 0 0;
}
ul {
  list-style: none;
}
h1 {
  text-align: center;
}
a {
  text-decoration: none;
  color: black;
}
button {
  width: 84px;
  height: 33px;
  border: 1px solid black;
  background-color: lightgray;
  border-radius: 22px;
  margin: 0px 0px 28px 7px;
}
</style>
