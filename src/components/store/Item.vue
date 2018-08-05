<template>
  <section>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
                <p class="title is-4">{{ item.name }}</p>
              <p class="subtitle is-6">$ {{ item.price }}</p>
            </div>
          </div>
          <div class="content level-left">
            {{ item.details }}
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" v-on:click="addToCart">Add to Cart</a>
        </footer>
      </div>
    <!--<b-table :data="items" :columns="columns"></b-table>-->
  </section>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      loading: false,
      item: ""
    };
  },
  created() {
    let self = this;
    self.getById(this.$route.params.id);
  },
  methods: {
    getById(id) {
      let self = this;
      self.loading = true;
      self.$store.state.services.productsService
        .getAll()
        .then(r => {
          console.log(r.data.items);
          self.loading = false;
          r.data.items.forEach(item => {
            if (item.id == id) {
              console.log(item);
              self.item = item;
            }
          });
        })
        .catch(r => {});
    },
    addToCart: function() {
      let self = this;
      if (self.item != "") {
        self.$store.commit("addToCart", self.item);
        self.$router.replace("/");
      }
    }
  }
};
</script>
