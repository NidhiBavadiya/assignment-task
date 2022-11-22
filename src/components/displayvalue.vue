<template>
  <div id="Ind_1">
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["details"],
  data() {
    return {
      title: "Todo List",
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
</style>
