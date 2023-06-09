import React, { useState, useEffect } from 'react';
import MenuCards from './MenuCards';
import CartContainer from './CartContainer';

const ViewRestaurantMenu = ({ menuId }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetchMenu();
  }, [menuId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`/menus/${menuId}`);
      const data = await response.json();
      setFoodItems(data.foodItems);
    } catch (error) {
      console.log('Error fetching menu:', error);
    }
  };

  const addToCart = (foodItem) => {
    const updatedCartItems = [...cartItems, foodItem];
    setCartItems(updatedCartItems);
    setTotalCost(totalCost + foodItem.price);
  };

  return (
    <div>
      <header>
        <CartContainer cartItems={cartItems} />
      </header>
      <main>
        <h1>View Restaurant Menu</h1>
        <div className="food-cards">
          {foodItems.map((foodItem) => (
            <MenuCards key={foodItem.id} foodItem={foodItem} onOrder={addToCart} />
          ))}
        </div>
        <div className="cart">
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
              <p>Total: ${totalCost}</p>
              <button>Checkout</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ViewRestaurantMenu;

