import React,{useState} from "react";
import Contact from "./Contact";


export default function AppContact(){

    const[contact,setcontact]=useState([
        {name:'Ivana Ivanova',avatar:'/Avatar/1.png',status: false},
        {name:'Petara Ivanova',avatar:'/Avatar/2.png',status: false},
        {name:'Bobi Petrov',avatar:'/Avatar/3.png',status: true},
    ]);

    return(
        <div>
            <Contact 
            item={contact}
            /> 
        </div>
    )
}