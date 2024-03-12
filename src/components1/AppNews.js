import React,{useEffect,useState} from "react";
import HeaderNews from "./HeaderNews";
import News from "./News";

export default function AppNews(){

    const[news,setnews]=useState([]);

    function ReturnNews(){
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=3ced8c0db7604f6db272a753e560664c`)
         .then(response=>response.json())
         .then(response=>{
            setnews(response.articles);
         })
    }
    useEffect(()=>{
       // ReturnNews();
    },[])

    return (
        <div>
            <HeaderNews/>
            <News news={news} />
        </div>
    )

}
