import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './nav.module.css'
import { useShoppingCart } from '../../Context/shopppingcartContext'
const Nav = () => {
  const {toggleVisiblityMyCart} =useShoppingCart()
  return (
    <div className={style.container}>
    <nav className={style.navbar}>
            <ul className={style.navlinks}>
                <li className="nav-item">
                    <NavLink className={style.navLink} to="/" >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={style.navLink} to="store" >store</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={style.navLink} to="contact">Contact</NavLink>
                </li>
            </ul>
            <div><i className={"fa-sharp fa-solid fa-cart-shopping " + style.cartIcon } onClick={()=>toggleVisiblityMyCart()}></i></div>
    </nav>
    </div>
  )
}

export default Nav