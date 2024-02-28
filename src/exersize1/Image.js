import React,{useState} from "react";

export default function ImageLi(props){

    const style={
        con:{
            display:'flex',
            JustifyContent:'space-between',
            AlignItems:'centre'
        
        },
        inner:{
            padding:10,
            textAlign:'center',
            width:'30%'
            
        },
        img:{
            width:'100%'
        }
        ,
        tag:{
            background:'silver',
            color:'white',
            borderRadius:'10px',
            fontSize:'25px',
            padding :'2px 10px',
            marginRight:'5px',
            textAlign:'center'

        }
    }
    
    function RenderImage(item){
        return(
            <div style={style.inner}>
                <img style={style.img}
                 src={item.imagePath} />
                 <h3>{item.title}</h3>
                 {item.tags.map(i=><span style={style.tag}>{i}</span>)}
            </div>
        )
    }

    return(
        <div style={style.con}>
            {props.item.map(RenderImage)}
        </div>
    )
}