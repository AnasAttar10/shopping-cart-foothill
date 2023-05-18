import React from 'react'
import style from './product.module.css'
import { useShoppingCart } from '../../Context/shopppingcartContext'
const Product = ({product}) => {
const { 
    getItemQuantity ,
    increseCartQuantity,
    decreseCartQuantity,
    removeItemFromCart ,
  } = useShoppingCart()

  const quantity =getItemQuantity(product.id)
  return (
    <div className={style.product}>
        <div className={style.imageContainer}>
            <img loading='lazy' className={style.image} src={product.image} alt={product.title} />
        </div>
        <div className={style.productInformation}>
            <span>{product.price} $</span>
            <p>{product.title}</p>
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