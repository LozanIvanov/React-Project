import React,{useState} from "react";

export default function InputS(props){

    const style={
        title:{
            fontWeight:500,
            textTransform:'uppercase'
        },
        input:{
            display:'block',
            width:'100%',
            padding: 10,
            fontSize: 18
        }
    }
    return(
        <div>
             <label style={style.title}>{props.title}</label>
             <input type='text' placeholder={props.placeholder}
             onInput={props.onInput} style={style.input} />
        </div>
    )
}