import Vue from "vue";
import App from "./App.vue";

import component from "./components/CommonComponent.vue";
Vue.component(component.name, component);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
