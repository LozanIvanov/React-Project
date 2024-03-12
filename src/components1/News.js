import React from "react";
import './News.css';

export default function News({news}){
    function renderNews(n){
        return(
            <div className="news-box">
               <img src={n.urlToImage} />
               <h2>{n.title}</h2>
               <div>{n.author}</div>
               <a href={n.url} target="_blank" >Read</a>
            </div>
        );
    }

    return(
        <div className="news">
 {news.map(renderNews)};
        </div>
    )
}
