import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "./stylesheets/bootstrap_theme.scss";

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
