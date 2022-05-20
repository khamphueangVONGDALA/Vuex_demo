export const mutations = {
  SAVE_DATA(state, item) {
    state.arr.push(item);
  },
  DELETE_DATA(state, item) {
    state.arr = state.arr.filter((i) => i.id !== item);
  },
};

export const actions = {
  savedata({ commit }, item) {
    commit("SAVE_DATA", item);
  },
  delete_data({ commit }, item) {
    commit("DELETE_DATA", item);
  },
};
