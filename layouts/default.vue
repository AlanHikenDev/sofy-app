<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            title="Sofftii"
            subtitle="App para la gestion de tips"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-account-multiple" to="/" title="Todos las propinas" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-credit-card-outline" to="/tips" title="Pago de propinas" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-star" to="/tips/instruccions" title="Instrucciones" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main >
          <slot > </slot>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Code challenge'
    }
  },
  mounted() {
    
  },
  computed: {
      
  },
  methods: {
    
  }
}
</script>
