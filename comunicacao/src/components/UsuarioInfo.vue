<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário:
      <strong>{{nome}}</strong>
    </p>
    <p>
      Idade do usuário:
      <strong>{{idade}}</strong>
    </p>
    <p>
      Nome do usuário invertido:
      <strong>{{inverterNome()}}</strong>
    </p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
  </div>
</template>

<!-- Comunicação direta de componentes -->
<script>
import barramento from "@/barramento";

export default {
  //   props: ["nome"],
  props: {
    nome: {
      type: String,
      required: true,
      default: "Anônimo"
    },
    idade: {
      type: Number,
      required: true,
      default: 0
    },
    reiniciarFn: Function
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      const nomeAntigo = this.nome;
      this.nome = "Pedro";
      this.$emit("nomeMudou", {
        nomeNovo: this.nome,
        nomeAntigo
      });
    }
  },
  created() {
    barramento.quandoIdadeMudar(idade => {
      this.idade = idade;
    });
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
