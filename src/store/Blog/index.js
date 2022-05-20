import { state, getters } from "./State_Get.js";
import { actions, mutations } from "./Mutate_Action.js";

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
