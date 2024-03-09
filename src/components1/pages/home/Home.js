import React from "react";
import withLayout from'../../layouts/withLayout';
import'./Home.css'


function Homes(){
   return(
    <main>
        <h1>Hello from home</h1>
        <img src={'/Images/1.jpg'}></img>
    </main>
   )
}

export default withLayout(Homes)