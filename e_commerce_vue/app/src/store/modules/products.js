import axios from '@/axios'

export default {
  state: {
    products: [], 
    currentProduct: {}
  },
  getters: {
    products: state => state.products,
    getCurrentProduct: state => state.currentProduct, 
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
  },
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('products')
      commit('SET_PRODUCTS', res.data)
    },
    currentProduct: ({commit}, product) => {
      commit('CURRENT_PRODUCT', product);
    },   
  }
}