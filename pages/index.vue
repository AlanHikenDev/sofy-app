<template>
    <div>
        <div class="d-flex align-center flex-column">
            <div class="text-subtitle-2">
                <h1>Todos los pagos de propinas </h1>
            </div>

            <v-container>
                <v-row align="center" justify="center">
                <v-col
                    v-for="(tip, i) in tips"
                    :key="i"
                    cols="12"
                > 
                <v-card
                    color="orange"
                    theme="dark"
                    width="400"
                    :title="'Pago de propina ' + tip.id"
                    class="text-white"
                    >

                    <v-card-item>
                        <div class="text-overline mb-1">
                           <h1>
                            Monto total:
                           </h1>
                           {{ tip.total }}
                        </div>
                    
                        <div class="text-overline mb-1">
                            <strong>se dividio en muchas personas: </strong> {{ tip.isSplit ? 'si': 'no' }}
                        </div>
                   
                        <div class="text-overline mb-1">
                            <strong>Pago por persona: </strong>  {{ tip.pago_por_persona }}
                        </div>
                    </v-card-item>
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