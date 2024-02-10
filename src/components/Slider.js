import React,{useState} from "react";

export default function Img(){
    const images=['/Images/1.jpg','/Images/2.jpg','/Images/3.jpg'];
    const[selIndex,setIndex]=useState(0);
    return(
        <div>
            <img src={images[selIndex]}
            style={{width:'60%' }}/>
       
        <button onClick={()=>{
            if(selIndex==images.length-1){
                  setIndex(0);
            }else{
                setIndex(selIndex+1)
            }
        }}>Next</button>
         </div>
    )
}