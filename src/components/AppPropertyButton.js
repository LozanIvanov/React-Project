import React, { useState } from "react";
import Button from "./PropertyButton";

export default function Apps() {

    function handleClick() {
        alert('another')
    }
    return (
        <div>
            <button
                text='click me'
                onClick={() => {
                    alert('hi')
                }}
            />

            <button
                text='Example'
                onClick={handleClick}
            />
        </div>
    )
}