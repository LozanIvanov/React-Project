import React, { useRef, useState } from "react";

export default function TwoButton() {
    const refOne = useRef(null);
    const refTwo = useRef(null);

    return (
        <div>
            <div>
                <input type='text' ref={refOne} />
                <button onClick={() => refOne.current.focus()}>Click1</button>
            </div>
            <div>
                <input type='text' ref={refTwo} />
                <button onClick={() => refTwo.current.focus()}>Click1</button>
            </div>
        </div>
    )
}