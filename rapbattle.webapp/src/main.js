import Vue from "vue";
import firebase from "firebase";

import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

let app = '';

const config = {
  //Config here
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
