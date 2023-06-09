import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

const RestaurantCard = ({ restaurant }) => {
  const { name, description, menuLink } = restaurant;

  const handleMenuClick = () => {
    console.log(`View menu for ${name}`);
    // Handle the menu button click
    // You can navigate the user to the menu page or perform any other action
    window.location.href = menuLink;
  };

  return (
    <div className="restaurant-card">
      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src />
        <CCardBody>
          <CCardTitle>{name}</CCardTitle>
          <CCardText>{description}</CCardText>
          <CButton onClick={handleMenuClick}>View Menu</CButton>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default RestaurantCard;
