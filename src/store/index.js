import Vue from "vue";
import Vuex from "vuex";
import services from "./services";
import VueLocalStorage from "vue-localstorage";

Vue.use(Vuex);
Vue.use(VueLocalStorage);

const state = {
  services,
  cart: []
};

const store = new Vuex.Store({
  state,
  getters: {
    objectsInCar: state => {
      return state.cart.reduce((acc, item) => acc + item.count, 0);
    },
    objects: state => {
      return state.cart;
    },
    total: state => {
      return state.cart.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    exist: state => id => {
      var count = 0;
      state.cart.forEach(item => {
        if (item.id === id) {
          console.log(item.count);
          count = item.count;
        }
      });
      return count;
    }
  },
  mutations: {
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart"));
      }
    },
    addToCart(state, item) {
      var found = false;
      state.cart.forEach(i => {
        if (i.id == item.id) {
          console.log("Encontrado");
          found = true;
          item.count = i.count + 1;
          state.cart = state.cart.filter(it => it.id != item.id);
          state.cart.push(item);
        }
      });
      if (!found) {
        item.count = 1;
        state.cart.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteToCart(state, id) {
      state.cart.forEach(item => {
        if (item.id == id) {
          //if (item.count == 1) {
          state.cart = state.cart.filter(i => i.id != id);
          /*} else {
            item.count--;
          }*/
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }
});

export default store;
