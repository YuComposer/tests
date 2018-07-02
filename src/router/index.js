import Vue from "vue";
import Router from "vue-router";
import First from "@/components/navigationBar/first.vue";
import Two from "@/components/navigationBar/two.vue";
import Three from "@/components/navigationBar/three.vue";
import Last from "@/components/navigationBar/last.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "navfirst",
    component: First
  },
  {
    path: "/first",
    name: "navfirst",
    component: First
  },
  {
    path: "/two",
    name: "navtwo",
    component: Two
  },
  {
    path: "/three",
    name: "navthree",
    component: Three
  },
  {
    path: "/last",
    name: "navlast",
    component: Last
  }
];

export default new Router({
  routes
});
