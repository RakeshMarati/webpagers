import './App.css'
import Header from './components/Header/Header.jsx'
import ProductCard from './components/ProductCard/ProductCard.jsx'
import Home from "./pages/Home/Home.jsx"

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
      <Home />
      </main>
     </div>
    </>
  )
}

export default App
