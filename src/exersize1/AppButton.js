import React from "react";
import Button from "./Button";

export default function AppButton() {
    return (
        <div>
            <Button
                title="Click"
                onClick={() => {
                    console.log('hello')
                }}
                color="red"
                background="blue"
            />
            {'   '}
            <Button
                title="Button"
                onClick={() => {
                    console.log('hello DD')
                }}
                color=""
                background=""
            />
        </div>
    )
}