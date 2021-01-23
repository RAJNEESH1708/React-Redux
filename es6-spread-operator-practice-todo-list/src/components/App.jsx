import React, { useState } from "react";


function App() {

  const [input,setChange] = useState("")

  function handelChange(event){
   const {value} = event.target
   setChange(value)
   }
      
  const [items,setItem] = useState([])

   function handelButton() {

    setItem((prevState) => { 
      return [...prevState,input]          
   }) 
   setChange("")    
   }
  
  
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handelChange} name="input" type="text" value={input}/>
        <button onClick={handelButton} type="submit">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        { items.map((it) => <li>{it}</li>) }              
        </ul>
      </div>
    </div>
  );
}

export default App;
