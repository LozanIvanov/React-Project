import React, { useEffect, useState } from "react";
import axios from "axios";
import './AppFiltter.css';

export default function AppFiltter() {
    const per_page = 10;
    const [product, setproduct] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpage, settotalpage] = useState(1);

    useEffect(() => {
        let skip = (page - 1) * per_page;
        axios.get(`https://dummyjson.com/products?limit=${per_page}&skip=${skip}`)
            .then(response => {
                let data = response.data;
                setproduct(data.products);
                let pages = Math.ceil(data.total / per_page);
                settotalpage(pages)

            })
    }, [page]);

    function renderPage(){
        const element=[];
        for (let i = 1; i <= totalpage; i++) {
            element.push(<li onClick={()=>setpage(i)} className="{page}" key={i}>{i}</li>)
            
        }
        return <ul>{element}</ul>
    }

    function renderProduct() {
        return product.map(x => <tr key={x.id}>
            <td>{x.id}</td>
            <td>{x.title}</td>
            <td>{x.price}</td>
            <td>{x.stock}</td>
            <td >
                <img src={x.thumbnail} style={{ width: '100%', height: '100px' }} ></img>
            </td>
            <td>
                <button
                onClick={()=>{
                    let index=product.findIndex(y => y.id == x.id);
                    let prod= [...product];
                    prod.splice(index,1);
                    setproduct(prod);
                }}
                >Delete</button>
            </td>
        </tr>)
    }
    /*  function handleDelete(id) {
        const updatedProducts = product.filter(item => item.id !== id);
        setProduct(updatedProducts);
        <button onClick={()=> handleDelete(x.id)}>Delete<button>
    }*/ 

    return (
        <div className="AppFiltter">
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Stock</td>
                        <td>Image</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {renderProduct()}
                    <tr colSpan={6}>
                        {renderPage()}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}