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
        {data.products.map((product) => (
          <div key={product.slug}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
