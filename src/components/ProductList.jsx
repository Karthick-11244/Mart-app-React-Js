import React from "react";
import { discoutProducts,products} from "../data/Product";// Import discount products data
import "../ProductList.css" // Ensure you create this CSS file


const ProductList = () => {
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
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="product-price">${item.price}</p>
                        <button className="add-to-cart">+</button>
                    </div>
                    
                ))}    
            </div>
        </div>
        
      {/* new Arrival sectin */}
      <div className="product-container">
            <h2 className="section-title">New Arrival</h2>
            <div className="product-grid">
                {[...products.slice(12,18),...products.slice(22)].map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.imgUrl} alt={item.productName} className="product-image" />
                        <h3 className="product-title">{item.productName}</h3>
                        <div className="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="product-price">${item.price}</p>
                        <button className="add-to-cart">+</button>
                    </div>
                    
                ))}    
            </div>
        </div>

        {/* Best Sales Section */}
        <div className="product-container">
            <h2 className="section-title">Best Sales</h2>
            <div className="product-grid">
                {products.slice(0,9).map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.imgUrl} alt={item.productName} className="product-image" />
                        <h3 className="product-title">{item.productName}</h3>
                        <div className="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p className="product-price">${item.price}</p>
                        <button className="add-to-cart">+</button>
                    </div>
                    
                ))}    
            </div>
        </div>

    </>
  );
};

export default ProductList;