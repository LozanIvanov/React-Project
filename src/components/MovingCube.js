import React, { useState } from "react";


export default function Cube() {

    const [leftRighr, setLeftRight] = useState(0);
    const [topButton, setTopButton] = useState(0);
    

    return (
        <div>
            <div>
                <button onClick={() => {
                    setTopButton(topButton - 10);
                }} >Up</button>
                <button onClick={() => {
                    setTopButton(topButton + 10);
                }} >down</button>
                <button onClick={() => {
                    setLeftRight(leftRighr - 10);
                }} >Left</button>
                <button onClick={() => {
                    setLeftRight(leftRighr + 10);
                }} >Right</button>
            </div>
            <div style={{
                width:50,
                height:50,
                background:'red',
                marginTop:topButton,
                marginLeft:leftRighr
            }} >
              <img src="/images/turtle.avif"  ></img>
            </div>
        </div>
    )
}