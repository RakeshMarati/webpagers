import React from 'react'
import "./ProductCard.css"

const ProductCard = ({product}) => {

    const {name, price, image, description} = product
    
   return (
    <div className='product-card'>
        <img src={image} alt={name} className='product-image' />
        <div className='product-info'>
            <h3 className='product-name'>{name}</h3>
            <p className='product-description'>{description}</p>
            <div className='product-price'>$${price}</div>
            <button className='add-to-cart-btn'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard