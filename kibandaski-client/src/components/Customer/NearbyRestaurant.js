import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

const NearbyRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('/restaurants');
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.log('Error fetching restaurants:', error);
    }
  };

  return (
    <div>
      <h1>Nearby Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyRestaurants;
