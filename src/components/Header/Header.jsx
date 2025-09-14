import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
const Header = () => {
  return (
    <header className='header'>
    <div className='header-content'>
      <Link to="/" className="logo"><h1>My E-Commerce Store</h1>
      </Link>
      <nav className='nav'>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </nav>
    </div>
    </header>
  )
}

export default Header