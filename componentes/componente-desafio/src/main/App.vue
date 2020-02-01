<template>
  <v-app>
    <Menu />
    <app-toolbar />
    <app-carousel />
    <app-footer />
  </v-app>
</template>
<!-- @ parte do src -->
<script>
import Footer from "@/components/template/Footer";
import Carousel from "@/components/widgets/Carousel";
import Toolbar from "@/components/template/Toolbar";
import Menu from "@/components/template/Menu";
// Padrão nomenclatura de components
export default {
  components: {
    appFooter: Footer,
    "app-carousel": Carousel,
    appToolbar: Toolbar,
    Menu
  }
};
</script>
