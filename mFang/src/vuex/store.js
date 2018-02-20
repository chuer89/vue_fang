import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todos: 'vuex store data',

  tabbarPathName: 'home'
};

const mutations = {
  addTodo (state, todo) {
    state.todos.push(todo);
  },

  changeTabbarPathName (state, pathName) {
    state.tabbarPathName = pathName;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
