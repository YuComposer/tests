import Vue from "vue";
import App from "./App";
import router from "./router";
import VueRouter from "vue-router";
import store from "./store/index";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
