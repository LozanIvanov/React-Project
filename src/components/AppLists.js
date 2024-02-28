import React,{useState} from "react";
import List from "./List";

export default function Lists(){
  const [items,setitems]=useState([
    {name:'gosho',lastname:'ivanov', description:'hello gosh'},
    {name:'gosho',lastname:'ivanov', description:'hello gosh'},
    {name:'gosho',lastname:'ivanov', description:'hello gosh'}
  ])
    return(
        <div>
          <List 
          items={items}
          />
        </div>
    )
}