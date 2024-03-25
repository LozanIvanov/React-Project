import React, { useState, useEffect } from "react";
import Note from "./Note";

export default function AppNote() {

    const [notes, setNotes] = useState([]);

    function AddNote() {
        var note = { title: '', content: '' };
        setNotes([note, ...notes])
    }
    function DeleteNote(index) {
       const newt=[...notes];
        newt.splice(index,1);
        console.log(newt[index]);
        setNotes(newt)
    }

    function Update(index, updatednote) {
        const updatednotes = notes.map((note, i) => {
            if (i == index) {
                return updatednote;
            }
            return notes;
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
                            update={Update}
                            index={index}
                        />

                    ))}
                </div>
            </div>

        </div>
    )
}