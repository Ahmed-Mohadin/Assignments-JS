import actiontypes from '../actiontypes';

const initState = {
  shoppingCart: [],
  totalCartQuantity: 0,
  totalCartAmount: 0
}

const cartReducer = (state = initState, action) => {
  let itemIndex
  switch(action.type) {
    case actiontypes().cart.add:
      itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload._id)
      itemIndex < 0
      ? state.shoppingCart = [...state.shoppingCart, {...action.payload, quantity: 1}]
      : state.shoppingCart[itemIndex].quantity += 1

      state.totalCartAmount = getTotalAmount(state.shoppingCart)
      state.totalCartQuantity = getTotalQuantity(state.shoppingCart)

      return state      

    case actiontypes().cart.sub:
      action.payload.quantity === 1
      ? state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload._id)
      : action.payload.quantity -= 1

      state.totalCartAmount = getTotalAmount(state.shoppingCart)
      state.totalCartQuantity = getTotalQuantity(state.shoppingCart)

      return state

    case actiontypes().cart.delete:
      state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload)
      state.totalCartAmount = getTotalAmount(state.shoppingCart)
      state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
      return state;


    default:
      return state
  }
}


const getTotalQuantity = cart => {
  let total = 0;
  cart.forEach(product => {
    total += product.quantity
  })
  return total;
}

const getTotalAmount = cart => {
  let total = 0;

  cart.forEach(product => {
    total += product.price * product.quantity
  })

  return total;
}

export default cartReducer;