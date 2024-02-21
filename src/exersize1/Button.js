import React from "react";

export default function Button(props){
    const styleb={
        border:'unset',
        color:props.color ??'white',
        background:props.background ??'oringe'
    };

    return(
        <>
        <button onClick={props.onClick} style={styleb}>{props.title}</button>
        </>
    )
}