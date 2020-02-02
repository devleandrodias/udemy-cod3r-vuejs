<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>
      Meu nome é
      <strong>{{nome}}</strong>
      e tenho idade de
      <strong>{{idade}}</strong>
      anos
    </p>
    <button @click="alterarNome">Alterar</button>
    <hr />
    <div class="componentes">
      <app-usuario-info
        :nome="nome"
        :reiniciarFn="reiniciarNome"
        :idade="idade"
        @nomeMudou="nome = $event.nomeNovo"
      />
      <!-- @idadeMudou="idade = $event" -->
      <app-usuario-editar :idade="idade" />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  data() {
    return {
      nome: "pedro",
      idade: 20
    };
  },
  components: { AppUsuarioInfo, AppUsuarioEditar },
  methods: {
    alterarNome() {
      this.nome = "ana";
    },
    reiniciarNome() {
      this.nome = "Pedro";
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
