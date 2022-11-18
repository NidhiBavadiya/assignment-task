<template>
<div>
  <displatData></displatData>
      <!-- <addData></addData> -->
      <!-- <tableData></tableData> -->
      <!-- <router-view v-bind:addTask="addTask"></router-view> -->
  </div>
</template> 

<script>

import DisplayData from './components/DisplayData.vue'
// import AddData from './components/AddData.vue'
// import DataTable from './components/DataTable.vue'


export default {
  // props:{
  //   addTask:function(){}
  // },
   components:{'displatData':DisplayData,
            // 'tableData':DataTable,
            //  'addData':AddData
              },
    data() {
      return {

        }
      },
    method:{
  
    }
    }

</script>

<style>
/* #app{
       background-color:#daf9f8; 
} */

</style>
