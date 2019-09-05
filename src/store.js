import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    id:"",
    name:"",
    phone:"",
    weight:0
  },
  getters: {
      getId:function(state){
          return state.id;
      },
      getName:function(state){
        return state.name;
    },
    getPhone:function(state){
      return state.phone;
  },
  getweight:function(state){
    return state.weight;
}
    
  },
  mutations: {
    updateMes(state,data) {
      state.id = data.id;
      state.name = data.name;
      state.phone = data.phone;
      state.weight = data.weight;
    }
  },
  actions: {
    sendMes(context,data){
        axios
        .post("http://127.0.0.1:8080/parcels",data)
        .then(function(response) {
          context.commit("updateMes", response.data);
          console.log("结果:"+response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          console.log("执行完毕");
        });

      },

    
    // setData(store,datassss) {
    //     store.commit("setData",datassss);
    // }
  }
});

export default store;

