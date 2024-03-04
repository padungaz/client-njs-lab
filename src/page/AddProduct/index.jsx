import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const AddProduct = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/admin/add-product", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: e.target.title.value,
          imageUrl: e.target.image.value,
          price: e.target.price.value,
          description: e.target.description.value
        })
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main">
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="form-control">
          <label htmlFor="image">Image URL</label>
          <input type="text" name="imageUrl" id="image" />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" tep="0.01" />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" rows="5" />
        </div>
        <button type="submit" className="btn">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
