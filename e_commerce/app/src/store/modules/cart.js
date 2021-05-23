
export default {
  state: {
    cart: []
  },
  getters: {
    shoppingCart: state => state.cart,
    shoppingCartTotal: state => {
      let counter = 0
      if(state.cart.length !== 0) {
        state.cart.forEach(item => {
          counter += item.product.price * item.quantity
        })
      }
      return counter
    }
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      if(exists) {
        console.log(quantity)
        exists.quantity += quantity
        return
      }

      state.cart.push({ product, quantity })
    }
  },
  actions: {
    addProductToCart: ({commit}, { product, quantity }) => {
      let item = {
        product,
        quantity: Number(quantity)
      }
      commit('ADD_TO_CART', item)
    }
  }
}