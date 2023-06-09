import React, { useState, useEffect } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';

const CartItem = ({ item, updateCartItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const updateQuantity = (action) => {
    if (action === 'add') {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === 'remove' && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    updateCartItem(item.id, quantity);
  }, [quantity, item.id, updateCartItem]);
  

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <div className="quantity-control">
        <button onClick={() => updateQuantity('remove')} disabled={quantity === 1}>
          <BiMinus />
        </button>
        <span>{quantity}</span>
        <button onClick={() => updateQuantity('add')}>
          <BiPlus />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
