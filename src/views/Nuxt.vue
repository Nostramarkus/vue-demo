<template>
  <div class="main">
    <lwNuxt/>
    <h1>Are you Nuxt?</h1>
    <b-carousel
      class="has-margin-top-40"
      animated="slide"
      :autoplay="true"
      :pause-hover="false"
      :interval="5000"
      :repeat="true"
      :indicator="false"
    >
      <b-carousel-item v-for="(carousel, index) in carousels" :key="index">
        <h2 class="groen">{{carousel.tekst}}</h2>
      </b-carousel-item>
    </b-carousel>
    <a href="https://nuxtjs.org/" target="_blank" class="link bold">www.nuxtjs.org</a>
  </div>
</template>

<script>
import lwNuxt from "@/components/lwNuxt.vue";

export default {
  name: "Home",
  components: {
    lwNuxt
  },
  data() {
    return {
      carousels: [
        { tekst: "SEO oplossingen voor Vue" },
        { tekst: "Server Side Rendering" },
        { tekst: "Automatisch routes gereneren" },
        { tekst: "Automatisch code splitting" },
        { tekst: "Georganiseerde project stuctuur" }
      ]
    };
  }
};
</script>