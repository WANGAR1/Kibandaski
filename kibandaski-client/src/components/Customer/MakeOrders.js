import React, { useState } from 'react';
import './MakeOrders.css';

const MakeOrders = ({ deliveryMethod, cartItems, onBackToCart }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handleConfirmOrder = () => {
    console.log('Order Confirmed:');
    console.log('Delivery Method:', deliveryMethod);
    console.log('Payment Method:', paymentMethod);
    console.log('Cart Items:', cartItems);
  };

  return (
    <div className="orders-page">
      <h2 className="orders-heading">Orders</h2>
      <p className="delivery-method">Delivery Method: {deliveryMethod}</p>
      {deliveryMethod === 'delivery' && (
        <>
          <p className="payment-method-label">Select Payment Method:</p>
          <button
            className="payment-method-button"
            onClick={() => handlePaymentMethod('payondelivery')}
          >
            Pay On Delivery
          </button>
          <button
            className="payment-method-button"
            onClick={() => handlePaymentMethod('onlinepayment')}
          >
            Online Payment
          </button>
        </>
      )}
      <button className="confirm-order-button" onClick={handleConfirmOrder}>
        Confirm Order
      </button>
      <button className="back-to-cart-button" onClick={onBackToCart}>
        Back to Cart
      </button>
    </div>
  );
};

export default MakeOrders;
