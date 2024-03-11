import React from "react";

export default function Header(){

    const style={
        header:{
            background:'#4b51bf',
            padding: 25,
            color: 'white',
            fontSize: 20,
            textAlign: 'center'
        }
    }
    return(
        <header style={style.header}>
            Movie Search App
        </header>
    )
}