import './App.css'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header/Header.jsx'
import Products from "./pages/Products/Products.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"
import Home from "./pages/Home/Home.jsx"

function App() {

  return (
    <>
     <div className='App'>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path ="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path = "/register" element={<Register />} />
      </Routes>
      </main>
     </div>
    </>
  )
}

export default App
