import React,{useState, useEffect} from "react";

export default function Quotes(){
    const [quotes,setquotes]=useState(['QUE 1','QUE 2','QUE 3']);
    const[show,setshow]=useState('');

    useEffect(()=>{
       const interval= setInterval(()=>{
        let min=0;
        let max=quotes.length-1;
        let rndIndex=Math.floor(Math.random() * (max - min + 1)) + min;
        setshow(quotes[rndIndex]);
       }, 1000);
       return ()=> clearInterval(interval)
    }, []);

    return(
        <div>{show}</div>
    );
}