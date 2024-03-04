import React,{useState} from "react";

export default function Contact(props){
   const style={
    con:{
        padding: 20,
        background:'#333'
    },
    inner:{
      display:'flex',
      alignItems:'center',
      marginBotton:10
    },
    img:{

        height: 45,
        width:45,
        borderRadius:'50%'
    },
    namec:{
        color:'white',
        marginLeft: 10
    },
    cur:{
        height: 15,
        width:15,
        borderRadius:'50%',
        background:'green',
        position:'absolute',
        right: 0,
        bottom: 5
    }

   };

   function Render(e){
    return(
        <div style={style.inner}>
            <div style={{position:'relative'}}>
                <img style={style.img} src={e.avatar}/>
                <div style={
                    { ...style.cur,
                        background : e.status ? 'green' : 'red'
                    }}></div>
            </div>
            <div style={style.namec}>
                {e.name}
            </div>
        </div>
    )
    }

    return(
        <div style={style.con}>
            {props.item.map(Render)}
        </div>
    )
}