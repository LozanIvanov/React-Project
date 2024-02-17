import React, { useState } from "react";

import './Menue.css';

export default function Menue() {

    const [display, setdisplay] = useState('none');

    return (
        <div>
            <nav className="menu">
                <div className="toggle">
                    <button onClick={() => {
                        if (display == ('none')) {
                            setdisplay('block')
                        } else {
                            setdisplay('none')
                        }
                    }} ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg></button>
                </div>
                <ul className="menu-items" style={{display}}>
                    <li>
                        <a href=''>Home</a>
                    </li>
                    <li>
                        <a href=''>About</a>
                    </li>
                    <li>
                        <a href=''>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}