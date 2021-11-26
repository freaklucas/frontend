export default {
  data() {
    return {
      fruta: "",
      frutas: ["banana", "maçã", "laranja"],
    };
  },
  methods: {
    addElementosLista() {
      this.frutas.push(this.fruta);
      this.fruta = "";
    },
  },
};
