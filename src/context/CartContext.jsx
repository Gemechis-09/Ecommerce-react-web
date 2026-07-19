import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export default function CartProvider({children}){

    const [cartItem, setCartItem] = useState([]);

    function addToCart(productId){
        const existing = cartItem.find((item)=>item.id === productId);
        if(existing){
           const currentQuantity = existing.quantity;
           const updatedCartItem = cartItem.map((item) => item.id === productId ? {id: productId, quantity: currentQuantity + 1} : item);

        setCartItem(updatedCartItem);
        }
        else{
            setCartItem([...cartItem, {id: productId, quantity: 1}]);
        }
    }

    return <CartContext.Provider value={{cartItem, addToCart}}>{children}</CartContext.Provider>
}

export function useCart(){
    const context = useContext(CartContext);
    return context;
}