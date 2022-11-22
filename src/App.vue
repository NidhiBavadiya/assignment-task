<template>
  <div>
    <router-view :details="details"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      details: [
        { id: 1, title: "learn java", priority: "low", status: "Done" },
        { id: 2, title: "vuejs", priority: "high", status: "Undone" },
        { id: 3, title: "gift", priority: "medium", status: "Done" },
        { id: 4, title: "practical", priority: "medium", status: "Undone" },
      ],
    };
  },
};
</script>
