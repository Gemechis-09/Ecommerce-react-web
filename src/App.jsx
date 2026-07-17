import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Auth from "./pages/Auth";
import Nav from "./componets/Nav";
import Checkout from './pages/Checkout';
import AuthProvider from './context/AuthContext';

export default function App(){
  return(
    <AuthProvider>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Auth' element={<Auth />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}