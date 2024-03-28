import React, { useState, useEffect } from "react";
import Note from "./Note";

export default function AppNote() {

    const [notes, setNotes] = useState([]);

    function AddNote() {
        var note = { title: 'df', content: '88' };
        setNotes([note, ...notes])
    }
    function DeleteNote(index) {
       const newt=[...notes];
        newt.splice(index,1);
        console.log(newt[index]);
        setNotes(newt)
    }

    function UpdateN(index, updatednote) {
        const updatednotes = notes.map((note, i) => {
            if (i == index) {
                return updatednote;
            }
            return note;
        })
        setNotes(updatednotes);
    }

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-12" >
                    <button className="btn btn-primary" onClick={AddNote} >Add Note</button>
                </div>
                <div className="col-12">
                    {notes.map((note, index) => (
                        <Note  key={index}
                        note={note}
                            deletenote={()=>DeleteNote(index)}
                            updatenote={UpdateN}
                            index={index}
                        />

                    ))}
                </div>
            </div>

        </div>
    )
}