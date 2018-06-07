<template>
  <q-page padding>
    <!-- content -->
    <h5>Detalhes do  Produto</h5>

    <q-card>
      <q-card-title>
        {{ product.name }} - R$ {{ product.amount }}
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        {{ product.description }}
      </q-card-main>

    </q-card>

    <hr>

    <q-btn color="red" @click="deleteConfirm = !deleteConfirm">Remover</q-btn>
    <q-btn color="primary" to="/products">Voltar</q-btn>

    <q-modal content-css="padding: 30px" v-model="deleteConfirm">
      <h5>Tem certeza que deseja remover?</h5>
      <q-btn color="red" @click="remove()">SIM</q-btn>
      <q-btn color="grey" @click="deleteConfirm = false">Não</q-btn>
    </q-modal>

  </q-page>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      deleteConfirm: false,
      product: {}
    }
  },

  methods: {
    remove() {
      axios.delete('http://localhost:8000/api/products/' + this.$route.params.id)
        .then( (response) => {
            this.$router.push('/products')
        })
    }
  },

  mounted() {
    axios.get('http://localhost:8000/api/products/' + this.$route.params.id)
      .then((response) => this.product = response.data.data)
  }
}
</script>

<style>
</style>
