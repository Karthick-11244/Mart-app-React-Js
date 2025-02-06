import React from "react";
import { discoutProducts, products } from "../data/Product"; // Import discount products data
import "../ProductList.css";
import { toast, ToastContainer } from 'react-toastify';  // Import React Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import styles for Toastify

const ProductList = () => {

    // Handle adding product to cart and showing toast
    const handleAddToCart = (productName) => {
        toast.success(`${productName} has been added to Cart!`, {
            position: "top-right", // Position of the notification
            autoClose: 3000, // Auto close after 3 seconds
        });
    };

    return (
        <>
            <div className="product-container">
                <h2 className="section-title">Big Discount</h2>
                <div className="product-grid">
                    {discoutProducts.map((item) => (
                        <div key={item.id} className="product-card">
                            <span className="discount-tag">{item.discount}% OFF</span>
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
                    ))}
                </div>
            </div>

            {/* New Arrival Section */}
            <div className="product-container">
                <h2 className="section-title">New Arrival</h2>
                <div className="product-grid">
                    {[...products.slice(12, 18), ...products.slice(22)].map((item) => (
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
                    ))}
                </div>
            </div>

            {/* Best Sales Section */}
            <div className="product-container">
                <h2 className="section-title">Best Sales</h2>
                <div className="product-grid">
                    {products.slice(0, 9).map((item) => (
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
                    ))}
                </div>
            </div>

            {/* Toast Container for notifications */}
            <ToastContainer />
        </>
    );
};

export default ProductList;