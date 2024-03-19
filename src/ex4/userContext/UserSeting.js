import React, { useContext } from "react";
import MyContext from "./context/MyContext";

export default function UserSetting() {
    const context = useContext(MyContext);
    return (
        <div>
            <div>
                Username:
                <input type='text' value={context.user.name} 
                onInput={e=>context.setUser({...context.user,name:e.target.value})}
                />
            </div>
            <div>
                Email:
                <input type='email' value={context.user.email} 
                onInput={e=>context.setUser({...context.user,email:e.target.value})}
                />
            </div>
        </div>
    )
}