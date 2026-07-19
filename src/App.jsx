import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Auth from "./pages/Auth";
import Nav from "./componets/Nav";
import Checkout from './pages/Checkout';
import AuthProvider from './context/AuthContext';
import ProductDetail from './pages/ProductDetail';
import CartProvider from './context/CartContext';

export default function App(){
  return(
    <AuthProvider>
      <CartProvider>
        <div>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/products/:id' element={<ProductDetail />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}