import React from 'react'
import style from './cartitem.module.css'
import { useShoppingCart } from '../../Context/shopppingcartContext'
const CartItem = ({product}) => {
    const {getItemQuantity , removeItemFromCart} = useShoppingCart()
    const totalPrice = getItemQuantity(product.id) * product.price
  return (
    <div className={style.container}>
        <div className={style.imageInCartContainer}>
            <img src={product.image} alt="" />
        </div>
        <div className={style.cartInformation}>
            <h5>{product.title}</h5>
            <p>{product.price}$</p>
            <span>The Total  : {totalPrice}$</span>
        </div>
        <span className={style.closeBtn} onClick={()=>removeItemFromCart(product.id)}>X</span>

    </div>
  )
}

export default CartItem