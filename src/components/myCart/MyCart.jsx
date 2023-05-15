import React from 'react'
import style from './mycart.module.css'
import CartItem from '../CartItem/CartItem';
import { useShoppingCart } from '../../Context/shopppingcartContext';
const MyCart = ({products}) => {
  const {cartItems ,getItemQuantity, isMyCartVisible ,toggleVisiblityMyCart} =useShoppingCart()
  let totalPrice = 0
  return ( 
    <div>
    {isMyCartVisible && 
        <div className={style.myCart}>
        <h3>My Cart </h3>
        <span className={style.closeBtn} onClick={toggleVisiblityMyCart}>X</span>
        {
          products.map(product => {
            if(cartItems.find(c=> c.id === product.id)){
              let quantity = getItemQuantity(product.id)
              totalPrice += quantity* product.price 
            return (
              <CartItem key={product.id} product ={product}/>
            )
          }
          }
          )
        }
       {
       totalPrice > 0 && 
       <div className={style.totalPrice}> <span>Total Price  : </span> <span> {totalPrice} $</span></div>
       }
      </div>
    }
    </div>  

  )
}

export default MyCart