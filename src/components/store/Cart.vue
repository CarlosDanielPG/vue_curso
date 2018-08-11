<template>
  <section>
    <label>Total: ${{ parseFloat($store.getters.total).toFixed(2) }}</label><br><br>
    <div v-for="item in $store.getters.objects">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ item.name }}</p>
              <p class="subtitle is-6">Unit cost: $ {{ item.price }}</p>
            </div>
          </div>
          <div class="content level-left">
            Cant: {{ item.count }}
          </div>
          <div class="content level-left">
            Total: $ {{ parseFloat(item.count * item.price).toFixed(2) }}
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" v-on:click="deleteItem(item.id)">Delete</a>
        </footer>
      </div>
    </div><br><br>

    <button v-if="$store.getters.objectsInCar > 0" class="button is-info is-outlined" type="button">
      <b-icon icon="currency-usd"></b-icon>
      <router-link to="/Checkout">
        Checkout
      </router-link>
    </button>
  </section>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      loading: false
    };
  },
  created() {
    let self = this;
  },
  methods: {
    deleteItem: function(id) {
      let self = this;
      self.$store.commit("deleteToCart", id);
    }
  }
};
</script>
