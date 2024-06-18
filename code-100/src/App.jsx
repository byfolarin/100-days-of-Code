import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import React Router components
import Mainpage from './Mainpage';

// Main App component
function App() {
  return (
    <BrowserRouter>
    
      <>
      
      </>

      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>

      <>
      
      </>


    </BrowserRouter>
  );
}

export default App;
