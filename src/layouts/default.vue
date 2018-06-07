<template>
  <q-layout view="hhh lpr fff">
    <q-layout-header>
      <q-toolbar
        color="blue-grey"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Stock
          <div slot="subtitle">Aplicação de estudos do Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>MENU PRINCIPAL</q-list-header>
        <q-item to="/home">
          <q-item-side icon="home" />
          <q-item-main label="Home" sublabel="Página principal" />
        </q-item>
        <q-item to="/products">
          <q-item-side icon="list" />
          <q-item-main label="Produtos" sublabel="Lista de produtos" />
        </q-item>

      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
