import React from "react";
import './Dropdown.css';

export default function Dropdown({label,options,onChenge}){
    return(
        <div className="dropdown">
            <label className="dd-label">{label}</label>
            <select className="dd-select"onChange={onChenge}>
                <option value=''>Select</option>
                {options.map(option =>(
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}