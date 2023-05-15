import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './products.module.css'
import Product from '../Product/Product'
import MyCart from '../myCart/MyCart'

const Products = () => {
    const EXTERNAL_API= "https://fakestoreapi.com/products"
    const [products ,setProducts]=useState([])
    const retriveProducts =async ()=>{
        const products = await axios.get(EXTERNAL_API)
        setProducts(products.data)
    }
    useEffect(()=>{
        retriveProducts()
    }, [])

  return (
    <div className={style.container}>
        <h2>Store</h2>
        <div className={style.products}>
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