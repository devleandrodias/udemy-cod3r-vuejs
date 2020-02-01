<template>
  <div id="contador">
    <span>{{contador}}</span>
    <button @click="subtrair">-</button>
    <button @click="adicionar">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    subtrair() {
      this.contador > 0 ? this.contador-- : 0;
    }
  }
};
</script>

  <!--Os escopos dos componentes pais não passam para os filhos,indiretos apenas diretos-->

<style scoped>
#contador span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}

#contador button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: coral;
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>