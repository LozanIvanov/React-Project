import React,{useState} from "react";
import Table from "./Table";

export default function AppTable(){

    const columns=['Id','Name','Age'];
    const rows= [
        [1,'Gosho', 30],
        [2,'Pesho', 35],
        [3,'Bobi', 20]
    ];

    return(

        
        <div>
            <Table 
            row={rows}
            col={columns}/>
        </div>
    )
}