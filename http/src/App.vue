<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o nome" />
      </b-form-group>

      <b-form-group label="Email">
        <b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe o email" />
      </b-form-group>
      <hr />
      <b-button @click="salvar" size="lg" variant="outline-success" block>Salvar</b-button>
      <b-button @click="obterUsuarios" size="lg" variant="outline-primary" block>Obter Usuários</b-button>
    </b-card>
    <hr v-show="usuarios.length != []" />
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome:</strong>
        {{usuario.nome}}
        <br />
        <strong>Email:</strong>
        {{usuario.email}}
        <br />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      usuario: {
        nome: "",
        email: ""
      }
    };
  },
  methods: {
    salvar() {
      this.$http.post("usuarios.json", this.usuario);
    },
    obterUsuarios() {
      this.$http.get("usuarios.json").then(res => {
        this.usuarios = res.data;
      });
    }
  }
  // created() {
  //   this.$http
  //     .post("usuarios.json", {
  //       nome: "Maria",
  //       email: "maria_silva@gmail.com"
  //     })
  //     .then(res => console.log(res));
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
