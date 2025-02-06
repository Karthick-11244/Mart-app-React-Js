import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../cartSlice";
import "../CartPage.css";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    return (
     
        <div className="cart-container">
            {cartItems.length=== 0 ? (
                <p>No Items in Cart</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.imgUrl} alt={item.productName} className="cart-image" />
                        <div className="cart-details">
                            <h3>{item.productName}</h3>
                            <p>${item.price} × {item.quantity} = ${ item.price * item.quantity}</p>
                            <button className="increase" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                            <button className="decrease"onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                            <button className="remove" onClick={() => dispatch(removeFromCart(item))}>X</button>
                        </div>
                    </div>
                       
                ))
            )}
            <div className="cart-summary">
                <h2>Cart Summary</h2>
                <p>Total Price:</p>
                <h2>${totalPrice}</h2>
            </div>
            </div>
    );
};

export default CartPage;