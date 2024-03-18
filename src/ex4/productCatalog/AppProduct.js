import React from "react";
import {Routes, Route,Link} from 'react-router-dom'
import ProductL from "./ProductList";
import ProductDetail from "./ProductDetail";

export default function AppProduct(){
    return(
        <div>
            <div>
                <Link to='/products'>Productss</Link>
            </div>
            <Routes>
                <Route path='/products' element={<ProductL/>}/>
                <Route path='/products/:id' element={<ProductDetail/>}/>
            </Routes>
        </div>
    )
}