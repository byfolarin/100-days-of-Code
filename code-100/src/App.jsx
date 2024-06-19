import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import React Router components
import Mainpage from './Mainpage';
import Todolist from './components/Todolist';

// Main App component
function App() {
  return (
    <BrowserRouter>
    
      <>
      
      </>

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Todolist" element={<Todolist />} />
      </Routes>

      <>
      
      </>


    </BrowserRouter>
  );
}

export default App;
