import React from "react";
import axios from 'axios';
import { useState } from "react";

export default function AppPost(){
    const[title,setTitle]=useState('');

      function saveTodo(){
        const todo={
            completed:false,
            title:title
        }
        axios.post('https://jsonplaceholder.typicode.com/todos',todo)
        .then(response=>{
            setTitle('');
            alert('Success')
        })
      }
    return(
        <div>
            <div>
                <label>Title</label>
                <imput type='text'value={title}
                oninput={e=>setTitle(e.target.value)}/>
            </div>
            <div>
                <button onClick={saveTodo} >Save</button>
            </div>
        </div>
    )
}