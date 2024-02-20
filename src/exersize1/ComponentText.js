import React, { useState } from 'react';
import Hello from './Hello';


export default function Text() {
    const [isshown, setisshown] = useState(false)
    return (
        <div>

            <button onClick={() => {
                setisshown(!isshown) 
                
            }}>Click</button>
            {isshown ? <Hello/>:''}
            {isshown && <Hello/>}
        </div>



    )
}