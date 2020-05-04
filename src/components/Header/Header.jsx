import React from 'react';
import s from './Header.module.css'

import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className = {s.header}>
        <img src='https://www.citibank.ru/russia/images/citigroup/citi-co_2c-blu_pos_rgb.jpg' />
        <div className={s.authMe}>
            {props.AuthMe.isLogged ? <div>{props.AuthMe.login} - <button onClick={props.logout}>Выйти</button> </div> : <NavLink to='/login' className={s.authMe}>
                Login
            </NavLink> }
        </div>
    </header>
}

export default Header;