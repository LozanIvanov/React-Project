import React,{useState} from "react";
import User from "./UserDefault";

export default function AppDefaultUser(){
   const[user,setuser]=useState([
    {name: 'Gosho', age: 20 ,interests:['js','Java','PHP']},
    {name: 'Ivan', age: 30 ,interests:['C#','JavaScript']}
   ])
    return(
        <div>
            {user.map(x=>
                <User  
                name={x.name}
                age={x.age}
                interests={x.interests}

                /> )}
        </div>

    )
}