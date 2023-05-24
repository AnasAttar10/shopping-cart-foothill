import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import style from './nav.module.css'
import { useShoppingCart } from '../../Context/shopppingcartContext'
const Nav = () => {
  const {toggleVisiblityMyCart , getTotalProducts} =useShoppingCart()
  const {pathname} = useLocation()
  console.log(pathname);
  const totalProducts =getTotalProducts()
  return (
    <div className={style.container}>
    <nav className={style.navbar}>
            <ul className={style.navlinks}>
                <li className={style.navItem}>
                    <NavLink className={(navData) => navData.isActive ? style.active : style.navLink} to="/" >Home</NavLink>
                </li>
                <li className={style.navItem} id='nono'>
                    <NavLink className={(navData) => navData.isActive ? style.active : style.navLink} to="store" >store</NavLink>
                </li>
                <li className={style.navItem}>
                    <NavLink className={(navData) => navData.isActive ? style.active : style.navLink} to="contact">Contact</NavLink>
                </li>
            </ul>
            {
            pathname==="/store"&&
            <div>
              <i className={"fa-sharp fa-solid fa-cart-shopping " + style.cartIcon } onClick={()=>toggleVisiblityMyCart()}>
                <span className={style.totalProducts}>{totalProducts || 0}</span>
              </i>
            </div>
            }
    </nav>
    </div>
  )
}

export default Nav