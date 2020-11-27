<template>
  <div class="main">
    <h1>Wil jij ook een Vue master worden?</h1>
    <p>Nou dat kan! Meld jezelf dan hieronder aan</p>
    <div class="has-margin-top-50 has-margin-left-145-desktop has-margin-right-145-desktop">
      <p class="text-left">
        <small>Wat is je naam?</small>
      </p>
      <b-input v-validate="'required'" name="Naam" v-model="naam"></b-input>
      <div class="text-left danger">{{ errors.first('Naam') }}</div>
      <p class="text-left has-margin-top-20">
        <small>Wat is je werk e-mail?</small>
      </p>
      <b-input v-validate="'required|email'" name="Werk e-mail" v-model="email"></b-input>
      <div class="text-left danger">{{ errors.first('Werk e-mail') }}</div>
      <p class="text-left has-margin-top-20">
        <small>In welk team zit je?</small>
      </p>
      <b-input v-validate="'required'" name="Team" v-model="team"></b-input>
      <div class="text-left danger">{{ errors.first('Team') }}</div>
      <p class="text-left has-margin-top-20">
        <small>Wat is je functie?</small>
      </p>
      <b-input v-validate="'required'" name="Functie" v-model="functie"></b-input>
      <div class="text-left danger">{{ errors.first('Functie') }}</div>
      <div class="text-right has-margin-top-30">
        <b-button icon-left="send" @click="versturen">Verstuur</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueLeren",
  data() {
    return {
      naam: "",
      email: "",
      team: "",
      functie: ""
    };
  },
  methods: {
    async versturen() {
      const results = Promise.all([
        this.$validator.validate("Naam"),
        this.$validator.validate("Werk e-mail"),
        this.$validator.validate("Team"),
        this.$validator.validate("Functie")
      ]);
      const areValid = (await results).every(isValid => isValid);
      if (areValid) {
        this.axios
          .post("https://www.markvanlit.nl/_api/aanmeldenVue.php", {
            naam: this.naam,
            email: this.email,
            team: this.team,
            functie: this.functie
          })
          .then(response => {
            this.$buefy.dialog.alert(
              "Leuk dat je jezelf hebt aangemeld! Je ontvangt binnenkort een mailtje met verdere stappen"
            );
            this.naam = "";
            this.email = "";
            this.team = "";
            this.functie = "";
            this.$validator.reset();
          });
      }
    }
  }
};
</script>

