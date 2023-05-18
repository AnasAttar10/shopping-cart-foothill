const { useState, createContext, useContext } = require("react");


const ShoppingCartContext=createContext()

const  ShoppingCartProvider = ({children})=>{
    const [cartItems ,setCartItems] = useState([])
    const [isMyCartVisible , setisMyCartVisible] =useState(false)

    const toggleVisiblityMyCart =()=>{
        setisMyCartVisible(!isMyCartVisible)
    }

    const getTotalProducts =()=>{
        return cartItems.length 
    }
    const getItemQuantity =(id)=>{
        return cartItems.find(item => item.id === id)?.quantity || 0
    }


    const increseCartQuantity =(id)=>{

        if(cartItems.find(item=>item.id === id)){
        setCartItems([...cartItems].map(item => {
           if (item.id === id) 
                return {...item, quantity:item.quantity+1}
            else
                return item
        }))
        }
        else{
            setCartItems([...cartItems , {id : id , quantity : 1}])
        }
        !isMyCartVisible && toggleVisiblityMyCart()
    }


    const decreseCartQuantity =(id)=>{
            setCartItems( [...cartItems].map(item => {
                if (item.id === id) 
                     return {...item, quantity:item.quantity-1}
                 else
                     return item
             }))
    }
    

    const removeItemFromCart =(id)=>{
        setCartItems([...cartItems].filter(item => item.id !== id ))
    }


    return (
        <ShoppingCartContext.Provider 
        value={{
            cartItems ,
            getItemQuantity ,
            increseCartQuantity,
            decreseCartQuantity,
            removeItemFromCart ,
            getTotalProducts,
            isMyCartVisible ,
            toggleVisiblityMyCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export default ShoppingCartProvider ;

export const useShoppingCart =()=>{
    return useContext(ShoppingCartContext)
}
