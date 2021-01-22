import React from "react";
import Login from "./Login"

var isLoggedIN = 0;

const currentHour = new Date().getHours()

function App() {
  return (
    <div className="container">
      {isLoggedIN?<h1>Hello User!</h1>:<Login />}
      {/* {currentHour > 12 && <h1>Why are you working ?</h1>} */}
    </div>
  );
}

export default App;
