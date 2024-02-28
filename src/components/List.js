import React from "react";
import Listsingle from "./Listsingle";

export default function List(props){

    return(
        <div>
{props.items.map(x=> <Listsingle
    name={x.name}
    lastname={x.lastname}
    description={x.description}
/>)}
        </div>
    )
}