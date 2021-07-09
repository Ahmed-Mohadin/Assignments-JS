import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

export default function ShoppingCart(){

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);


  const empty = (
    <div className="p-2 d-flex justify-content-center align-items-center">
      Your cart is empty
    </div>
  )

  return (
    <div className="my-cart">
      {
        shoppingCart.map(product => (
          <CartProduct product={product} key={product._id} />
        ))
      }
      {!shoppingCart.length && empty}
      <div className="dropdown-divider"></div>
      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total: <span>${totalCartAmount}</span>
          </div>
          <small className="text-muted"><i className="fas fa-shipping-fast"></i>: Free Shipping</small>
        </div>
        <button className="btn btn-success">To Checkout</button>
      </div>
    
    </div>
  )
}