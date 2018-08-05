<template>
  <section>
      <div v-for="item in items">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <router-link :to="{ name: 'Item', params: { id: item.id }}">
                  <p class="title is-4">{{ item.name }}</p>
                </router-link>
                <p class="subtitle is-6">$ {{ item.price }}</p>
              </div>
            </div>
            <div class="content level-left">
              {{ item.details }}
            </div>
          </div>
        </div>
      </div>
    <!--<b-table :data="items" :columns="columns"></b-table>-->
  </section>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      loading: false,
      items: []
    };
  },
  created() {
    let self = this;
    self.getAll();
  },
  methods: {
    getAll() {
      let self = this;
      self.loading = true;
      self.$store.state.services.productsService
        .getAll()
        .then(r => {
          console.log(r.data.items);
          self.loading = false;
          self.items = r.data.items;
        })
        .catch(r => {});
    }
  }
};
</script>
