<template>
  <div class="main">
    <h1>Gebruiksvriendelijke plugins</h1>
    <div class="has-margin-left-145-desktop has-margin-right-145-desktop">
      <p class="has-margin-top-60 text-left">
        File upload
        <a
          href="https://rowanwins.github.io/vue-dropzone/docs/dist/#/installation"
          target="_blank"
          class="link"
        >Vue dropzone</a>
      </p>
      <vue-dropzone
        id="dropzone"
        :options="dropzoneOptions"
        :use-custom-slot="true"
      >Drop hier je bestanden of klik hier</vue-dropzone>
      <p class="has-margin-top-50 text-left">
        Validatie met
        <a
          href="https://vee-validate.logaretm.com/v2/guide/rules.html#after"
          target="_blank"
          class="link"
        >Vee validate</a>
      </p>
      <b-input v-validate="'required|email'" name="E-mail" placeholder="Voer een e-mail adres in"></b-input>
      <div class="text-left danger">{{ errors.first('E-mail') }}</div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "Plugins",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        addRemoveLinks: true
      }
    };
  }
};
</script>