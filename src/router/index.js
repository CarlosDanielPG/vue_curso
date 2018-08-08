import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Index from "@/components/store/Index";
import Item from "@/components/store/Item";
import Cart from "@/components/store/Cart";
import Checkout from "@/components/store/Checkout";

Vue.use(Router);

const routes = [
  { path: "/", name: "Index", component: Index },
  { path: "/Item/:id", name: "Item", component: Item },
  { path: "/Cart", name: "Cart", component: Cart },
  { path: "/Checkout", name: "Checkout", component: Checkout }
];

export default new Router({
  routes,
  mode: "history"
});
