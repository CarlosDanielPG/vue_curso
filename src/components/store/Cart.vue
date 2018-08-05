<template>
  <section>
    <label>Total: ${{ $store.getters.total }}</label>
    <b-table :data="$store.getters.objects" :columns="columns"></b-table>
  </section>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      loading: false,
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "name",
          label: "Producto"
        },
        {
          field: "details",
          label: "Descripcion"
        },
        {
          field: "price",
          label: "Precio",
          centered: true
        }
      ]
    };
  },
  created() {
    let self = this;
  }
};
</script>
