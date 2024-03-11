import React from "react";
import './SearchBar.css'

export default function SearchBar({onButtonClick,setSearchterm}){
    return(
        <div className="search-form">

          <input  type='text' 
          placeholder="Please enter movie name"
          className="search input"
          onChange={(e)=>setSearchterm(e.target.value)}/>

          <button onClick={onButtonClick} className="search-button">Search </button>
        </div>
    )
}