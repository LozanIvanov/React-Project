import React from "react";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

export default function AppSweet(){
    const MySwal=withReactContent(Swal);

    return(
        <div>
            <button 
            onClick={()=>{
                MySwal.fire({
                    title:<p>Hello sweet</p>,
                    html:<div>this is sweet</div>,
                    icon:'success'
                })
            }} >Alert</button>
        </div>
    )
}