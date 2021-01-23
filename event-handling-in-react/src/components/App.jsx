import React, { useState } from "react";

function App() {

   const [headtext,setSubmit] = useState("Hello")

   const [backColor,setColor] = useState(false)

   function changeHead(){
        setSubmit("Submitted")
   }
   function handleMouseOver(){
   setColor(true)
  }
   function handleMouseOut(){
    setColor(false)
  }
    
  return (
    <div className="container">
      <h1>{headtext}</h1>
      <input type="text" placeholder="What's your name?" />
    <button 
    onClick={changeHead} 
    style={{backgroundColor:backColor?"black":"white"}}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    >Submit</button>
    </div>
  );
}

export default App;
