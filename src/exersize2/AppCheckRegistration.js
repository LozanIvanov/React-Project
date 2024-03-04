import React,{useState} from "react";

export default function AppRegistration(){

    const[agree,setagree]=useState(false);
    return(
        <div>
        <div>
            <input type='checkbox' onClick={(e)=>{
                setagree(e.target.checked)
            }}/>
            <label>Agree with rule</label>
        </div>
        <div>
            <button disabled={agree ? '':'disabled'} >Registration</button>
        </div>
        </div>
    )
}