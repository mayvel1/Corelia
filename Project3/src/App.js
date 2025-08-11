import './App.css';

function App() {
  const products = [
    {
      id: 1,
      title: "Wirephones",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      title: "Laptop Stand",
      price: 24.99,
      image: "https://s3-eu-west-1.amazonaws.com/backcslimages/newsite/product-images/1500-1500/FoldineX-Laptop-Stand.jpg",
    }
  ];

  return (
    <>
      <header>
        <div className="header-content">
          <h1>Product Showcase</h1>
          <p>Discover our top picks for you!</p>
        </div>
      </header>
      <main>
        <section className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <div className="button-group">
                <button className="add-to-cart">Add to Cart</button>
                <button className="view-more">View More</button>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Product Showcase. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;