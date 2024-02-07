<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" to="/tips" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px">
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
        {
          icon: 'mdi-chart-bubble',
          title: 'Clientes',
          to: '/general/clients'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Products',
          to: '/general/products'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Supliers',
          to: '/general/supliers'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Orders',
          to: '/general/orders'
        }
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
