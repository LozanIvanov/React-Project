import React, { useState } from "react";
import './Menu/Menu.css'
 function Page() {
    return (
        <nav className="menu-nav">
            <ul className="menu-nav-ul">
                <li className="menu-nav-item">
                    <a href="">Home</a>
                </li>
                <li className="menu-nav-item">
                    <a href="">About us</a>
                </li>
                <li className="menu-nav-item">
                    <a href="">Contacts</a>
                </li>
            </ul>
        </nav>
    )
}
export default Page;