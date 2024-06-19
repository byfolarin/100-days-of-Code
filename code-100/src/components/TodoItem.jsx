import React from 'react'

const TodoItem = ({input,arrList,setArrList}) => {

    const getArr = () =>{
        setArrList(i =>[...i, input])
    }

    // const itemList = {
    //     id: Math.random() * 100,

    // }


  return (
    <div>
      <li>{arrList}</li>
    </div>
  )
}

export default TodoItem
