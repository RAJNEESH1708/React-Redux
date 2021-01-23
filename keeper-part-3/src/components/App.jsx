import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes] = useState([])

  function addNote(note){
   console.log(note);
   setNotes((prevState) => {
      return [...prevState,note]
   })

  }

  function deleteNote(id){
    setNotes((prevState) => {
      return prevState.filter((note,index) => {
        return index !== id
      })
   })

  }

  return (
    <div>
      <Header />
      <CreateArea
       add={addNote}
      />
       { notes.map((note,index) =>
         <Note key={index} id={index} 
         title={note.title} content={note.content}
         remove={deleteNote}
         />
        ) }   
      <Footer />
    </div>
  );
}

export default App;
