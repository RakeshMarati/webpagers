// Sample product data - in a real app, this would come from an API
export const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
      description: "High Quality wireless headphones with noise cancellation",
      category: "electronics",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
      description: "Advanced smartwatch with health tracking features",
      category: "electronics",
      inStock: true
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
      description: "Precision gaming mouse with RGB lighting",
      category: "electronics",
      inStock: true
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b117?w=300&h=200&fit=crop",
      description: "Professional mechanical keyboard with RGB backlighting",
      category: "electronics",
      inStock: true
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop",
      description: "Portable Bluetooth speaker with 360-degree sound",
      category: "electronics",
      inStock: false
    }
  ]
  
  // Helper functions
  export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id))
  }
  
  export const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category)
  }
  
  export const getInStockProducts = () => {
    return products.filter(product => product.inStock)
  }