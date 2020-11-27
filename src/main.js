import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import nl from 'vee-validate/dist/locale/nl';
import VeeValidate, { Validator } from 'vee-validate';
import 'bulma-helpers/css/bulma-helpers.min.css'
require("@/assets/scss/buefyCustom.scss")
require("@/assets/scss/lwDemo.scss")

Vue.use(Buefy)

Vue.use(VeeValidate);
Validator.localize('nl', nl);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
