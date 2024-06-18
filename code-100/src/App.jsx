import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import React Router components
import Mainpage from './Mainpage';

// Main App component
function App() {
  return (
    <BrowserRouter>
    
      <>
        <h1>100 Days of Code</h1>
        <Mainpage />
      </>

      <Routes>
        <Route path="/Mainpage" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
