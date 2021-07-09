import actiontypes from '../actiontypes';
import axios from 'axios';

export const getProductCatalog = () => {
  return async dispatch => {
    const res = await axios.get('http://localhost:8080/api/products')
    dispatch(setProducts(res.data))
  }
}

export const setProducts = products => {
  return {
    type: actiontypes().productCatalog.set,
    payload: products
  }
}

export const getProductById = id => {
  return async dispatch => {
    const res = await axios.get(`http://localhost:8080/api/products/${id}`)
    dispatch(setOneProduct(res.data))
  }
}

export const setOneProduct = product => {
  return {
    type: actiontypes().product.set,
    payload: product
  }
}

export const clearProduct = () => {
  return {type: actiontypes().product.clear}
}