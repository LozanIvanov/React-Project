import React from "react";
import CarCard from "./cars/Car";

export default function Appcar(){
    const cars=[
        {brand:'BMW',model: '3 serie',image:'/Car/1.jpg',horsePowers:455},
        {brand:'Mercedes',model: 'GT',image:'/Car/2.jpg',horsePowers:305}
    ]
    return(
        <div style={{padding: 20, display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
            {cars.map(x=><CarCard {...x} width={'35%'}/>)}
        </div>
    )
}