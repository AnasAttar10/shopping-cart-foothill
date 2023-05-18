import React, { useState } from 'react'
import style from "./checkout.module.css"
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
    const emptyForm = {
        username:"",
        email:""
    }
    const [user,setUser]=useState(emptyForm)
    const navigat = useNavigate()

    const handleInputs=(e)=>{
        setUser({...user , [e.target.name] : e.target.value})
    }
    const handleForm =(e)=>{
        e.preventDefault()
        alert(`thank you ${user.username}`)
        navigat("/store")
    }
  return (
    <div>
        <form onSubmit={handleForm} className={style.form}>
            <div>
                <label>username </label>
                <input type="text" name="username" value={user.username} onChange={handleInputs}/>
            </div>
            <div>
                <label>email </label>
                <input type="email" name="password" value={user.password} onChange={handleInputs}/>
            </div>
            <input type="submit" value="buy"/>
        </form>
    </div>
  )
}

export default Checkout