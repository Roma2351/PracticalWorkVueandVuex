import { createStore } from 'vuex'

export default createStore({
  state: {
    step:1,
    userCode:'',
    userCodeConfire:''
  },
  getters: {
  },
  mutations: {
    SET_STEP(state, value){
      state.step = value
    },

    SET_USERCODE(state, value){
      state.userCode = value
    },
    SET_USERCODECONFIRM(state,value){
      state.userCodeConfire = value
    }
  },
  actions: {
  },
  modules: {
  }
})
