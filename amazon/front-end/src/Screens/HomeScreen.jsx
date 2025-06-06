import data from '../data';
import { Link } from 'react-router-dom';
export default function HomeScreen() {
  return (
    <div>
      <h1>Feature Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.countInStock}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>{product.price}</strong>
              </p>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
