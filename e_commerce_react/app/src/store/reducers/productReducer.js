import actiontypes from "../actiontypes";

const initState = {
  product: null,
}

const productReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().product.set:
      return {
        ...state,
        product: action.payload
      }

    case actiontypes().product.clear:
      return {
        ...state,
        product: null
      }

    default:
      return state
  }
}

export default productReducer;