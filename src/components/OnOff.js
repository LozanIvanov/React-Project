import React,{useState} from "react";
export default function OnOff(){
         const[state, setState]=useState('off')
    return(
          <div>
            <button 
            style={ {color: state=='on'? 'green': 'red'} }
            onClick={()=>{
                if(state=='on'){
                    setState('off')                
                }else{
                    setState('on')
                }
            }}
                >{state}</button>
          </div>
    )
}