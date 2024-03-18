import React from "react";

import {Navigate, Outlet} from 'react-router-dom';

export default function Private({isLogged}){
    return(
        isLogged ? <Outlet/>:<Navigate to={'/login'}/>
    )
}