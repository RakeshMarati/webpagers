import './App.css'
import Header from './components/Header/Header.jsx'
import ProductCard from './components/ProductCard/ProductCard.jsx'

function App() {
  const sampleProduct = {
    name: "Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    description: "High Quality wireless headphones with noise cancellation"
  }
  return (
    <>
     <div className='App'>
      <Header/>
      <main>
      <h2>This is our main content area</h2>
      <ProductCard product={sampleProduct}/>
      </main>
     </div>
    </>
  )
}

export default App
