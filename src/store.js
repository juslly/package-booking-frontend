import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    id:"",
    name:"",
    phone:"",
    weight:0,
    status:"",
    date:""
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
  getWeight:function(state){
    return state.weight;
},
getStatus:function(state){
  return state.status;
},
getDate:function(state){
  return state.date;
}
    
  },
  mutations: {
    updateMes(state,data) {
      state.id = data.id;
      state.name = data.name;
      state.phone = data.phone;
      state.weight = data.weight;
    },
    sendOrder(state,data) {
      state.id = data.id;
      // state.status = data.
      state.date = data.date;
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

      sendOrder(context,data){
        axios
        .patch("http://127.0.0.1:8080/parcels/sendOrder",data)
        .then(function(response) {
          context.commit("sendOrder", response.data);
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

