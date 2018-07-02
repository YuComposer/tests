<template>
    <div class="nav_first">
        my name is nav_first!!!
        <button @click="change">点击</button>
        <div class="block" v-if="isBlock">
          <v-firstTemplate></v-firstTemplate>
        </div>
    </div>
</template>
<script>
import firstTemplate from "@/components/navigationBar/firstTemplate/firstItem.vue";
export default {
  name: "navfirst",
  data() {
    return {
      isBlock: false
    };
  },
  methods: {
    change() {
      this.isBlock = !this.isBlock;
    }
  },
  components: {
    "v-firstTemplate": firstTemplate
  }
};
</script>
<style scope lang="scss">
$back: #ccc;
.block {
  width: 80%;
  height: 400px;
  margin: 0 auto;
  background: #ccc;
}
</style>
