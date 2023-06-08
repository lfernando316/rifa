<template>
  <div class="flex column justify-center q-pa-xs text-primary">
    <h1 class="text-h2 text-center q-mb-xs gradientext">GRAN SORTEO DGi</h1>
    <h2 class="text-h3 text-center q-my-xs">Participa en el sorteo de:</h2>
    <strong class="text-h3 text-center q-my-xs text-weight-bold gradientext"
      >una licuadora</strong
    >
  </div>
  <div class="flex justify-end q-pr-lg">
    <q-btn round color="secondary" icon="person" @click="abrirModal" />
  </div>
  <div class="row container">
    <!-- <div class="q-pa-xs" v-for="i in participantes">
      <button class="card shadow" @click="registrar">
        <strong>Nombre: </strong>
        <label> {{ i.nombre }}</label>
        <br />
        <strong class="line">Número: </strong>
        <br />
        <label class="text-h2">{{ i.numero }}</label>
      </button>
    </div> -->

    <div class="ticket" v-for="i in participantes" @click="registrar">
      <div class="ticket__content column justify-end items-center">
        <!-- <strong>Nombre: </strong>
        <label> {{ i.nombre }}</label>
        <br /> -->
        <strong class="ticket__text2">Ticket: </strong>
        <!-- <br /> -->
        <label class="ticket__text">{{ i.numero }}</label>
      </div>
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
      numero: 50,
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

<!-- <style>
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
</style> -->

<style lang="scss">
body {
  background: rgb(231, 227, 227);
  background: radial-gradient(
    circle,
    rgba(231, 227, 227, 0) 0%,
    rgba(198, 212, 228, 0.10968137254901966) 100%
  );
}

.gradientext {
  background: #49a8db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #49a8db,
    #092036
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #49a8db,
    #092036
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 400;
}

.container {
  padding: 5px;
  margin: 10px;
}

.ticket:hover {
  transform: scale(1.05);
  filter: brightness(1);
  transition: transform 100ms ease;
}

.ticket {
  position: relative;
  box-sizing: border-box;
  width: 100px;
  height: 150px;
  margin: 10px 5px;
  padding: 10px;
  border-radius: 5px;
  background: #fbfbfb;
  box-shadow: 1px 1px 5px 0px #69b6e0;
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 1px;
    height: 6px;
    width: 95px;
  }

  &:before {
    top: -5px;
    background: radial-gradient(
        circle,
        transparent,
        transparent 50%,
        #fbfbfb 50%,
        #fbfbfb 100%
      ) -7px -8px / 16px 16px repeat-x;
  }

  &:after {
    bottom: -5px;
    background: radial-gradient(
        circle,
        transparent,
        transparent 50%,
        #fbfbfb 50%,
        #fbfbfb 100%
      ) -7px -2px / 16px 16px repeat-x;
  }
}

.ticket__content {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: 2px solid #d8d8d8;
}

.ticket__text2 {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #49a8db;
}
.ticket__text {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 3.5rem;
  font-weight: 300;
  color: #1d4f7e;
}
</style>
