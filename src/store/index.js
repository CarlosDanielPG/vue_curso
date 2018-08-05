import Vue from "vue";
import Vuex from "vuex";
import services from "./services";

Vue.use(Vuex);

const state = {
  services,
  cart: []
};

const store = new Vuex.Store({
  state,
  getters: {
    objectsInCar: state => {
      return state.cart.length;
    },
    objects: state => {
      return state.cart;
    },
    total: state => {
      return state.cart.reduce((acc, item) => acc + item.price, 0);
    }
  },
  mutations: {
    addToCart(state, item) {
      state.cart.push(item);
    }
  }
});

export default store;
