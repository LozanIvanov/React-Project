import React from "react";

export default function ListSingleItem(props) {
     const style={
        container:{
            width: props.width,
            textAlign: 'center',
            padding: 10
        },
        icon:{
            background: 'purple',
            color: 'white',
            padding: 10
        },
        inner:{
            border:'1px solid silver',
            padding:10,
           
        },
        title:{
            fontsize:20
        }
     }
    return (
        <>
            <div style={style.container}> 
                <div style={style.inner}>
                 <i className={props.icon}  style={style.icon}/>
                 <h2 style={style.title}>{props.title}</h2>
                 <div>{props.description}</div>
                </div>
            </div>
        </>
    )
}