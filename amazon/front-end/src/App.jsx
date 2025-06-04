import './App.css';
import data from './data';

function App() {
  return (
    <>
      <header>
        <a href="/">Harunzy Collection</a>
      </header>
      <main>
        <h1>Feature Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.countInStock}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>{product.price}</strong>
                </p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
