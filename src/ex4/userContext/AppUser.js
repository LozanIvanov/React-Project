import React,{useState} from "react";
import MyContext from "./context/MyContext";
import UserProfile from "./UserProfile";
import UserSetting from "./UserSeting";

export default function AppUserContext(){
    const[user,setUser]=useState({name:'',email:''});

    return(
        <div>
            <MyContext.Provider value={{user,setUser}}>
                 <UserProfile/>
                 <UserSetting/>
            </MyContext.Provider>
        </div>
    )
}
