import React from "react";
import propTypes from "prop-types"

import "modern-normalize"

import style from "./Article.module.css"

const Article = ({id, name, author, text}) => {
    return (
        <div id={id} className={style.article}>
            <h2 className={style.name}>{name}</h2>
            <h3 className={style.author}>{author}</h3>
            <p className={style.text}>{text}</p>
        </div>
    )
}

Article.propTypes = {
    id: propTypes.string,
    name: propTypes.string.isRequired,
    author: propTypes.string,
    text: propTypes.string.isRequired
}
export default Article