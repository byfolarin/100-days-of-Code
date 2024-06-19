import React, { useEffect, useState } from 'react';
import Modal from './unused comp/Modal';

const TodoList = () => {
  const [input, setInput] = useState("");
  const [arrList, setArrList] = useState([]);
  const [prompts, setPrompts] = useState("");


    function sortClick (){
        const inputName = prompt("what's your name");
        setPrompts(inputName); 
    }




  const month = new Date().getMonth();
  const day = new Date().getDay().toString();
  const newDate = month === 5 ? "June" : month; // No need for toString

  
  function handleClick(){
    setArrList((prevArr) => {
      if (input.trim()) 
        {return [...prevArr, {id: Math.round(Math.random() * 100) + 1,task: input,date: `${newDate }  ${day}`,}];}
    }); setInput(" ")  }

    
    const keys = (event) => {
        if (event.keyCode === 13) 
          handleClick();
        }
 

  const getInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="todo-gap">
      <Modal />
    <button onClick={sortClick}>Click Here first</button>
      <h1 className="todo-name">Hello: {prompts}</h1>

      <div className="input-button">
        <input
          type="text"
          name=""
          value={input}
          onKeyDown={keys}
          onChange={getInput} // Dependency on 'input' added here
          id="search-bar"
          className="input-search"
          placeholder="+ Insert a link, color, or just plain text..."
        />
        <button onClick={handleClick}>+</button>
      </div>

      <div className="div-title">
        <p>Title</p>
        <p>Date Created</p>
      </div>

      <div className="rule"></div>

      <div className="div-list-item">
        {arrList.map((item) => (
          <li className='list-keys' key={item.id}>
            <span>{item.task} </span> <span>{item.date}</span>  
          </li>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
