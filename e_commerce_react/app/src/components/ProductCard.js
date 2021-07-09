import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions'

export default function Products({product, details}){

  const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="card h-100">
        {details && <h1 className="text-center mt-4">{product.name}</h1>}
        <img src={product.image} alt="..." className="card-img-top" />
        <div className="card-body">
          {!details && <h5 className="card-title">{product.name}</h5>}
          <div className="card-text">
            {details 
              ? <p>{product.desc}</p>
              : <p>{product.short}</p>
            }
            <p className="h5">Price: $<span className="text-danger">{product.price}</span></p>
          </div>
          <div className={`row row-cols-1 ${!details && 'row-cols-lg-2'} g-2 mt-3`}>
            <div className="col mx-auto">
              <button className="btn btn-primary btn-block float-end" onClick={() => {
                dispatch(addToCart(product))
              }}>Add To Cart</button>
            </div>
            {
              !details && 
              <div className="col">
                <Link className="btn btn-info btn-block" to={`/products/${product._id}`}>Read more<i className="fas fa-arrow-right ps-2"></i></Link>
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

Products.defaultProps = {
  details: false
}