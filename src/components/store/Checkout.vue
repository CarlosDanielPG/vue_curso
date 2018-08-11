<template>
  <section>
    <b-tabs v-model="activeTab" position="is-centered">
        <b-tab-item label="Detalles">
          <label>Detalles de la Orden</label><br><br>
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
                  Total: $ {{ item.count * item.price }}
                </div>
              </div>
            </div>
          </div><br><br>
          <button v-on:click="activeTab = 1" class="button is-info is-outlined" type="button">
            Continue
          </button>
          <div class="content level-right">
              <h1 class="title">Total: ${{ parseFloat($store.getters.total).toFixed(2) }}</h1>
          </div>
        </b-tab-item>

        <b-tab-item disabled label="Añadir Dirección">
          <label>Ingresa la dirección de envío</label><br><br>
          <p v-if="errors.length">
            <b>Corrige los siguientes errores:</b>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </p>
          <form
            id="form-address"
            @submit="validate"
            method="post"
          >
            <div class="columns">
              <div class="column is-four-fifths">
                <b-field label="Calle">
                    <b-input id="calle"
                    v-model="calle"
                    type="text"
                    name="calle">
                    </b-input>
                </b-field>
              </div>
              <div class="column is-one-fifths">
               <b-field label="Numero">
                 <b-input id="numero"
                 v-model="numero"
                 type="text"
                 name="numero">
                 </b-input>
               </b-field>
             </div>
            </div>
            <div class="columns">
              <div class="column is-four-fifths">
                <b-field label="Colonia">
                  <b-input id="colonia"
                  v-model="colonia"
                  type="text"
                  name="colonia">
                  </b-input>
                </b-field>
              </div>
              <div class="column is-one-fifths">
                <b-field label="Código Postal">
                  <b-input id="codigo_postal"
                  v-model="codigo_postal"
                  type="number"
                  name="codigo_postal">
                  </b-input>
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <b-field label="Municipio">
                  <b-input id="municipio"
                  v-model="municipio"
                  type="text"
                  name="municipio">
                  </b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Estado">
                  <b-input id="estado"
                  v-model="estado"
                  type="text"
                  name="estado">
                  </b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Pais">
                  <b-input id="pais"
                  v-model="pais"
                  type="text"
                  name="pais">
                  </b-input>
                </b-field>
              </div>
            </div>

            <b-field label="Notas">
                <b-input maxlength="200" type="textarea"></b-input>
            </b-field>
            <button v-on:click="validate" class="button is-info is-outlined" type="button">
              Agregar Direccion
            </button><br><br><br>
          </form>
          <button v-on:click="activeTab = 0" class="button is-info is-outlined" type="button">
            Previous
          </button>
          <button v-on:click="activeTab = 2" v-bind:disabled="toPayment == false" class="button is-info is-outlined" type="button">
            Continue
          </button>
        </b-tab-item>

        <b-tab-item disabled label="Pago">
            <div class="columns">
              <div class="column">
                <b-field label="Numero de tarjeta">
                  <b-input id="tarjeta"
                  v-model="tarjeta"
                  type="number"
                  name="tarjeta">
                  </b-input>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Vigencia">
                  <b-input id="vigencia"
                  v-model="vigencia"
                  type="text"
                  name="vigencia">
                  </b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="CCV">
                  <b-input id="ccv"
                  v-model="ccv"
                  type="number"
                  name="ccv">
                  </b-input>
                </b-field>
              </div>
            </div>
            <button v-on:click="activeTab = 1" class="button is-info is-outlined" type="button">
              Previous
            </button>
            <button v-on:click="activeTab = 3" class="button is-info is-outlined" type="button">
              Continue
            </button>
        </b-tab-item>

        <b-tab-item disabled label="Finalizar Pedido">
            <h1 class="title">Total: $ {{ parseFloat($store.getters.total).toFixed(2) }}</h1>
            <button v-on:click="activeTab = 2" class="button is-info is-outlined" type="button">
              Previous
            </button>
            <button class="button is-info is-outlined" type="button">
              Pay Order
            </button>
        </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      loading: false,
      activeTab: 0,
      toPayment: false,
      errors: [],
      calle: null,
      numero: null,
      colonia: null,
      codigo_postal: null,
      municipio: null,
      estado: null,
      pais: null,
      tarjeta: null,
      vigencia: null,
      ccv: null
    };
  },
  methods: {
    validate: function(e) {
      if (
        this.calle &&
        this.numero &&
        this.colonia &&
        this.codigo_postal &&
        this.municipio &&
        this.estado &&
        this.pais
      ) {
        this.toPayment = true;
      } else {
        this.toPayment = false;
      }

      this.errors = [];

      if (!this.calle) {
        this.errors.push("Ingresa el nombre de la calle.");
      }
      if (!this.numero) {
        this.errors.push("Ingresa el numero.");
      }
      if (!this.colonia) {
        this.errors.push("Ingresa la colonia.");
      }
      if (!this.codigo_postal) {
        this.errors.push("Ingresa el codigo postal.");
      }
      if (!this.municipio) {
        this.errors.push("Ingresa el municipio.");
      }
      if (!this.estado) {
        this.errors.push("Ingresa el estado.");
      }
      if (!this.pais) {
        this.errors.push("Ingresa el pais.");
      }

      e.preventDefault();
    }
  }
};
</script>

<style>
</style>
