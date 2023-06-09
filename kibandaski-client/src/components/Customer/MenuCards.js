import React from 'react';
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react';

const MenuCards = ({ foodItem, onOrder }) => {
  const { name, description, price } = foodItem;

  const handleOrderClick = () => {
    console.log(`Order ${name}`);
    // Handle the order button click
    // You can navigate the user to the make orders page or perform any other action
    onOrder(foodItem);
  };

  return (
    <div className="menu-card">
      <CCard>
        <CCardBody>
          <CCardTitle>{name}</CCardTitle>
          <CCardText>{description}</CCardText>
          <CCardText>Price: ${price}</CCardText>
          <CButton onClick={handleOrderClick}>Order</CButton>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default MenuCards;
