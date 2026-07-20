import { Link } from "react-router-dom";
import { getProducts } from "../Data/products"
import ProductsCard from "../componets/ProductsCard";

export default function Home(){
    const products = getProducts();
    return(
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">Welcome to ShopHub</h1>
                <p className="home-subtitle"></p>
            </div>
            <div className="container">
                <h2 className="page-title">Our Products</h2>
                <div className="product-grid">
                    {products.map((product)=> (
                        <ProductsCard product={product} />
                    ))}
                </div>
                 <footer
                    style={{
                        marginTop: "3rem",
                        textAlign: "center",
                        color: "#888",
                        fontSize: "14px",
                    }}
                >
                    <p>Built by <strong>Gemechis Gelana</strong></p>
                    </footer>
            </div>
        </div>
    )
}