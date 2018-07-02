<template>
  <div id="app">
    <ul class="nav-max">
      <li class="nav-item"><router-link to = "/first">first</router-link></li>
      <li class="nav-item"><router-link to = "/two">two</router-link></li>
      <li class="nav-item"><router-link to = "/three">three</router-link></li>
      <li class="nav-item"><router-link to = "/last">Last</router-link></li>
    </ul>
    <div>
      <router-view class="header-view"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav-max {
  width: 100%;
  height: 50px;
  border: 1px solid;
  display: flex;
  flex-wrap: wrap;
}
.nav-max > .nav-item {
  height: 100%;
  text-align: center;
  line-height: 50px;
  flex: 1;
  border-left: 1px solid;
  border-right: 1px solid;
  /* border-color: black; */
}
</style>
