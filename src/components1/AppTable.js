import React, { useEffect, useRef, useState } from "react";

export default function AppTables() {
    const [users, setUsers] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpage, setTotalpage] = useState(1);
    const [user, setUser] = useState(null);
    const [userinitial, setuserinitial] = useState([]);
    //console.log( fetch("https://reqres.in/api/users?page=${page}"))

    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${page}`)
            .then(response => response.json())
            .then(x => {
                setUsers(x.data);
                setTotalpage(x.total_pages);
                setuserinitial(x.data)
            })
    }, [page]);


    function renderIn(user, index) {
        return (
            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name} {user.last_name}</td>
                <td><img style={{ width: '100%', height: '100px' }} src={user.avatar} /></td>
                <td>
                    <button onClick={() => {
                        fetch(`https://reqres.in/api/users/${user.id}`)
                            .then(response => response.json())
                            .then(response => {
                                setUser(response.data)
                            })
                    }}>Preview</button>
                </td>
            </tr>

        )

    }
    function renderPage() {
        const page = [];
        for (let i = 1; i <= totalpage; i++) {
            page.push(
                <li onClick={() => setpage(i)}>{i}</li>
            );
        }
        return (
            <ul>
                {page}
            </ul>
        )
    }
    function renderTable() {
        return (
            <>
                <div style={{ width: '40%', margin: '0 auto' }}>
                    <input type='text' onInput={(e) => {
                        let input = e.target.value;
                        if (input.length > 0) {
                            const filteruser = userinitial.filter(user => user.email.includes(input))
                            setUsers([...filteruser]);
                        } else {
                            setUsers([...userinitial]);
                        }
                    }} />
                </div>
                <div style={{ width: '40%', margin: '0 auto' }}>
                    <table border={2}>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Email</td>
                                <td>Name</td>
                                <td>Image</td>
                                <td>Preview</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(renderIn)}
                        </tbody>
                    </table>
                    {renderPage()}
                </div>



            </>
        )
    }
    function renderUser() {
        return (
            <>
                <div><img src={user.avatar}></img></div>
                <div>{user.first_name}{user.last_name}</div>
                <button onClick={() => setUser(null)} >Back</button>
            </>
        )
    }




    return (
        <>
            {user === null && renderTable()}
            {user !== null && renderUser()}
        </>

    );

}