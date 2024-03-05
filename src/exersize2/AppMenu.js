import React,{useState} from "react";
import Menu
 from "./Menus";

export default function AppMenu(){
 const items=[
    {label:'Home', link: '/'},
    {label:'Contact', link: '/contact'},
    {label:'About', link: '/about'},
 ]
    return(
        <div>
         <Menu 
         item={items}
         />
        </div>
    )
}