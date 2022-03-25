import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: 50,
    adornos: 20,
    listPedidos: []
  },
  getters: {
    /* imprimirPedidos: funcion para poder imprimir los pedidos en la tabla pastlero.
     * Entrada: state
     * Salida: estado con la lista listPedidos
    */
    imprimirPedidos(state){
      return state.listPedidos
    },
    /* totalSabores: funcion que muestra el total de sabores despues de enviar un pedido
     * Entrada: state
     * Salida: el estado sabores o total disminuido
    */
    totalSabores(state){
      let total;
      if(state.listPedidos == ""){
        return state.sabores
      }else{
          for(var i=0;i<state.listPedidos.length;i++){
            total = state.listPedidos[i].sabores.length
          }
        return state.sabores - total
      }      
    },
    /* totalAdornos: funcion que muestra el total de adornos despues de enviar un pedido
     * Entrada: state
     * Salida: el estado adornos o total disminuido
    */
    totalAdornos(state){
      let total;
      if(state.listPedidos == ""){
        return state.adornos
      }else{
          for(var i=0;i<state.listPedidos.length;i++){
            total = state.listPedidos[i].adornos.length
          }
        return state.adornos - total
      }      
    }
  },
  mutations: {
    //metodos para poder cambiar datos o agregar
  },
  actions: {
  },
  modules: {
  }
})
