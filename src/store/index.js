import { createStore } from "vuex";

import blogStore from "../store/Blog/index.js";

export default createStore({
  modules: {
    blogStore,
  },
});