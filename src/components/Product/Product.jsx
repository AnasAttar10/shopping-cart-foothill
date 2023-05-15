import React from 'react'
import style from './product.module.css'
import { useShoppingCart } from '../../Context/shopppingcartContext'
const Product = ({product}) => {
const { 
    cartItems ,
    getItemQuantity ,
    increseCartQuantity,
    decreseCartQuantity,
    removeItemFromCart ,
    isMyCartVisible,
    setisMyCartVisible
  } = useShoppingCart()

  const quantity =getItemQuantity(product.id)
  return (
    <div className={style.product}>
        <div className={style.imageContainer}>
            <img className={style.image} src={product.image} alt={product.title} />
        </div>
        <div className={style.productInformation}>
            <h5>{product.price} $</h5>
            <h5>{product.title}</h5>
        </div>
        {
          quantity > 0 ?  
        <div >
          <div className={style.btnContainer}>
            <button className={style.btn} onClick={()=>decreseCartQuantity(product.id)}>-</button>
            <span>{quantity}</span>
            <button className={style.btn} onClick={()=>increseCartQuantity(product.id)}>+</button>
          </div>
          <button className={style.btn + " " +style.removeBtn} onClick={()=>removeItemFromCart(product.id)}>Remove</button>
        </div>
        :
        <button className={style.btn + " " +style.addBtn} onClick={()=>increseCartQuantity(product.id)}>Add</button>
        }
    </div>
  )
}

export default Product