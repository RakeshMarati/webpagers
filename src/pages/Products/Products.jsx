import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import {products} from "../../data/Products"
import "./Products.css"
const Products = () => {
  return (
    <div className='products'>
        <div className='products-header'>
            <h1>All Products</h1>
            <p>Discover our wide range of products</p>
        </div>
        <div className='products-grid'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default Products