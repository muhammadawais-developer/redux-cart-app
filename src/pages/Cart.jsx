import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  const handleClick = (product) => {
    dispatch(remove(product))
  }
  return (
    <div className='cartWrapper'>
      {
        products.map(product => (
          <div className="cartCard">
            <img src={product.image} alt='' />
             <h5>{product.title}</h5> 
             <h5>{product.price}</h5>
             <button onClick={() => handleClick(product.id)} className='btn'>Remove</button> 
          </div>
        ))
      }
    </div>
  )
}

export default Cart