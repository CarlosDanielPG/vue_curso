// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Buefy from "buefy";
import "buefy/lib/buefy.css";
import store from "./store/index";
import CardValidator from "card-validator";

Vue.use(Buefy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  components: { App },
  template: "<App/>"
});
