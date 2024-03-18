import React from "react";

import{Link} from 'react-router-dom';

export default function ProductL(){
    const products=[
        {id: 1, names: 'Product1', price: 10},
        {id: 2, names: 'Product2', price: 20},
        {id: 3, names: 'Product3', price: 30},
    ];

    return(
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(x=>(
                    <li key={x.id}>
                     <Link to={`/products/${x.id}`}>{x.names}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}