import React, { useState } from 'react';
import LoggedUser from './LoginUser';
import GuestUser from './GuestUser';

export default function App(){

   const[isLoged,setIsloged]=useState('false')
 return(
    <div>
      <button onClick={()=>{
         setIsloged(!isLoged)
      }} > {isLoged ? 'Logout':'Login'}</button>
      {isLoged ? <LoggedUser/> :<GuestUser/>}

      {isLoged && <LoggedUser/>}
      {!isLoged && <GuestUser/>} 
      Това е рендиране на елементи
    </div>
 )
}