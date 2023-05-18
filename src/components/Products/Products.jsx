import React, { useEffect, useState } from 'react'
import style from './products.module.css'
import Product from '../Product/Product'
import MyCart from '../myCart/MyCart'
import { useShoppingCart } from '../../Context/shopppingcartContext'

const Products = () => {
    const EXTERNAL_API= "https://fakestoreapi.com/products"
    const {isMyCartVisible}=useShoppingCart()
    const [products ,setProducts]=useState([])
    const retriveProducts =async ()=>{
        const response  = await fetch(EXTERNAL_API)
        const products = await response.json();
        setProducts(products)
    }
    useEffect(()=>{
        retriveProducts()
    }, [])
//+" " +isMyCartVisible?"PushContainerToRight":""
  return (
    <div className={style.container}>
        <h2>Store</h2>
        <div className={isMyCartVisible?style.products +" " +style.PushContainerToRight:style.products}>
        {
            products.map(p=>(
                <Product key={p.id} product={p}/>
            ))
        } 
        </div>
        <MyCart products={products}/>
    </div>

  )
}

export default Products