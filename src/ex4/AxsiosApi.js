import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";


export default function AppAxios(){
    const[todos,setTodos]=useState([]);
     
    useEffect(()=>{
FetchD();
    },[])
    function FetchD(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response=>{
            setTodos(response.data);
        })
    }

    async function Fetchdata(){
        const response= await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
    }

    return(
        <div>
            {todos.map(todo=><li key={todo.id}>{todo.title}</li>)}
        </div>
    )
}