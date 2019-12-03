<template>
  <div id="app">
    <img class="vue-logo" src="./assets/logo.png">
    <cl-upload />
  </div>
</template>

<script>
import CloudinaryUpload from "./components/CloudinaryUpload";

export default {
  name: "App",
  components: {
    "cl-upload":CloudinaryUpload
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.vue-logo {
  width: 50px;
  height: auto;
}
</style>
