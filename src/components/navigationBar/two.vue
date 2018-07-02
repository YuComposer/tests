<template>
    <div class="navtwo">
        my name is nav_two!!!
        <ul>
            <li v-for = "(item , index) in list" :key="index">
                {{item}}
            </li>
        </ul>

    </div>
</template>
<script>
import Store from "@/store/index.js";
export default {
  name: "navtwo",
  Store,
  data() {
    return {
      list: this.$store.state.two
    };
  }
};
</script>
<style scoped>
ul {
  width: 300px;
  height: auto;
  margin: 0 auto;
}
ul > li {
  width: 100%;
  height: 100px;
  background: yellowgreen;
  text-align: center;
  line-height: 100px;
  margin: 10px;
  font-size: 30px;
}
</style>