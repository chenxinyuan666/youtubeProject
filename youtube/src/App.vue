<template>
  <div id="app">
    <DefaultBaselineCondition />
    <!-- <Star /> -->
    <!-- <percentage></percentage> -->
  </div>
</template>

<script>
// import Percentage from "./components/percentage.vue";
import DefaultBaselineCondition from "./components/defaultBaselineCondition.vue";
// import Star from "./components/star.vue";
export default {
  name: "App",
  components: {
    DefaultBaselineCondition,
    // Star,
    // Percentage,
  },
};
</script>

<style>
#app {
}
</style>
