<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{22462426835 | cpf }} - Padrão</p>
    <p>{{cpf | cpf | inverter}} - Invertido</p>
    <input type="text" :value="cpf | cpf" />
    <hr />
    <app-frutas />
    <hr />
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add" />
    </div>
  </div>
</template>

<script>
import AppFrutas from "./Frutas";
import frutasMixin from "./frutas.mixins";

// Mixins - Mistura
// Caso você use o mesmo nome do método, o do componente eh usado
export default {
  components: {
    AppFrutas
  },
  mixins: [frutasMixin],
  filters: {
    cpf(valor) {
      const array = `${valor}`.split("");
      array.splice(3, 0, ".");
      array.splice(7, 0, ".");
      array.splice(11, 0, "-");
      return array.join("");
    }
  },
  data() {
    return {
      cpf: "25632247334",
      frutas: ["Abacate"]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 1em;
}
</style>
