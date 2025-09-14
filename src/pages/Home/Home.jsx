import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import "./Home.css"
const Home = () => {
    const featuredProducts = [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 199.99,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
          description: "High Quality wireless headphones with noise cancellation"
        },
        {
          id: 2,
          name: "Smart Watch",
          price: 299.99,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
          description: "Advanced smartwatch with health tracking features"
        },
        {
          id: 3,
          name: "Gaming Mouse",
          price: 79.99,
          image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
          description: "Precision gaming mouse with RGB lighting"
        }
      ]
  return (
    <div className='home'>
        <section className='hero'>
            <h1>Welcome to our Store</h1>
            <p>Discover amazing products at great prices</p>
        </section>
        <section className='featured-products'>
            {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    </div>
  )
}

export default Home