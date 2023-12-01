 import React, { useEffect, useState } from "react"; 
  
 import { getAllNotes } from "../service/noteService"

 export const Note = () => {
 
   const [notes, setNotes]= useState(null)
   useEffect(() => {
    try {
              console.log('try  listUsers called ')
            // do db call or API endpoint axios call here and return the promise.
            getAllNotes()
            .then((res) => {
              setNotes(res);
             
            })
          } catch (error) {
            console.error("signin error!==", error);
            
        }
   }, [setNotes])
 
  
    return (
            <>
                <h1> Notes</h1>
                {notes &&
                      notes.map((note) => {
                        return (
                          <div  > 
                            <ul>
                            <li key={note.description}> {note.description}</li>
                              </ul> 
                              <ul>
                              <li key={note.name}> {note.name}</li>
                                </ul> 
                                
                            
                        </div>);
                    })}
                 
                
            </>
    )

 
  }
 export default Note;