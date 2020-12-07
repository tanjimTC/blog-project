import Vue from "vue";
import App from "./App.vue";
// import Axios from "axios";

Vue.config.productionTip = false;

// filtes
Vue.filter("to-uppercase", (value) => {
  return value.toUpperCase();
});

Vue.filter("snippet", (value) => {
  return value.slice(0, 100) + "...";
});

Vue.directive("rainbow", {
  bind(el) {
    el.style.color =
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8);
  },
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
