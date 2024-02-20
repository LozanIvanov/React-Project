import React,{useState} from "react";

export default function ObjectAssing(){
    const[user,setuse]=useState({name:'gosho',age:20})

    function handleClick(){
        setuse({...user,age: user.age+1})
    }
    return(
        <div>
            <div> {JSON.stringify(user)} </div>
            <div>
                <button onClick={handleClick} >Inc Age</button>
            </div>
        </div>
        

        </div>
    )
}