import React, { useState } from "react";

function App() {

  // const [fname,setfName] = useState('')
  // const [lname,setlName] = useState('')

  // function handelFname(event){
  //    setfName(event.target.value)
  //    console.log(event.target.value);
     
  // }
  // function handelLname(event){
  //   setlName(event.target.value)
  //   console.log(event.target.value);
  // }
   
  const [fullName,setfullName] = useState({
     fname:"",
     lname:""
  })

  function handelChange(event){
   const {value,name} = event.target

       setfullName(prevValue => {
       if(name === "fName")
       {
         return {
               fname : value,
               lname : prevValue.lname,
              }
       }
       else if(name === "lName")
       {
        return {
          fname : prevValue.fname,
          lname : value,
         }
       }
       })
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <form>
        <input onChange={handelChange} name="fName" placeholder="First Name" value={fullName.fname}/>
        <input onChange={handelChange} name="lName" placeholder="Last Name" value={fullName.lname}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
