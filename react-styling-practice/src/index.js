//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react"
import ReactDOM from "react-dom"

const date = new Date()

const hour = date.getHours()

let greeting ;

const styles = {
  color:'',
}

if(hour<12)
{
greeting = "Good Morning"
styles.color = 'red'
}
else if(hour<18)
{
greeting = "Good Afternoon"
styles.color = 'green'
}
else{
  greeting = "Good Night"
  styles.color = 'blue'
}


  ReactDOM.render(
    <div>
    <h1 className='heading' style={styles}>{greeting}</h1>
    </div>,
    document.getElementById('root')
    )


