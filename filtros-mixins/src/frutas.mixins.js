export default {
  data() {
    return {
      fruta: "",
      frutas: ["Morango", "Banana", "Caju", "Pêra"]
    };
  },
  methods: {
    add() {
      this.frutas.push(this.fruta);
      this.fruta = "";
    }
  }
}