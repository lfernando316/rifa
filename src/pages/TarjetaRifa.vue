<template>
  <q-page padding>
    <h1>Hola Rifa</h1>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form class="q-gutter-md">
        <q-input
          filled
          v-model="nombre"
          label="Nombre participante *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Escribe tu nombre']"
        />

        <q-input
          filled
          type="number"
          v-model="numero"
          label="Escribe un numero *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Escribe un numero',
          ]"
        />

        <q-toggle v-model="pago" label="Puesto cancelado" />

        <div>
          <q-btn
            label="Guardar"
            type="submit"
            color="primary"
            @click="submit"
          />
        </div>
      </q-form>
    </div>
    <q-btn label="generar tarjeta" color="primary" @click="sumnumeros" />
    <q-input
      filled
      type="number"
      v-model="numeros"
      label="Escribe un numero *"
      lazy-rules
      :rules="[
        (val) => (val !== null && val !== '') || 'Please type your age',
        (val) => (val > 0 && val < 100) || 'Escribe un numero',
      ]"
    />
    <div class="q-pa-md">
      <q-table
        grid
        flat
        bordered
        :card-container-class="cardContainerClass"
        :rows="participantes"
        :columns="columns"
        row-key="nombre"
        :filter="filter"
        hide-header
      >
        <!-- v-model:pagination="pagination"
        :rows-per-page-options="rowsPerPageOptions" -->
        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
            <q-card flat bordered>
              <q-card-section class="text-center">
                Nombre participante:
                <br />
                <strong>{{ props.row.nombre }}</strong>
                <br />
                <p>
                  Cancelado :
                  {{ props.row.pago }}
                </p>
              </q-card-section>
              <q-separator />
              <q-card-section
                class="flex flex-center"
                :style="{ fontSize: props.row.calories / 2 + 'px' }"
              >
                <div>{{ props.row.numero }} g</div>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
  <q-dialog
    v-model="persistent"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="bg-teal text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">EL numero no esta Disponible</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> Elige otro numero </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="OK" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { useQuasar } from "quasar";
import { ref, computed, watch } from "vue";

export default {
  data() {
    return {
      persistent: ref(false),
      nombre: null,
      numero: null,
      pago: false,
      participantes: [],
      numeros: null,
      columns: [
        { name: "nombre", label: "nombre", field: "nombre" },
        { name: "calories", label: "Numero rifa", field: "calories" },
      ],
    };
  },
  methods: {
    sumnumeros() {
      console.log("hola");

      for (let i = 1; i <= this.numeros; i++) {
        {
          this.participantes.push({
            numero: i,
            nombre: null,
            pago: false,
            estado: 0,
          });
        }
      }
    },

    submit() {
      console.log("guardando");
      console.log(this.nombre);

      const result = this.participantes.filter(
        (part) => part["numero"] == this.numero
      );
      console.log(result);
      console.log(result[0].estado);

      if (result[0].estado == 0) {
        result[0].nombre = this.nombre;
        result[0].pago = this.pago;
        result[0].estado = 1;
      } else {
        this.persistent = true;
        // alert("no esta disponible, elige otro número");
        // console.log("no esta disponible");
      }
      console.log(this.participantes);

      //   const participante = {
      //     nombre: this.nombre,
      //     numero: this.numero,
      //     pago: this.pago,
      //   };
      //   this.participantes.push(participante);
      //   console.log(this.participantes);
    },
  },
  //   created: {
  //     this.numeros()
  //   }
};
</script>

<style lang="sass">
.grid-masonry
  flex-direction: column
  height: 700px

  &--2
    > div
      &:nth-child(2n + 1)
        order: 1
      &:nth-child(2n)
        order: 2

    &:before
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3
    > div
      &:nth-child(3n + 1)
        order: 1
      &:nth-child(3n + 2)
        order: 2
      &:nth-child(3n)
        order: 3

    &:before,
    &:after
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 2
</style>
