import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation_type'
Vue.use(Vuex)

const store = {
  // namespaced: true,
  state: {
    name: 'about',
    count:0,
    todos: [

      {id: 1, done: true, text: '我是码农_about'},
     
      {id: 2, done: false, text: '我是码农202号_about'},
     
      {id: 3, done: true, text: '我是码农202号_about'}
     
      ],
      // obj: 0
  },
  mutations: {
    [mutations.ABOUT_MUTATION](state,params){
      state.name = state.name + params.value;
      state.count += params.n
      state.obj = { ...state.obj, newProp: 123 }
      // state.obj = { newProp: 123 }
    },
  },
  getters:{
    [mutations.ABOUT_GETTERS] (state) {
      return state.todos.filter(item => item.done === true)
    }
   },
  actions: {
   [mutations.ABOUT_ACTIONS](context,params){
     context.commit(mutations.ABOUT_MUTATION, params)
    },
    // async [mutations.ABOUT_ACTIONS](context,params){
    //    await context.dispatch(mutations.ABOUT_ACTIONS,params)
    //    context.commit(mutations.ABOUT_MUTATION,params)
    // },
    // [mutations.ABOUT_ACTIONS](context,params){
    //  context.commit(mutations.ABOUT_ACTIONS,params)
    // },
    // [mutations.ABOUT_MUTATION](context,params){
    //  return context.dispatch(mutations.ABOUT_ACTIONS,params).then(() => {
    //    context.commit(mutations.ABOUT_MUTATION,params)
    //  }) 
    // },
  },
  modules: {
  }
}
// const newVuex = new Vuex.Store(store)

export default store
