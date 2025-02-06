
import React, { useState } from 'react';
import Image from '../images/table.jpg';
import "../ProductItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { products } from '../data/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductItem = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Store search input
  const [selectedCategory, setSelectedCategory] = useState(""); // Store selected category

  // Filter products based on search term and category
  const filteredProducts = products.filter((item) => {
    // Match category if selected, else show all
    const matchesCategory = selectedCategory
      ? item.category.toLowerCase() === selectedCategory.toLowerCase()
      : true; // Case-insensitive comparison
    // Match search term
    const matchesSearch = item.productName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch; // Both must match
  });

  // Handle adding product to cart and showing toast
  const handleAddToCart = (productName) => {
    toast.success(`${productName} has been added to Cart!`, {
      position: "top-right",  // Correct positioning format as a string
      autoClose: 3000, // Auto close after 3 seconds
    });

    //for add to cart

  };

  return (
    <>
      <div className="banner">
        <img src={Image} alt="Background" className="background-image" />
        <div className="overlay">
          <h1 className="text">Product</h1>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mt-3">
        <div className="row align-items-center">
          {/* Drop-Down for Category Filtering */}
          <div className="col-auto">
            <select
              className="form-select bg-primary"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Sofa">Sofa</option>
              <option value="Chair">Chair</option>
              <option value="Mobile">Mobile</option>
              <option value="Wireless">Wireless</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              style={{ borderColor: "lightblue", margin: "20px" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
            />
          </div>

          {/* Search Button (Optional) */}
          <div className="col-auto">
            <button className="btn btn-primary bg-primary">Search</button>
          </div>
        </div>
      </div>

      {/* Product Display Section */}
      <div className="product-container">
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 9).map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.imgUrl} alt={item.productName} className="product-image" />


                <h3 className="product-title">{item.productName}</h3>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="product-price">${item.price}</p>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(item.productName)} // Trigger toast when clicked
                >
                  +
                </button>
              </div>
            ))
          ) : (
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>No matching products found</h3>
          )}
        </div>
      </div>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </>
  );
};

export default ProductItem;