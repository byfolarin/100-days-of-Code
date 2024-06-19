import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import React Router components
import Mainpage from './Mainpage';
import Todolist from './components/Todolist';
import TodoItem from './components/TodoItem';

// Main App component
function App() {

  const [input, setInput] = useState("");
  const [arrList, setArrList] = useState([]);
  return (
    <BrowserRouter>
    
      <>
      
      </>

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Todolist" element={<Todolist
          input = {input} setInput = {setInput}
          arrList = {arrList} setArrList = {setArrList}
        />} />

      <Route path="/TodoItem" element={<TodoItem
          input = {input}
          arrList = {arrList} setArrList = {setArrList}
        />} />
      </Routes>

      <>
      
      </>


    </BrowserRouter>
  );
}

export default App;
