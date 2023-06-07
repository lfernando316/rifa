<template>
  <div class="flex column justify-center q-pa-xs text-primary">
    <h1 class="text-h2 text-center q-mb-xs">GRAN SORTEO DGi</h1>
    <h2 class="text-h3 text-center q-my-xs">Participa en el sorteo de:</h2>
    <strong class="text-h3 text-center q-my-xs text-weight-bold"
      >una licuadora</strong
    >
  </div>
  <div class="flex justify-end q-pr-lg">
    <q-btn round color="secondary" icon="person" @click="abrirModal" />
  </div>
  <div class="row container">
    <div class="q-pa-xs" v-for="i in participantes">
      <button class="card shadow" @click="registrar">
        <strong>Nombre: </strong>
        <label> {{ i.nombre }}</label>
        <br />
        <strong class="line">Número: </strong>
        <br />
        <label class="text-h2">{{ i.numero }}</label>
      </button>
    </div>
  </div>
  <!-- <administrador /> -->
  <modal :fixed="true" />
  <!-- :registrar="registrar" -->
</template>

<script>
// import administrador from "./administrador.vue";
import { ref } from "vue";
import modal from "./modal.vue";

export default {
  components: {
    // administrador,
    modal,
  },
  data() {
    return {
      nombre: null,
      numero: 8,
      estado: false,
      participantes: [],
      fixed: null,
      //   registrar: null,
    };
  },
  methods: {
    generarTarj() {
      console.log("hola");

      for (let i = 1; i <= this.numero; i++) {
        this.participantes.push({
          numero: i,
          nombre: "Disponible usuario",
          estado: false,
        });
      }
    },
    abrirModal() {},
    registrar() {
      console.log("hola");
      //   const registrar = ref("");
      //   const participante = (cam) => {
      this.fixed = true;
      //   };
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
    },
  },

  created() {
    this.generarTarj();
  },
};
</script>

<style>
.container {
  border-style: solid;
  padding: 5px;
  margin: 10px;
}

.card {
  width: 150px;
  height: 200px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.shadow {
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.line {
  list-style: armenian;
  border-top: 5px;
}
</style>
