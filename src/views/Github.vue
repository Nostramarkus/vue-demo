<template>
  <div class="main">
    <h1>Hoe hedde gij da gedaan?</h1>
    <p>Ben je benieuwd naar hoe deze website is opgezet met Vue? Haal dan gerust de github repo binnen met daarin de broncode van deze website! Volg de stappen hieronder:</p>
    <p class="has-margin-top-50">Clone de repo met git</p>git clone https://github.com/Nostramarkus/vue-demo.git
    <p>Installeer het project met npm</p>npm install
    <p>Start de development server op http://localhost:8080/</p>npm run server
    <div class="has-margin-top-50">
      <b-button
        tag="a"
        href="https://github.com/Nostramarkus/vue-demo"
        target="_blank"
        icon-left="github"
      >Github repo</b-button>
    </div>
    <hr class="has-margin-top-80">

    <p
      class="has-margin-top-80 has-margin-bottom-30"
    >Voor deze website heb ik gebruik gemaakt van de Vue Buefy UI component librabry</p>
    <a href="https://buefy.org/" target="_blank" class="link">
      <img src="https://buefy.org/static/img/buefy.1d65c18.png" alt="Buefy" class="buefy-logo">
    </a>
    <p>
      Meer info op
      <a href="https://buefy.org/" target="_blank" class="link">https://buefy.org/</a>
    </p>
  </div>
</template>
