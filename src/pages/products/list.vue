<template>
  <q-page padding>
    <!-- content -->
    <h5>Lista de produtos</h5>

    <q-btn color="primary" to="/products/create">Novo Registro</q-btn>
    <hr>

    <q-table
      title="Products"
      :data="products"
      :columns="columns"
      no-data-label="Nenhum registro"
      rows-per-page-label="Registros por página"
      :pagination-label="paginationLabel"
    >
      <q-tr slot="body" slot-scope="props" :prop="props" @click.native="openProduct(props.row)" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
      </q-tr>

    </q-table>

  </q-page>
</template>

<script>
export default {
  data: () => ({
    columns: [
      {
        name: 'id',
        required: true,
        label: '#',
        align: 'center',
        field: 'id',
        sortable: false
      },{
        name: 'name',
        required: true,
        label: 'Produto',
        align: 'left',
        field: 'name',
        sortable: true
      },{
        name: 'description',
        required: true,
        label: 'Descrição',
        align: 'left',
        field: 'description',
        sortable: true
      },{
        name: 'amount',
        required: true,
        label: 'Vaalor (R$)',
        align: 'right',
        field: 'amount',
        sortable: true
      }
    ]
  }),
  mounted() {
    this.$store.dispatch('products/list');
  },
  methods:{
    paginationLabel(start, end, total) {
      return start + ' até ' + end + ' de ' + total;
    },
    openProduct(data) {
       this.$router.push('/products/' + data.id);
    }
  },
  computed: {
    products() {
      return this.$store.state.products.products
    }
  }
}
</script>

