import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);
  let [currtime, getTime] = React.useState(time)

  function newTime(){
    let newtime = new Date().toLocaleTimeString();
    getTime(currtime=newtime)
    console.log(currtime)
  }
  //Automatic update the time
  setInterval(newTime, 1000);
  return (
    <div className="container">
      <h1>{currtime}</h1>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}



export default App;
