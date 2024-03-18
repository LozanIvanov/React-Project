import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

export default function AppDelete() {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        Fetchtodo();
    }, []);

    function Fetchtodo() {

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response =>
                setTodos(response.data)
            )
    }
    function deleteTodo(id) {
        const index = todos.findIndex(x => x.id == id);
        const temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }
    return (
        <div>

            <ul>
                {todos.map(x =>
                    <li key={x.id}>
                        {x.title}
                        <button onClick={() => deleteTodo(x.id)}>Delete</button>
                    </li>)}
            </ul>
        </div>
    )
}