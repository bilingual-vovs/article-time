import React from "react";

import "modern-normalize"

import style from "./Header.module.css"


const Header = () => {
    return (
        <div className={style.header}>
            <h2 className={style.intArt}>IntArt</h2>
            <div className={style.elementsDiv}>
                <h2 className={style.element}>About</h2>
                <h2 className={style.element}>Contacts</h2>
                <h2 className={style.element}>Articles</h2>
            </div>
            <img className={style.usrImg} src="https://i1.sndcdn.com/avatars-000333628977-4xmblc-t240x240.jpg" alt="" />
        </div>
    )
}

export default Header