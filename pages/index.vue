<template>
    <div>
        <div class="d-flex align-center flex-column mt-4 mb-4">
            <div class="text-subtitle-2">
                <h1>Historial de pagos </h1>
            </div>

            <v-container>
                <v-row align="center" justify="center">
                <v-col
                    v-for="(tip, i) in tips"
                    :key="i"
                    cols="12"
                > 

      <v-card
        class="mx-auto"
        max-width="400"
        title="Pago de propina"
        :subtitle="'pagado el ' + tip.fecha"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-credit-card" color="primary"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon icon="mdi-check" color="success"></v-icon>
        </template>
        <v-card-text> 
            <v-list lines="one">
                <v-list-item
                    :title="'Total de pago :'"
                    :subtitle="tip.total"
                ></v-list-item>
                <v-list-item
                    :title="'Se dividio :'"
                    :subtitle="tip.isSplit ? 'si': 'no'"
                ></v-list-item>
                <v-list-item
                    :title="'Numero de pesonas'"
                    :subtitle="tip.num_personas"
                ></v-list-item>
                <v-list-item
                    :title="'Pago por persona '"
                    :subtitle="tip.pago_por_persona"
                ></v-list-item>
                <v-list-item
                    :title="'Metodo de pago :'"
                    :subtitle="tip.payment_method"
                ></v-list-item>
            </v-list>
        </v-card-text>
        
      </v-card>
                
                </v-col>
                </v-row>
            </v-container>
            
        </div>
        <!-- <pre>
            {{ tips }}
        </pre> -->
    </div>
</template>
<script>
import axios from "axios";
  export default {
    data: () => ({
      tips: [ ],
    }),
    mounted() {
        this.getTips()
    },
    methods : {
      getTips() {
          axios.get("http://localhost:3100/tips").then((result) => {
              console.log(result.data);
              this.tips = result.data
          });
      },
    },
    computed: {
      subtotal () {
        return this.tip.total / this.tip.num_personas 
      },
      total () {
        return this.subtotal + Number(this.shipping ?? 0)
      },
    },
  }
</script>