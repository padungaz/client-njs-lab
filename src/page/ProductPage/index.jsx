import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddToCart = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/cart", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: id,
        })
      });

      if (response.ok) {
        navigate("/cart");
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main>
      {productList.length > 0 ? (
        <div className="grid">
          {productList.map(product => (
            <article key={product.id} className="card product-item">
              <header className="card__header">
                <h1 className="product__title">{product.title}</h1>
              </header>
              <div className="card__image">
                <img src={product.imageUrl} alt={product.title} />
              </div>
              <div className="card__content">
                <h2 className="product__price">${product.price}</h2>
                <p className="product__description">{product.description}</p>
              </div>
              <div className="card__actions">
                <button className="btn">Details</button>
                <button onClick={() => handleAddToCart(product.id)} className="btn">Add to cart</button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <h1>No Products Found!</h1>
      )}
    </main>
  )
}

export default ProductList;