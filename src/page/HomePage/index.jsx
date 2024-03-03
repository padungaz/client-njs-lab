import React, { useEffect, useState } from 'react';
import './style.css';

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000");
            const data = await response.json();
            setProductList(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <main>
            {productList?.length > 0 ? (
                <div className="grid">
                    {productList?.map((product, index) => (
                        <article key={index} className="card product-item">
                            <header className="card__header">
                                <h1 className="product__title">{product?.title}</h1>
                            </header>
                            <div className="card__image">
                                <img src={product?.imageUrl} alt="" />
                            </div>
                            <div className="card__content">
                                <h2 className="product__price">${product?.price}</h2>
                                <p className="product__description">{product?.description}</p>
                            </div>
                            <div className="card__actions">
                                <button className="btn">Add to Cart</button>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <h1>No Products</h1>
            )}
        </main>
    );
}

export default ProductList;
