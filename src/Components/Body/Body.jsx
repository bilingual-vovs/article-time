import React from "react";


import "modern-normalize"
import style from "./Body.module.css"

import articles from "./articles.json"
import Article from "../Article/Acticle";

const Body = () => {
    return (
        <div className={style.body}>
            <Article 
            id={articles.id}
            name={articles.name}
            author={articles.author}
            text={articles.article}></Article>
        </div>
    )
} 

export default Body