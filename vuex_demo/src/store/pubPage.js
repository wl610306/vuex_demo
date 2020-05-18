import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation_type'
Vue.use(Vuex)
// 启用空间命名后添加此参数可访问根方法 全局访问
const root = {root: true}
const store = {
  namespaced: true,

  state: {
    name: 'pub',
    count:0,
    todos: [

      {id: 1, done: true, text: '我是码农_pub'},
     
      {id: 2, done: false, text: '我是码农202号_pub'},
     
      {id: 3, done: true, text: '我是码农203号_pub'}
     
      ], 
      // obj: 0
  },
  mutations: {
    [mutations.PUB_MUTATION](state,params,root){
      console.log(state,root)
      // params.rootState.count = 50
      state.name = state.name + 'PUB' + params.value;
      state.count += params.n
      state.obj = { ...state.obj, newProp: 123 }
    },
    // [mutations.ABOUT_MUTATION](state,params){
    //   state.name = state.name + 'PUB' + params.value;
    //   state.count += params.n
    // }
  },
  getters:{
    [mutations.PUB_GETTERS] (state,getters,rootState) {
      return state.todos.filter(item => item.done === true)
    }   
   },
  actions: {
    // 启用空间命名 此方法注册为全局方法
    // [mutations.PUB_ACTIONS]:{
    //   root: true,
    //   async handler(context,params){
    // //  params.rootState = context.rootState
    //   // context.dispatch(mutations.INDEX_ACTIONS,params).then(() => {
    //   //   context.commit(mutations.PUB_MUTATION, params)
    //   // })
    //   await context.commit(mutations.PUB_MUTATION, params)
    //   console.log(context,this.state)
    //   context.dispatch(mutations.INDEX_ACTIONS,params,root)
    //   context.dispatch(mutations.ABOUT_ACTIONS,{value:'pub',n:500},root)
    //   // context.dispatch(mutations.INDEX_ACTIONS,params)
    //   // context.dispatch(mutations.ABOUT_ACTIONS,{value:'pub',n:500})
    //   }
    //   // this.state.about.count = 500
    // },
    //启用空间命名 局部方法
    async [mutations.PUB_ACTIONS](context,params){
    //  params.rootState = context.rootState
      // context.dispatch(mutations.INDEX_ACTIONS,params).then(() => {
      //   context.commit(mutations.PUB_MUTATION, params)
      // })
      await context.commit(mutations.PUB_MUTATION, params)
      console.log(context,this.state)
      context.dispatch(mutations.INDEX_ACTIONS,params,root)
      context.dispatch(mutations.ABOUT_ACTIONS,{value:'pub',n:500},root)
      // context.dispatch(mutations.INDEX_ACTIONS,params)
      // context.dispatch(mutations.ABOUT_ACTIONS,{value:'pub',n:500})
      // this.state.about.count = 500
    },


    // async [mutations.PUB_ACTIONS](context,params){
    //  console.log(context)
    // //  params.rootState = context.rootState
    //   await context.dispatch(mutations.INDEX_ACTIONS,params)
    //   setTimeout(() => {
    //     context.commit(mutations.PUB_MUTATION, params)
    //   },5000)
    // },
    // [mutations.ABOUT_ACTIONS](context,params){
    //    context.commit(mutations.ABOUT_MUTATION,params)
    // },
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
  }
}
// const newVuex = new Vuex.Store(store)

export default store
