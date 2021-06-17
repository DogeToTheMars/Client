import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coinChart: [],
    coinMarketName: 'KRW-BTC',
    coinName: '비트코인',
  },
  getters: {
    getCoinChart: function(state) {
      return state.coinChart
    }
  },
  mutations: {
    CLEAR_CHART_DATA: function(state) {
      state.coinChart = []
    },
    UPDATE_COIN_NAME: function(state, marketName) {
      state.coinMarketName = marketName
    }
  },
  actions: {
    clearChartData: function( {commit} ) {
      commit('CLEAR_CHART_DATA')
    },
    updateCoinName: function( {commit}, marketName){
      commit('UPDATE_COIN_NAME', marketName)
    }
  },
  modules: {
  }
})
