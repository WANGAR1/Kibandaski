import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'customer') {
      navigate('/welcome/customer');
    } else if (role === 'owner') {
      navigate('/owner-landing');
    }
  };

  return (
    <div>
      <h1>Welcome to the Kibandaski!</h1>
      <p>Please select your role:</p>
      <button className="custom-button" onClick={() => handleRoleSelection('customer')}>
        Customer
      </button>
      <button className="custom-button" onClick={() => handleRoleSelection('owner')}>
        Owner
      </button>
    </div>
  );
}

export default WelcomePage;
