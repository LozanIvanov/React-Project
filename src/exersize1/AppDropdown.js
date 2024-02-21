import React,{useState} from "react";
import Dropdown from "./Dropdown";

export default function AppDropdown(){
    const options=[
        {label:'option 1',value: 1},
        {label:'option 2',value: 2},
        {label:'option 3',value: 3},
    ]
    return(
        <div>
            <Dropdown
            label='please select'
            options={options}/>
        </div>
    )
}