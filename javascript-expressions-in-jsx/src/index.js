import React from "react";
import ReactDOM from "react-dom";

const name = 'Rajneesh'
const lastname = 'Pandey'

const dob = 17082000

ReactDOM.render(
<div>
  <h1>Hello World! this is {` ${name} ${lastname} `}</h1>
  <p>My DOB in {dob}</p>
</div>,
document.getElementById("root"));



