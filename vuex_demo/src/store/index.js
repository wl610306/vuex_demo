import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation_type'
import about from './about'
import pub from './pubPage'
Vue.use(Vuex)

const store = {
  // namespaced: true,
  state: {
    name: 'index',
    count:0,
    todos: [

      {id: 1, done: true, text: '我是码农'},
     
      {id: 2, done: false, text: '我是码农202号'},
     
      {id: 3, done: true, text: '我是码农202号'}
     
      ],
      // obj: 0
  },
  mutations: {
    [mutations.INDEX_MUTATION](state,params){
      state.name = state.name + params.value;
      state.count += params.n
      state.obj = { ...state.obj, newProp: 123 }
    },
    // [mutations.ABOUT_MUTATION](state,params){
    //   state.name = state.name + '-' + params.value;
    //   state.count += params.n
    // }
  },
  getters:{
    [mutations.INDEX_GETTERS] (state,getters,rootState) {
      return state.todos.filter(item => item.done === true)
    }
   },
  actions: {
   [mutations.INDEX_ACTIONS](context,params){
     context.commit(mutations.INDEX_MUTATION, params)
    },
  //   [mutations.ABOUT_ACTIONS](context,params){
  //      context.commit(mutations.ABOUT_MUTATION,params)
  //   },
    // async [mutations.ABOUT_ACTIONS](context,params){
    //    await context.dispatch(mutations.PUB_ACTIONS,params)
    //    context.commit(mutations.ABOUT_MUTATION,params)
    // },
    // [mutations.PUB_ACTIONS](context,params){
    //  context.commit(mutations.PUB_ACTIONS,params)
    // },
    // [mutations.ABOUT_MUTATION](context,params){
    //  return context.dispatch(mutations.PUB_ACTIONS,params).then(() => {
    //    context.commit(mutations.ABOUT_MUTATION,params)
    //  }) 
    // },
  },
  modules: {
    about,
    pub
  }
}
const newVuex = new Vuex.Store(store)

export default newVuex
