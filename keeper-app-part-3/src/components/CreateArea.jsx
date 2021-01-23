import React, { useState } from "react";

function CreateArea(props) {

  const [note,setNote] = useState({
    title:"",
    content:""
  })

  function handleNote(event){
   const {name , value} = event.target
    setNote((prevState) => {
          return {...prevState,[name]:value}
        })

  }
  function handleClick(event){
    props.add(note)
    setNote({
      title:"",
      content:""
    })
    event.preventDefault()
  }

  return (
    <div>
      <form>
        <input onChange={handleNote} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleNote} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
