<template>
  <div class="welkom">
    <div class="logo schaduw">
      <img src="@/assets/img/logo.png" alt="Vue js demo">
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "welkom",
  props: {
    msg: String
  }
};
</script>

<style lang="scss">
.welkom {
  text-align: center;
  h1 {
    color: #35495e;
  }
  padding-top: 3rem;
}
.logo {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 8px solid #fff;
  background-color: white;
  margin-bottom: 1.2rem;
  padding-top: 0px;
}
</style>
