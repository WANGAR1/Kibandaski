// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInSignUp from './SignInSignUp';
import WelcomePage from './WelcomePage';
//import OwnerLandingPage from './OwnerLandingPage';//
import CustomerLandingPage from './Customer/CustomerLandingPage';
import '../App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSignUp />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/dashbord/" element={<Dashboard />} />
        <Route path="/welcome/customer" element={<CustomerLandingPage />} />
      </Routes>
    </Router>
    
  );
};

export default App;
