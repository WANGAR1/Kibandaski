import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./owner/Dashboard";


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/dashbord/" element={<Dashboard />} />
      
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;