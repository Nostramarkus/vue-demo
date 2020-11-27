<template>
  <div id="app">
    <lwNavbar/>
    <router-view/>
  </div>
</template>

<script>
import lwNavbar from "@/components/lwNavbar.vue";

export default {
  components: {
    lwNavbar
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-image: url("https://vueschool.io/articles/wp-content/uploads/2018/01/vuejs-course.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  padding-bottom: 100px;
}
</style>
