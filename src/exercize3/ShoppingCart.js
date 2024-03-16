import React, { useState, useEffect, useRef } from "react";


export default function App3() {

    const product = [
        { id: 1, name: 'tomato', category: 'vegetable', price: 20, av: 'false' },
        { id: 2, name: 'apple', category: 'fruid', price: 10, av: 'false' },
        { id: 3, name: 'kiwi', category: 'fruid', price: 5, av: 'true' },
        { id: 4, name: 'pear', category: 'fruid', price: 30, av: 'true' },
    ]
    const [products, setproducts] = useState([]);
    const [p, setp] = useState(product);
    const [car, setcar] = useState([]);
    const [show, setshow] = useState(true);

    function cart(id) {
        const g = p.find(x => x.id === id);
        car.push(g);
        setcar([...car])

        setshow(false)
    }
    function renderCart(p) {
        let totalprice = parseInt(p.price)

        return (
            <tr>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{totalprice}</td>
            </tr>
        )
    }

    function renderProduct(products, index) {
        return (
            <tr key={index}>
                <td>{products.name}</td>
                <td>{products.category}</td>
                <td>{products.price}</td>
                <td><button onClick={() =>
                    cart(products.id)
                }>Add</button></td>
            </tr>)
    }

    function table() {
        return (
            <>
                <input type='text' onInput={(e) => {
                    let inp = e.target.value;
                    if (inp.length > 0) {
                        const fl = p.filter(x => x.name == inp)
                        setproducts([...fl])
                    }
                    else {
                        setproducts([...product])
                    }

                }} />
                <label>Available produck</label>
                <input type='checkbox' onClick={(e) => {
                    if (e.target.checked == true) {
                        const d = p.filter(x => x.av == 'true')
                        setproducts([...d]);
                    }
                }} />

                <table border={1}>
                    <thead>
                        <tr >
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>AddCar</th>
                        </tr>
                    </thead>
                    <tbody >
                        {p.map(renderProduct)}
                    </tbody>
                </table>
            </>
        )
    }

    function inputShowTable() {
        return (
            <div >
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>category</th>
                            <th>price</th>
                            <th>AddToCart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(renderProduct)}
                    </tbody>
                </table>
                <button onClick={() => setproducts([])} > Back</button>
            </div>
        )
    }
    function choppingCartTable() {
        const totalPrice = car.reduce((total, product) => total + parseInt(product.price), 0)
        return (
            <div >
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>price</th>
                            <th>totalprice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {car.map(renderCart)}
                    </tbody>
                </table>
                <div>Total Price: {totalPrice}</div>
                <button onClick={() =>
                    setshow(true)
                }>Back</button>
            </div>
        )
    }


    return (
        <div>
            {show && <div> {products.length != 0 && inputShowTable()}
                {products.length == 0 && table()}</div>}

            {!show && choppingCartTable()}



        </div>
    )
}