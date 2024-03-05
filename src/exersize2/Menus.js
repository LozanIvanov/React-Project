import React,{useState} from "react";
import './Menus.css'


export default function Menu(props){
    const [show,setshow] = useState(false)

    return(
        <nav className="menu">
            <button className="d-hide" onClick={()=>{
                setshow(!show)
            }}>
                <i className='fa fa-bars' ></i>
            </button>
            <ul className={!show && "m-hide"}>
                {props.item.map(x=>
                    <li>
                        <a href={x.link} >{x.label}</a>
                    </li>)}
            </ul>

        </nav>
    )
}