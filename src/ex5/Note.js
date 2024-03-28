import React, { useState } from "react";

export default function Note({ note,updatenote ,deletenote,index }) {

    const[isedit,setisedit]=useState(true);
    const[updated,setupdated]=useState(note);

     function InputChange(e){
        const{name,value}=e.target;
        setupdated({...updated,[name] : value})
     }
    function show(){
        return(<>
         <h2>{note.title}</h2>
         <p>{note.content}</p>
        </>)
    }
    function EditForm(){
        return(
            <>
           <input type='text'
            value={updated.title}
            className="form-control mb-3" 
            name='title'
            onChange={InputChange}
            />
           <textarea type='text' 
           value={updated.content} 
           className="form-control mb-3" 
            name='content'
            onChange={InputChange}>
           </textarea>
           <button onClick={saveclick} className="btn btn-success" >save</button>
           </>
        )
    }
    function HandleEdit(){
        setisedit(false)
    }
    function saveclick(){
        updatenote(index,updated);
        setisedit(true)
    }
    return (
        <div>
            <div className="row">
                <div className="col-8">
                    {isedit ?  show() : EditForm() }
                </div>
                <div className="col-4">
                    <button  onClick={()=>HandleEdit()} className="btn btn-warning text-white fw-bold me-3">
                        <i className="fa fa-pencil"> </i>
                        &nbsp; Edit
                    </button>

                    <button onClick={()=>{{setisedit(true)} deletenote(index)} } className="btn btn-danger text-white fw-bold ">
                        <i className="fa fa-star"> </i>
                        &nbsp; Delete
                    </button>
                </div>


            </div>
        </div>
    )
}