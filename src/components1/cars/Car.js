import React from "react";
import './Car.css';

export default function CarCard(props){

    return(
        <div className="card" style={{width:props.width}}>
            <img src={props.image}></img>
            <div className="card-content">
                <h2>{props.brand} - {props.model}</h2>
                <p>{props.horsePower} HorsePower</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}