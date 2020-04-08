import React from "react";
import preloader from "../../img/preloader.gif";
import s from '../Users/Users.module.css'

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;