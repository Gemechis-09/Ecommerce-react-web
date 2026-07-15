import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Auth from "./pages/Auth";
import Nav from "./componets/Nav";
import Checkout from './pages/Checkout';

export default function App(){
  return(
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  )
}