<template>
<v-card
    class="mx-auto my-8"
    :title="tip.total"
    subtitle="Monto total de las propinas del dia"
  >
    <v-stepper
      v-model="step"
      :items="items"
      show-actions
    >
      <template v-slot:item.1>
        <h3 class="text-h6">Ingrese la cantidad total de propinas del dia </h3>
  
        <br>
        <v-sheet border>
            <v-container fluid>
                <v-row>
                    <v-col cols="4">
                        <v-list-subheader>Infrese el monto total</v-list-subheader>
                    </v-col>

                    <v-col cols="8">
                        <v-text-field
                        label="Amount"
                        v-model="tip.total"
                        prefix="$"
                        type="number"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-list-subheader>La propina se va a dividir en varias personas</v-list-subheader>
                    </v-col>

                    <v-col cols="8">
                        <v-switch
                            v-model="tip.isSplit"
                            label="orange-darken-3"
                            color="orange-darken-3"
                            hide-details
                        ></v-switch>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
      </template>
  
      <template v-slot:item.2>
        <h3 class="text-h6">Seleccione el numero de personas </h3>

        <br>
  
        <v-sheet border>
            <v-container fluid>
                <div v-if="tip.isSplit">
                    <v-row>
                    <v-col cols="4">
                        <v-list-subheader>Ingrese el numero de personas </v-list-subheader>
                    </v-col>

                    <v-col cols="8">
                        <v-text-field
                        label="Amount"
                        v-model="tip.num_personas"
                        prefix="$"
                        type="number"
                        ></v-text-field>
                    </v-col>
                </v-row>
    
                </div>
                <div v-else> 
                    <v-row>
                        <v-col cols="4">
                            <v-list-subheader>El monto total a pagar es de : {{ tip.total }}</v-list-subheader>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </v-sheet>

      </template>
  
      <template v-slot:item.3>
        <h3 class="text-h6">Confirm</h3>
  
        <br>
  
        <v-sheet border>
                <v-container fluid>
                    <p>Seleccione el tipo de pago </p>
                    <v-radio-group v-model="tip.payment_method">
                    <v-radio label="Pago en efectivo" value="EFECTIVO"></v-radio>
                    <v-radio label="Pago con tarjeta BBVA" value="BBVA"></v-radio>
                    <v-radio label="Pago con tarjeta Santander" value="SANTANDER"></v-radio>
                </v-radio-group>
                <v-sheet
    class="position-relative"
    min-height="450"
  >
    <div class="position-absolute d-flex align-center justify-center w-100 h-100">
      <v-btn
        size="x-large"
        color="deep-purple-darken-2"
        @click="sendTip"
      >
        realizar pago
      </v-btn>
    </div>

    <v-fade-transition hide-on-leave>
      <v-card
        v-if="dialog"
        append-icon="$close"
        class="mx-auto"
        elevation="16"
        max-width="500"
        title="Pago enviado"
      >
        <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="goToAllTips"></v-btn>
        </template>

        <v-divider></v-divider>

        <div class="py-12 text-center">
          <v-icon
            class="mb-6"
            color="success"
            icon="mdi-check-circle-outline"
            size="128"
          ></v-icon>

          <div class="text-h4 font-weight-bold">El pago de las propinas fue realizado</div>
          <p>
            Se repartio : {{ tip.total }}
          </p>
          <p>
            entre : {{ tip.num_personas }}
          </p>
          <p>a cada una le toco : {{ tip.pago_por_persona }} </p>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            rounded
            variant="outlined"
            @click="goToAllTips"
          >
            Cerrar
          </v-btn>
        </div>
      </v-card>
    </v-fade-transition>
  </v-sheet>
            </v-container>
        </v-sheet>
      </template>
    </v-stepper>
    <pre>
         <h1> {{ subtotal }}</h1>
        {{ tip }}
    </pre>
</v-card>
  </template>
  <script>
  import axios from "axios";
    export default {
      data: () => ({
        shipping: 0,
        step: 1,
        result: null,
        dialog: false,
        tip: {
            id: null,
            fecha: null,
            isSplit: false,
            total: 0,
            num_personas: 1,
            pago_por_persona: 0,
            payment_method: null,
        },
        items: [
          'Ingresar el monto total de las propinas del dia',
          'Seleccionar el numero de personas a repartir',
          'Pagar propinas',
        ],
        products: [
          {
            name: 'Product 1',
            price: 10,
            quantity: 2,
          },
          {
            name: 'Product 2',
            price: 15,
            quantity: 10,
          },
        ],
      }),
      methods : {
        getTips() {
            axios.get("http://localhost:3100/tasks").then((result) => {
                console.log(result.data);
                this.result = result.data
            });
        },
        sendTip() {
            this.dialog = true

            this.tip.pago_por_persona = this.subtotal
            
            const newtip = {
                ...this.tip
            }

            axios.post("http://localhost:3100/tips", newtip).then((result) => {
                console.log(result);
            });
            
        },
        goToAllTips() {
            this.$router.push('/');
        }
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