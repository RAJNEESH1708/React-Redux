import React, { useState } from "react";

function App() {

  const [name,setName] = useState("")
   
  const [submitName,setSubmitName] = useState("")
   
  function handelName(event){
   console.log(event.target.value);
   setName(event.target.value)  
  }
  
  function finalName(event){
    setSubmitName(name)

    event.preventDefault()
  }

  return (
    <form onSubmit={finalName}>
      <div className="container">
      <h1>Hello {submitName}</h1>
      <input onChange={handelName} type="text" placeholder="What's your name?" value={name}/>
      <button type='submit'>Submit</button>
    </div>
    </form>
    
  );
}

export default App;
