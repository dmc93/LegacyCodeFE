import React, { useState } from 'react';
import axios from 'axios';
import CustomAlert from './CustomAlert';
import { useCart } from './CartContext';

function ClearCartButton() {
    const { cartItems, newCart, setNewCart, clearCart } = useCart();

    const handleClearCart = async () => {
       
           
                clearCart(); // Clear the cart after successful checkout
           
    };



    // const closeAlert = () => {
    //     setShowAlert(false);
    // };

    return (
        <div>
            <button className="checkout-btn" onClick={handleClearCart}>Empty Cart</button>
           
        </div>
    );



}

export default ClearCartButton;