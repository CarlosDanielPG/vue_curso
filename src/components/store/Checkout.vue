<template>
  <section>
    <label>Total: ${{ $store.getters.total }}</label>
    <b-table :data="$store.getters.objects" :columns="columns"></b-table>
  </section>
</template>

<script>
export default {
  name: "Checkout",
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
          field: "count",
          label: "Cantidad"
        },
        {
          field: "price",
          label: "Precio",
          centered: true
        }
      ]
    };
  }
};
</script>

<style>
</style>
