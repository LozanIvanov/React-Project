import React,{useEffect,  useRef, useState} from "react";

export default function AppTables(){
    const[user,setUser]=useState([]);
    const [page,setpage]=useState(1);
    const[totalpage,setTotalpage]=useState(1);
    const[use,setuse]=useState(null);
    const[userinitial,setuserinitial]=useState([]);
   
    useEffect=(()=> {
        fetch(`https://reqres.in/api/users?page=`+page)
        .then(response => response.json())
        .then(response => {
            setUser(response.data);
            setTotalpage(response.total_pages);
            setuserinitial(response.data)
           
        });
    
    }, [page]);
   
 
    function renderIn(ser){
        return(
            <tr>
                <td>{ser.id}</td>
                <td>{ser.email}</td>
                <td>{ser.first_name} {ser.last_name}</td>
                <td><img src={ser.avatar} ></img></td>
                <td>
                    <button onClick={()=>{
                        fetch(`https://reqres.in/api/users/${user.id}`)
                        .then(response=>response.json())
                        .then(response=>{
                            setUser(response.data)
                        })
                    }}>Preview</button>
                </td>
            </tr>
            
        )
       
    }
    function renderPage(){
        const page=[];
        for (let i = 0; i < totalpage; i++) {
            page.push(
                <li onClick={()=>setpage(i)}>{i}</li>
            );
            
        }
        return(
            <ul>
                {page}
            </ul>
        )
    }
    function renderTable(){
        return(
            <>
            <div>
                <input type='text' onInput={(e)=>{
                    let input=e.target.value;
                    if(input.length>0){
              const filteruser=userinitial.fillter(user=>user.email.includes(input))
              setUser([...filteruser])
                    }else{
                        setUser([...userinitial])
                    }
                }} />
            </div>
                        <table border={1}>
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
                    {user.map(renderIn)}
                </tbody>

            </table>
            {renderPage}
            </>
        )
    }
    function renderUser(){
        return(
            <>
            <div><img src={user.avatar}></img></div>
            <div>{user.first_name}{user.last_name}</div>
            <button onClick={()=>setuse(null)} >Back</button>
            </>
        )
    }




    return(
        <div>
        {use=== null && renderTable()}
        {use !== null && renderUser()}
        </div>
    );

}