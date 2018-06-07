<template>
  <q-page padding>
    <!-- content -->
    <h5>Criar Produto</h5>

    <form>
      <q-field label="Produto">
        <q-input v-model="data.name"></q-input>
      </q-field>

      <q-field label="Descrição">
        <q-input
          v-model="data.description"
          type="textarea"
        />
      </q-field>

      <q-field label="Valor">
        <q-input type="number" v-model="data.amount"></q-input>
      </q-field>
      <q-btn color="primary" @click="save()">Salvar</q-btn>
    </form>

  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: { }
    }
  },
  methods:{
    save() {
      axios.post('http://localhost:8000/api/products',this.data)
        .then(() => {
          this.$router.push('/products')
        })
    }
  }
}
</script>

<style>
</style>
