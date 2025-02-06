import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice"; // Import cart actions
import { discoutProducts, products } from "../data/Product";
import "../ProductList.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success(`${product.productName} has been added to Cart!`, {
            position: "top-right",
            autoClose: 3000,
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
                            <button className="add-to-cart" onClick={() => handleAddToCart(item)}>+</button>
                        </div>
                    ))}
                </div>
            </div>

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
                            <button className="add-to-cart" onClick={() => handleAddToCart(item)}>+</button>
                        </div>
                    ))}
                </div>
            </div>

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
                            <button className="add-to-cart" onClick={() => handleAddToCart(item)}>+</button>
                        </div>
                    ))}
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default ProductList;