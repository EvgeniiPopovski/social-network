import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return <header className = {s.header}>
        <img src='https://www.citibank.ru/russia/images/citigroup/citi-co_2c-blu_pos_rgb.jpg' />
    </header>
}

export default Header;