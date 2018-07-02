<template>

<div class="navthree">

    <!-- {{msg}} -->
    <ul>
        <li v-for="(item , index) in msg" :key="index" v-show="item.isBlock">
            <p>姓名：{{item.name}}</p>
            <p>年龄：{{item.age}}</p>
            <p>爱好：{{item.hobby}}</p>
            <button @click="changeItem(index)">点击删除</button>
        </li>
    </ul>
</div>
    
</template>
<script>
import store from "@/store/index.js";
export default {
  name: "navthree",
  store,
  data() {
    return {
      msg: this.$store.state.three
    };
  },
  methods: {
    changeItem(index) {
      this.$store.state.three.splice(index, 1);
    }
  }
};
</script>
<style scope>
</style>