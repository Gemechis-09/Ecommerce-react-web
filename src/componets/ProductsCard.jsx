import { Link } from "react-router-dom"
import { getProducts } from "../Data/products"
import { useCart } from "../context/CartContext"

export default function ProductsCard({product}){
    const { addToCart, cartItem } = useCart();
    const productInCart = cartItem.find((item)=> item.id === product.id);
    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";
    return(
        <div className="product-card" key={product.id}>
            <img className="product-card-image" src={product.image} alt={product.name} />
            <div className="product-card-content">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-price">${product.price}</p>
                <div className="product-card-actions">
                    <Link className="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
                    <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add To Cart {productQuantityLabel}</button>
                </div>
            </div>
        </div>
)
}