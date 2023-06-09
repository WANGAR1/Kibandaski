import React, { useState, useEffect } from 'react';
import NearbyRestaurants from './NearbyRestaurants';
import RestaurantCard from './RestaurantCard';
import { useNavigate } from 'react-router-dom';
import './CustomerLandingPage.css';
import Footer from '../Footer';

const CustomerLandingPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

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

  const handleViewMenu = (menuLink) => {
    navigate(menuLink);
  };

  return (
    <div>
      <main>
        <div>
          <NearbyRestaurants restaurants={restaurants} />
          </div>
        <div className="restaurant-cards">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              handleViewMenu={handleViewMenu}
            />
          ))}
        </div>
      </main>
      <Footer /> 
    </div>
  );
};

export default CustomerLandingPage;

