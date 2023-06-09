import React, { useState } from 'react';
import CartItem from './CartItem';
import MakeOrders from './MakeOrders';
import './CartContainer.css';

const CartContainer = ({ cartItems, updateCartItem }) => {
  const [showOrdersPage, setShowOrdersPage] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('');

  const handleDeliveryMethod = (method) => {
    setDeliveryMethod(method);
  };

  const handleCheckout = () => {
    setShowOrdersPage(true);
  };

  const handleBackToCart = () => {
    setShowOrdersPage(false);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Cart</h2>
      {showOrdersPage ? (
        <MakeOrders
          deliveryMethod={deliveryMethod}
          cartItems={cartItems}
          onBackToCart={handleBackToCart}
        />
      ) : (
        <>
          {cartItems && cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} updateCartItem={updateCartItem} />
              ))}
              <p className="total-price">Total Price: ${getTotalPrice()}</p>
              <div className="delivery-methods">
                <p>Select Delivery Method:</p>
                <button
                  className="delivery-method-button"
                  onClick={() => handleDeliveryMethod('delivery')}
                >
                  Delivery
                </button>
                <button
                  className="delivery-method-button"
                  onClick={() => handleDeliveryMethod('pickup')}
                >
                  Pickup
                </button>
              </div>
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            </>
          ) : (
            <p className="empty-cart-message">Your cart is empty.</p>
          )}
        </>
      )}
    </div>
  );
};

export default CartContainer;
