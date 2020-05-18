import store from './index';

export default {
  install(moduleName,stateNames) {
    console.log(moduleName,stateNames)
    //  moduleName = moduleName.toString()
    store.registerModule(moduleName, {
      namespaced: true,
      state() {
        return stateNames ? stateNames : {[moduleName+'Name']: ''}
      },
      getters:{

      },
      actions: {
        setTest: (context, val) => {
          console.log(val)
          return context.commit('putTest', val)
        }
      },
      mutations: {
        putTest: (state, val) => {
          state.a = val;
        }
      }
    })
  },
  uninstall() {
    store.unregisterModule(moduleName)
  }
}

