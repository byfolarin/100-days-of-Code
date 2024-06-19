import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import React Router components
import Mainpage from './Mainpage';
import Todolist from './components/Todolist';
import TodoItem from './components/TodoItem';

// Main App component
function App() {

 
  return (
    <BrowserRouter>
    
      <>
      <h4><Link to={"/"}>Home</Link></h4>
      </>

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Todolist" element={<Todolist
          
        />} />

      <Route path="/TodoItem" element={<TodoItem
         
        />} />
      </Routes>

      <>
      
      </>


    </BrowserRouter>
  );
}

export default App;
