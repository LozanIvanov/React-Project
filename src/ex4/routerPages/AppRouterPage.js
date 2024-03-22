import React from "react";

import {Routes, Route,Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Private from "./route/PrivateRoute";

export default function AppRoutes(){
    return(
        <div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>

        <Routes>
            <Route path='/' exact element={<Home/>}>Home</Route>
            <Route path='about'element={<About/>} >About</Route>
            <Route element={<Private isLogged={true}/>}>
            <Route path='contact' element={<Contact/>} >Contact</Route>
            </Route>
        </Routes>
        </div>
    )
}