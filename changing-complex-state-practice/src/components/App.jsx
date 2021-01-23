import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handelChange(event){

    const {value,name} = event.target

   setContact((prevState) => {
       if(name==='fName')
       {
          return {
             fName:value,
             lName:prevState.lName,
             email:prevState.email
          }
       }
       else if(name==='lName')
       {
        return {
          fName:prevState.fName,
          lName:value,
          email:prevState.email
        }
       }
       else if(name==='email')
       {
        return {
          fName:prevState.fName,
          lName:prevState.lName,
          email:value
        }
       }
   })


  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handelChange} name="fName" placeholder="First Name" value={contact.fName}  />
        <input onChange={handelChange} name="lName" placeholder="Last Name" value={contact.lName} />
        <input onChange={handelChange} name="email" placeholder="Email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
