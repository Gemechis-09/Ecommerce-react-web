import { createContext, useContext, useState } from "react";
import { getProductById } from "../Data/products";


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

    function clearCart(){
        alert("Successfully Ordered!")
        setCartItem([]);
    }

    function removeItem(productId){
        setCartItem(
        cartItem.filter((item)=>(
            item.id !== productId
        )))
    }

    function updateCartItem(productId, quantity){
            
            if(quantity <= 0){
                removeItem(productId)
                return;
            }
            
            setCartItem(cartItem.map((item)=>(
                item.id === productId ? {...item, quantity} : item
            )))
    }

    function getCartTotal(){
        const total = cartItem.reduce((total, item) => {
            const product = getProductById(item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
        return total;
    }

    function getCartItemWithProduct(){
        return cartItem.map((item)=> ({
            ...item,
            product: getProductById(item.id),
        }))
        .filter((item)=>item.product);
    }

    return <CartContext.Provider value={{cartItem, addToCart, getCartItemWithProduct, updateCartItem, removeItem, getCartTotal, clearCart}}>{children}</CartContext.Provider>
}

export function useCart(){
    const context = useContext(CartContext);
    return context;
}