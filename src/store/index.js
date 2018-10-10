import Vue from "vue";
import Vuex from "Vuex";
import hello from "./modules/hello";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    hello
  }
});
